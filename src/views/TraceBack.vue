<template lang="pug">
.hello
  h3.ui.header(v-if="logic == 'backward'") 先備知識倒溯
  h3.ui.header(v-if="logic == 'forward'") 後續知識前推
  select.ui.dropdown(@change="onSelectUnit", v-model="selectedUnit")
    option(:value="null", selected) 選擇一個單元
    option(v-for="unit in units", :value="unit.id" :key="unit.id") {{ unit.n }}
  .ui.divider
  d3-network(
    v-show="selectedUnit",
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
        logic: 'backward',
        backs: [
          { from: '分類', to: ['誰比較多', '加法', '數氣球', '認識數字']},
          { from: '誰比較多', to: ['減法']},
          { from: '數氣球', to: ['加法', '減法']},
          { from: '加法', to: ['減法', '乘法A~D', '認識十進位', '百數表'] },
          { from: '減法', to: ['除法', '正負數', '認識十進位'] },
          { from: '百數表', to: ['乘法A~D', '因數與倍數'] },
          { from: '乘法A~D', to: ['乘法E~F', '除法'] },
          { from: '乘法E~F', to: ['除法', '代數入門'] },
          { from: '除法', to: ['分數', '因數與倍數', '代數入門'] },
          { from: '分數', to: ['因數與倍數', '代數入門', '正負分數'] },
          { from: '數線', to: ['不等式', '正負數', '代數入門', '直角座標'] },
          { from: '代數入門', to: ['一元一次方程式'] }
        ],
        selectedUnit: null, // 預設為 null
        nodeSize: 20,
        canvas: true
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
        
        // 找到先備知識單元
        const prerequisiteUnits = this.backs.filter(back => back.to.includes(selectedUnitName)).map(back => back.from);
        
        // 過濾節點以顯示選擇單元及其先備知識單元
        const filteredNodes = this.nodes.filter(node => node.name === selectedUnitName || prerequisiteUnits.includes(node.name));
        
        // 將先備知識單元設置為紫色
        filteredNodes.forEach(node => {
          if (prerequisiteUnits.includes(node.name)) node._color = 'purple';
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
          size: { w: window.innerWidth, h: window.innerHeight - 200 },
          nodeSize: this.nodeSize,
          nodeLabels: true,
          fontSize: 18, // 這裡設置節點標籤的字級大小,
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
  flex-direction: column;
}

d3-network {
  width: 800px;
  height: 600px;
}
</style>

  