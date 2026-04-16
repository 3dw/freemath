<template lang="pug">
  .coins-container
    .ui.container
      h1.ui.header {{ sify('硬幣排列工具') }}

      .split-zones
        //- 左側放置區
        .zone-wrapper
          .zone-label {{ sify('左側') }}
          .drop-zone(
            @dragover.prevent
            @drop="onDrop($event, 'left')"
            @dragenter.prevent
            @dragleave.prevent
            ref="dropZoneLeft"
          )
            .placed-coins
              .placed-coin(
                v-for="(coin, index) in leftCoins"
                :key="coin.id + '-L-' + index"
                :draggable="true"
                @dragstart="onPlacedCoinDragStart($event, index, 'left')"
                @touchstart="onTouchStart($event, coin, 'placed', index, 'left')"
                :style="{ backgroundColor: coin.color, left: coin.x + 'px', top: coin.y + 'px', width: coin.size + 'px', height: coin.size + 'px' }"
              )
                span.coin-value ${{ coin.value }}
            .drop-zone-text(v-if="leftCoins.length === 0")
              p {{ sify('將硬幣拖曳到此處') }}
          .zone-total {{ sify('總額') }}：${{ leftTotal }}

        .zone-divider +

        //- 右側放置區
        .zone-wrapper
          .zone-label {{ sify('右側') }}
          .drop-zone(
            @dragover.prevent
            @drop="onDrop($event, 'right')"
            @dragenter.prevent
            @dragleave.prevent
            ref="dropZoneRight"
          )
            .placed-coins
              .placed-coin(
                v-for="(coin, index) in rightCoins"
                :key="coin.id + '-R-' + index"
                :draggable="true"
                @dragstart="onPlacedCoinDragStart($event, index, 'right')"
                @touchstart="onTouchStart($event, coin, 'placed', index, 'right')"
                :style="{ backgroundColor: coin.color, left: coin.x + 'px', top: coin.y + 'px', width: coin.size + 'px', height: coin.size + 'px' }"
              )
                span.coin-value ${{ coin.value }}
            .drop-zone-text(v-if="rightCoins.length === 0")
              p {{ sify('將硬幣拖曳到此處') }}
          .zone-total {{ sify('總額') }}：${{ rightTotal }}

      .equation-box(v-if="showEquation")
        span.eq-text ${{ leftTotal }} + ${{ rightTotal }} = ${{ leftTotal + rightTotal }}

      .controls
        button.ui.button.teal(@click="toggleEquation") {{ sify('合計') }}
        button.ui.button.primary(@click="clearAll") {{ sify('清除全部') }}

      .coins-toolbar(
        @dragover.prevent
        @drop="onToolbarDrop($event)"
      )
        .coin-item(
          v-for="coin in availableCoins"
          :key="coin.id"
          :draggable="true"
          @dragstart="onDragStart($event, coin)"
          @touchstart="onTouchStart($event, coin, 'toolbar')"
          :style="{ backgroundColor: coin.color, width: coin.size + 'px', height: coin.size + 'px' }"
        )
          span.coin-value ${{ coin.value }}

      //- 浮動硬幣（觸控拖曳時顯示）
      .placed-coin(
        v-if="touchDragging && touchDragCoin && touchDragCoin.x !== null && touchDragCoin.y !== null"
        :style="{ backgroundColor: touchDragCoin.color, left: touchDragCoin.x + 'px', top: touchDragCoin.y + 'px', position: 'fixed', zIndex: 9999, pointerEvents: 'none', width: (touchDragCoin.size || 50) + 'px', height: (touchDragCoin.size || 50) + 'px' }"
      )
        span.coin-value ${{ touchDragCoin.value }}
</template>

<script>
import { sify } from 'chinese-conv'

export default {
  name: 'CoinsView',
  props: ['si'],
  data() {
    return {
      availableCoins: [
        { id: 'coin-1', value: 1, color: '#C0C0C0', size: 40 },
        { id: 'coin-5', value: 5, color: '#C0C0C0', size: 45 },
        { id: 'coin-10', value: 10, color: '#C0C0C0', size: 50 },
        { id: 'coin-50', value: 50, color: '#CD7F32', size: 55 }
      ],
      leftCoins: [],
      rightCoins: [],
      draggedCoin: null,
      draggedIndex: null,
      draggedSide: null,
      showEquation: false,
      // 觸控專用
      touchDragging: false,
      touchDragCoin: null,
      touchDragIndex: null,
      touchDragSide: null,
      touchOffset: { x: 0, y: 0 },
      originalCoin: null
    }
  },
  computed: {
    leftTotal() {
      return this.leftCoins.reduce((sum, coin) => sum + coin.value, 0)
    },
    rightTotal() {
      return this.rightCoins.reduce((sum, coin) => sum + coin.value, 0)
    }
  },
  methods: {
    sify(t) {
      return this.si ? sify(t) : t
    },
    toggleEquation() {
      this.showEquation = !this.showEquation
    },
    // 滑鼠拖曳：從工具列
    onDragStart(event, coin) {
      this.draggedCoin = { ...coin, id: coin.id + '-' + Date.now() }
      this.draggedIndex = null
      this.draggedSide = null
      event.dataTransfer.effectAllowed = 'copy'
      event.dataTransfer.setData('text/plain', coin.id)
      event.stopPropagation()
    },
    // 滑鼠拖曳：從排列區
    onPlacedCoinDragStart(event, index, side) {
      this.draggedIndex = index
      this.draggedSide = side
      const arr = side === 'left' ? this.leftCoins : this.rightCoins
      this.draggedCoin = { ...arr[index] }
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('text/plain', 'placed-' + side + '-' + index)
      event.stopPropagation()
    },
    onDrop(event, targetSide) {
      event.preventDefault()
      event.stopPropagation()

      const refKey = targetSide === 'left' ? 'dropZoneLeft' : 'dropZoneRight'
      const rect = this.$refs[refKey].getBoundingClientRect()
      const coinSize = this.draggedCoin ? (this.draggedCoin.size || 50) : 50
      const x = event.clientX - rect.left - coinSize / 2
      const y = event.clientY - rect.top - coinSize / 2

      // 若是從排列區拖來，先移除原位置
      if (this.draggedIndex !== null && this.draggedSide !== null) {
        const srcArr = this.draggedSide === 'left' ? this.leftCoins : this.rightCoins
        srcArr.splice(this.draggedIndex, 1)
        this.draggedIndex = null
        this.draggedSide = null
      }

      if (this.draggedCoin) {
        const targetArr = targetSide === 'left' ? this.leftCoins : this.rightCoins
        targetArr.push({
          ...this.draggedCoin,
          x: Math.max(0, Math.min(x, rect.width - coinSize)),
          y: Math.max(0, Math.min(y, rect.height - coinSize))
        })
        this.draggedCoin = null
      }
    },
    onToolbarDrop(event) {
      event.preventDefault()
      event.stopPropagation()
      if (this.draggedIndex !== null && this.draggedSide !== null) {
        const arr = this.draggedSide === 'left' ? this.leftCoins : this.rightCoins
        arr.splice(this.draggedIndex, 1)
        this.$forceUpdate()
      }
      this.draggedCoin = null
      this.draggedIndex = null
      this.draggedSide = null
    },
    // 觸控拖曳
    onTouchStart(e, coin, type, index, side) {
      if (e.touches.length !== 1) return
      e.preventDefault()
      this.touchDragging = true
      if (type === 'toolbar') {
        this.touchDragCoin = { ...coin, id: coin.id + '-' + Date.now() }
        this.touchDragIndex = null
        this.touchDragSide = null
      } else {
        this.touchDragCoin = { ...coin }
        this.touchDragIndex = index
        this.touchDragSide = side
      }
      const touch = e.touches[0]
      const rect = e.target.getBoundingClientRect()
      this.touchOffset = {
        x: touch.clientX - (rect.left + rect.width / 2),
        y: touch.clientY - (rect.top + rect.height / 2)
      }
      this.originalCoin = coin
      this.touchDragCoin.x = null
      this.touchDragCoin.y = null
      window.addEventListener('touchmove', this.onTouchMove, { passive: false })
      window.addEventListener('touchend', this.onTouchEnd, { passive: false })
    },
    onTouchMove(e) {
      if (!this.touchDragging || !this.touchDragCoin) return
      e.preventDefault()
      const touch = e.touches[0]
      this.touchDragCoin.x = touch.clientX - this.touchOffset.x - this.originalCoin.size / 2
      this.touchDragCoin.y = touch.clientY - this.touchOffset.y - this.originalCoin.size / 2
      this.$forceUpdate()
    },
    onTouchEnd(e) {
      if (!this.touchDragging || !this.touchDragCoin) return
      const touch = (e.changedTouches && e.changedTouches[0]) || (e.touches && e.touches[0])

      // 工具列
      const toolbar = this.$el.querySelector('.coins-toolbar')
      const toolbarRect = toolbar.getBoundingClientRect()
      if (
        touch.clientX >= toolbarRect.left && touch.clientX <= toolbarRect.right &&
        touch.clientY >= toolbarRect.top && touch.clientY <= toolbarRect.bottom
      ) {
        if (this.touchDragIndex !== null && this.touchDragSide !== null) {
          const arr = this.touchDragSide === 'left' ? this.leftCoins : this.rightCoins
          arr.splice(this.touchDragIndex, 1)
          this.$forceUpdate()
        }
      } else {
        // 判斷落點在哪個 drop zone
        const zones = [
          { ref: this.$refs.dropZoneLeft, side: 'left' },
          { ref: this.$refs.dropZoneRight, side: 'right' }
        ]
        for (const zone of zones) {
          const rect = zone.ref.getBoundingClientRect()
          if (
            touch.clientX >= rect.left && touch.clientX <= rect.right &&
            touch.clientY >= rect.top && touch.clientY <= rect.bottom
          ) {
            const coinSize = this.touchDragCoin.size || 50
            const x = touch.clientX - rect.left - coinSize / 2
            const y = touch.clientY - rect.top - coinSize / 2
            const finalCoin = { ...this.touchDragCoin }
            finalCoin.x = Math.max(0, Math.min(x, rect.width - coinSize))
            finalCoin.y = Math.max(0, Math.min(y, rect.height - coinSize))

            if (this.touchDragIndex !== null && this.touchDragSide !== null) {
              const srcArr = this.touchDragSide === 'left' ? this.leftCoins : this.rightCoins
              srcArr.splice(this.touchDragIndex, 1)
            }
            const targetArr = zone.side === 'left' ? this.leftCoins : this.rightCoins
            targetArr.push(finalCoin)
            break
          }
        }
      }

      this.touchDragging = false
      this.touchDragCoin = null
      this.touchDragIndex = null
      this.touchDragSide = null
      this.originalCoin = null
      window.removeEventListener('touchmove', this.onTouchMove)
      window.removeEventListener('touchend', this.onTouchEnd)
      this.$forceUpdate()
    },
    clearAll() {
      this.leftCoins = []
      this.rightCoins = []
      this.showEquation = false
    }
  },
  mounted() {
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
  }
}
</script>

<style scoped>
.coins-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.coins-toolbar {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.coin-item {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
  border: 2px solid #333;
  -webkit-user-drag: element;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: auto;
}

.coin-item:hover { transform: scale(1.1); }
.coin-item:active { cursor: grabbing; transform: scale(0.95); }

.coin-value {
  font-weight: bold;
  color: #333;
  font-size: 12px;
}

/* 左右分割區 */
.zone-total {
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: #1a237e;
  background: #e8eaf6;
  border: 2px solid #ccc;
  border-top: none;
  border-radius: 0 0 8px 8px;
  padding: 10px 0;
}

.split-zones {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin: 20px 0;
}

.zone-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.zone-label {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  padding: 8px 0;
  background: #f0f4ff;
  border-radius: 8px 8px 0 0;
  border: 2px solid #ccc;
  border-bottom: none;
}

.zone-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #888;
  padding: 0 10px;
  margin-top: 50px;
}

.drop-zone {
  min-height: 350px;
  border: 3px dashed #ccc;
  border-radius: 0 0 8px 8px;
  position: relative;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;
  overflow: hidden;
  pointer-events: auto;
}

.drop-zone:hover { border-color: #007bff; }

.drop-zone-text {
  text-align: center;
  color: #aaa;
  font-size: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.placed-coins {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 350px;
}

.placed-coin {
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: transform 0.2s ease;
  border: 2px solid #333;
  z-index: 10;
  -webkit-user-drag: element;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: auto;
}

.placed-coin:hover { transform: scale(1.1); z-index: 20; }
.placed-coin:active { cursor: grabbing; transform: scale(0.95); }

/* 合計算式框 */
.equation-box {
  text-align: center;
  margin: 16px 0 8px;
  padding: 14px 24px;
  background: #fffbea;
  border: 2px solid #f5c518;
  border-radius: 10px;
  animation: fadeIn 0.25s ease;
}

.eq-text {
  font-size: 2rem;
  font-weight: 900;
  color: #333;
  letter-spacing: 2px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 16px;
}

/* RWD */
@media screen and (max-width: 768px) {
  .coins-container { padding: 0 }
  .coins-toolbar { gap: 15px; }
  .coin-value { font-size: 11px; }
  .drop-zone { min-height: 260px; }
  .placed-coins { min-height: 260px; }
  .zone-divider { font-size: 1.8rem; padding: 0 6px; }
  .zone-total { font-size: 1.1rem; }
  .controls { flex-direction: column; }
  .ui.button { width: 200px; margin: 5px 0; }
  .eq-text { font-size: 1.5rem; }
}

@media screen and (max-width: 480px) {
  .coins-toolbar { gap: 10px; }
  .coin-value { font-size: 10px; }
  .drop-zone { min-height: 200px; }
  .placed-coins { min-height: 200px; }
  .zone-label { font-size: 14px; }
  .zone-divider { font-size: 1.4rem; margin-top: 42px; }
  .zone-total { font-size: 1rem; }
}
</style>
