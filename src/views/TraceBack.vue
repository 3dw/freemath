<template lang="pug">
.hello
  select.ui.dropdown(@change="onSelectUnit", v-model="selectedUnit")
    option(:value="null", selected) 選擇一個單元
    option(v-for="unit in units", :value="unit.id" :key="unit.id") {{ unit.n }}
  d3-network(
    ref='net',
    :net-nodes="filteredNodes",
    :net-links="filteredLinks"  
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
          { from: '乘法A~D', to: ['加法'] },
          { from: '減法', to: ['加法'] },
          { from: '除法', to: ['乘法A~D', '減法'] },
          { from: '分數', to: ['除法'] },
          { from: '不等式', to: ['數線', '一元一次方程式'] }
        ],
        selectedUnit: null, // 預設為 null
        nodeSize: 20,
        canvas: false
      }
    },
    computed: {
      nodes() {
        return (this.units || []).map((u) => ({
          id: u.id,
          name: u.n,
          _color: 'orange'
        }));
      },
      filteredNodes() {
        if (this.selectedUnit === null) return this.nodes;
        const selectedUnit = this.units.find(u => u.id === this.selectedUnit);
        if (!selectedUnit) return [];
        const selectedUnitName = selectedUnit.n;
        const relatedUnits = this.backs.filter(back => back.to.includes(selectedUnitName)).map(back => back.from);
        const filteredNodes = this.nodes.filter(node => node.id === this.selectedUnit || relatedUnits.includes(node.name));
        filteredNodes.forEach(node => {
          if (node.name !== selectedUnitName) node._color = 'purple';
        });
        return filteredNodes;
      },
      links() {
        return this.backs.reduce((lks, back) => {
          back.to.forEach(to => {
            const sid = this.getIdByName(back.from);
            const tid = this.getIdByName(to);
            if (sid !== -1 && tid !== -1) lks.push({ sid, tid });
          });
          return lks;
        }, []);
      },
      filteredLinks() {
        if (this.selectedUnit === null) return this.links;
        const selectedUnitName = this.units.find(u => u.id === this.selectedUnit).n;
        return this.links.filter(link => {
          const sourceNode = this.nodes.find(node => node.id === link.sid).name;
          const targetNode = this.nodes.find(node => node.id === link.tid).name;
          return targetNode === selectedUnitName || sourceNode === selectedUnitName;
        });
      },
      options() {
        return {
          force: 600,
          size: { w: 800, h: 600 },
          nodeSize: this.nodeSize,
          nodeLabels: true,
          linkLabels: true,
          linkWidth: 3,
          canvas: this.canvas
        };
      }
    },
    methods: {
      getIdByName(name) {
        const unit = (this.units || []).find(u => u.n === name);
        return unit ? unit.id : -1;
      },
      onSelectUnit(event) {
        this.selectedUnit = parseInt(event.target.value, 10);
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

  