<template lang="pug">
  .hello
    d3-network(
      ref='net',
      :net-nodes="nodes",
      :net-links="links"  
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
    props: ['units'],
    data() {
      return {
        backs: [
          { from: '乘法', to: ['加法'] },
          { from: '減法', to: ['加法'] },
          { from: '除法', to: ['乘法', '減法'] },
          { from: '分數', to: ['除法'] },
          { from: '不等式', to: ['數線', '一元一次方程式'] }
        ],
        nodeSize: 20,
        canvas: false
      }
    },
    computed: {
      links() {
        const lks = [];
        for (let j = 0; j < this.backs.length; j++) {
          for (let k = 0; k < this.backs[j].to.length; k++) {
            const sid = this.getIdByName(this.backs[j].from);
            const tid = this.getIdByName(this.backs[j].to[k]);
            if (sid !== -1 && tid !== -1) {
              lks.push({ sid: sid, tid: tid });
            }
          }
        }
        return lks;
      },
      nodes() {
        return (this.units || [
          { id: 0, n: '乘法' },
          { id: 1, n: '加法' },
          { id: 2, n: '減法' },
          { id: 3, n: '除法' },
          { id: 4, n: '分數' },
          { id: 5, n: '不等式' },
          { id: 6, n: '數線' },
          { id: 7, n: '一元一次方程式' }
        ]).map((u, idx) => ({
          id: idx,
          name: u.n,
          _color: 'orange'
        }));
      },
      options() {
        return {
          force: 3000,
          size: { w: 600, h: 600 },
          nodeSize: this.nodeSize,
          nodeLabels: true,
          linkLabels: true,
          canvas: this.canvas
        };
      }
    },
    methods: {
      getIdByName(name) {
        const unit = (this.units || []).find(u => u.n === name);
        return unit ? unit.id : -1;
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
  