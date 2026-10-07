import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { afterEach, test } from 'node:test'

// Load the browser ES module without changing the Vue project's module format.
const source = await readFile(new URL('../src/analytics.js', import.meta.url), 'utf8')
const { initializeAnalytics, gtagProxy } = await import(
  `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
)

afterEach(() => {
  delete globalThis.window
  delete globalThis.document
})

test('an unconfigured build does not load a tag or require browser globals', () => {
  assert.doesNotThrow(() => initializeAnalytics(undefined))
  assert.doesNotThrow(() => initializeAnalytics(''))
})

test('initialization preserves queued data and buffers events before the tag loads', () => {
  const queued = { existing: true }
  globalThis.window = { dataLayer: [queued] }
  const scripts = []
  globalThis.document = {
    createElement: () => ({}),
    head: { appendChild: script => scripts.push(script) }
  }

  initializeAnalytics('G-TEST123456')
  gtagProxy.event('action', { event_category: 'navigate' })
  gtagProxy.query('event', 'view教材', { name: '教材' })

  assert.equal(window.dataLayer[0], queued)
  const commands = window.dataLayer.slice(1).map(args => Array.from(args))
  assert.equal(commands[0][0], 'js')
  assert.ok(commands[0][1] instanceof Date)
  assert.deepEqual(commands.slice(1), [
    ['config', 'G-TEST123456'],
    ['event', 'action', { event_category: 'navigate' }],
    ['event', 'view教材', { name: '教材' }]
  ])
  assert.deepEqual(scripts, [{
    async: true,
    src: 'https://www.googletagmanager.com/gtag/js?id=G-TEST123456'
  }])
})

test('the event and query APIs preserve an existing Google tag function', () => {
  const calls = []
  const existingTag = (...args) => calls.push(args)
  globalThis.window = { gtag: existingTag }
  globalThis.document = { createElement: () => ({}), head: { appendChild: () => {} } }

  initializeAnalytics('G-TEST123456')
  assert.equal(window.gtag, existingTag)
  gtagProxy.event('action', { value: 1 })
  gtagProxy.query('set', { debug_mode: true })
  assert.deepEqual(calls.slice(2), [
    ['event', 'action', { value: 1 }],
    ['set', { debug_mode: true }]
  ])
})

test('tracking stays safe when Analytics is unavailable', () => {
  assert.doesNotThrow(() => gtagProxy.event('action'))
  globalThis.window = {}
  assert.doesNotThrow(() => gtagProxy.query('event', 'action'))
})
