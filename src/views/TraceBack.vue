<template lang="pug">
  .hello
    d3-network(
      ref='net',
      :net-nodes="nodes",
      :net-links="links"  
      :options="options",

      style="width: 100%; height: 100%;"
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
      nodes() {
        const nodes = (this.units || []).map((u) => ({
          id: u.id,
          name: u.n,
          _color: 'orange'
        }));
        console.log('Computed nodes:', nodes);
        return nodes;
      },
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
        console.log('Computed links:', lks);
        return lks;
      },
      options() {
        return {
          force: 600,
          size: { w: 800, h: 600 }, // 這裡直接設置寬高
          nodeSize: this.nodeSize,
          nodeLabels: true,
          linkLabels: true,
          linkWidth: 3,
          canvas: this.canvas
        }
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

d3-network {
  width: 800px;
  height: 600px;
}
</style>

  