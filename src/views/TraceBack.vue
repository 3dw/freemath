<template lang="pug">
  .hello
    d3-network(
      :nodes="nodes", 
      :links="links", 
      :options="options"
    )
</template>

<script>
  import D3Network from 'vue-d3-network';

  export default {
    name: 'TraceBack',
    components: {
      D3Network
    },
    data() {
      return {
        nodes: [
          { id: 1, name: 'Node 1' },
          { id: 2, name: 'Node 2' }
        ],
        links: [
          { source: 1, target: 2 }
        ],
        options: {
          size: [800, 600],  // 設置網絡圖的大小
          nodeLabel: 'name', // 顯示節點的名稱
          linkWidth: 2,      // 設置鏈接的寬度
          nodeSize: 10       // 設置節點的大小
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .hello {
    width: 800px;
    height: 600px;
  }
  </style>
  