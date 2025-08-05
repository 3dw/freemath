<template lang="pug">
.ui.segment.container.center.aligned#social-posts-container
  h3.ui.header {{ sify('最新社群動態') }}
  .ui.three.stackable.cards(v-if="posts.length > 0")
    .ui.card(v-for="post in posts" :key="post.id")
      .content
        .header
          a(:href="`https://g0v.social/@${post.account?.username}`" target="_blank" rel="noopener noreferrer")
            img.ui.avatar.image(:src="post.account.avatar" :alt="post.account.display_name || post.account.username || '未知用戶'")
            | {{ post.account.display_name || post.account.username || '未知用戶' }}
        .meta
          span.date {{ formatDate(post.created_at) }}
        .description
          p(v-html="truncateContentAndEscape(post.content)")
        .extra
          a.ui.basic.button(:href="`https://g0v.social/@${post.account?.username}/${post.id}`" target="_blank" rel="noopener noreferrer")
            i.external.alternate.icon
            | {{ sify('查看原文') }}
      .extra.content(v-if="post.media_attachments && post.media_attachments.length > 0")
        img.ui.fluid.image(:src="post.media_attachments[0].preview_url" :alt="post.media_attachments[0].description || '圖片'")
  .ui.message(v-else-if="!loading")
    .content
      p {{ sify('目前沒有相關的動態貼文') }}
  .ui.loader(v-if="loading")
</template>

<script>
import { sify } from 'chinese-conv'

export default {
  name: 'HomeSocialPosts',
  props: ['si'],
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  methods: {
    sify(t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
    async fetchPosts() {
      try {
        this.loading = true
        // 使用 g0v.social 的 API 來獲取標記為 #自由數學 的貼文
        const response = await this.$http.get('https://g0v.social/api/v1/timelines/tag/自由數學?limit=3', {
          params: {
            local: true,
            limit: 40
          },
          timeout: 10000, // 10秒超時
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        
        // 過濾包含 #自由數學 標籤的貼文
        const filteredPosts = response.data.filter(post => {
          return post.content && (post.content.includes('#自由數學') || post.content.includes('自由數學'))
        }).slice(0, 3)
        
        this.posts = filteredPosts
      } catch (error) {
        console.error('Error fetching social posts:', error)
        // 如果 API 調用失敗，顯示一些示例數據或保持空狀態
        this.posts = []
      } finally {
        this.loading = false
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    },
    truncateContentAndEscape(content) {
      // 移除 HTML 標籤
      const cleanContent = content.replace(/<[^>]*>/g, '')
      if (cleanContent.length > 100) {
        return cleanContent.substring(0, 100) + '...'
      }
      return cleanContent
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style scoped>
#social-posts-container {
  margin: 2em auto;
  max-width: 1200px;
}

.ui.card {
  margin: 1em;
}

.ui.card .content .description {
  margin-top: 1em;
  line-height: 1.6;
}

.ui.card .extra.content img {
  max-height: 200px;
  object-fit: cover;
}

.ui.loader {
  margin: 2em auto;
}
</style> 