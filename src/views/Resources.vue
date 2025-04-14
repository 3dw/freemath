<template>
  <div class="resources-container">
    <div class="resources-header">
      <h1>數學 × 程式教案庫</h1>
      <p>探索我們的教案和互動式數學遊戲，讓學習變得更加有趣和有效</p>
    </div>

    <div class="resources-grid">
      <div class="resource-card" @click="navigateTo('/prime-finding')">
        <div class="resource-icon">🎯</div>
        <h2>質數找找樂</h2>
        <p>使用埃式篩法找出質數，了解質數的特性</p>
        <div class="resource-tags">
          <span class="tag">遊戲</span>
          <span class="tag">數論</span>
          <span class="tag">互動式</span>
        </div>
      </div>

      <!-- 未來可以添加更多資源卡片 -->
      <div class="resource-card coming-soon">
        <div class="resource-icon">🔜</div>
        <h2>更多資源即將推出</h2>
        <p>我們正在開發更多有趣的數學學習資源</p>
        <div class="resource-tags">
          <span class="tag">即將推出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resources',
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
.resources-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.resources-header {
  text-align: center;
  margin-bottom: 60px;
}

.resources-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.resources-header p {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.resource-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid #e2e8f0;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.resource-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.resource-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1e293b;
}

.resource-card p {
  color: #64748b;
  margin-bottom: 16px;
  line-height: 1.5;
}

.resource-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: #f1f5f9;
  color: #475569;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.coming-soon {
  opacity: 0.7;
  cursor: default;
}

.coming-soon:hover {
  transform: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .resources-header h1 {
    font-size: 2.5rem;
  }
  
  .resources-grid {
    grid-template-columns: 1fr;
  }
}
</style> 