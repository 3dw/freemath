<template lang="pug">
  .hello
    h3.ui.header {{sify('知識倒溯與前推')}}
    select.ui.dropdown(@change="onSelectUnit", v-model="selectedUnit")
      option(:value="null", selected) {{sify('選擇一個單元')}}
      option(v-for="unit in units", :value="unit.id" :key="unit.id") {{ unit.n }}
    .ui.divider
    .ui.grid(v-if="currentUnit")
      .ui.stackable.row
        .five.wide.padded.left.aligned.column
          .padded
            h4.ui.orange.header 當前單元
            a(@click="op(currentUnit.url, currentUnit.n, currentUnit.pro, currentUnit.wiki)" target="_blank" rel="noopener noreferrer")
              img(:src="'https://www.google.com/s2/favicons?domain='+currentUnit.url", :alt="sify(currentUnit.n)")
              //i.download.icon
              span.orange(v-if="!useWiki") {{ sify(currentUnit.n) }}
              span.orange(v-else) {{sify(currentUnit.wiki)}}
              // .ui.teal.label(v-show="currentUnit.pro") pro
              span.gray(v-if="currentUnit.d") -{{ sify(currentUnit.d) }}
        
        .five.wide.padded.left.aligned.column
          .padded
            h4.ui.purple.header {{sify('先備知識')}}
            .ui.list
              .item(v-for="u in prerequisiteUnits" :key="u.id")
                a(@click="op(u.url, u.n, u.pro, u.wiki)" target="_blank" rel="noopener noreferrer")
                  img(:src="'https://www.google.com/s2/favicons?domain='+u.url", :alt="sify(u.n)", v-if="!useWiki")
                  img(src="https://www.google.com/s2/favicons?domain=https://zh.wikipedia.org", :alt="sify(u.n)", v-else)
                  //i.download.icon
                  span(v-if="!useWiki") {{ sify(u.n) }}
                  span(v-else) {{sify(u.wiki)}}
                  // .ui.teal.label(v-show="u.pro") pro
                  span.gray(v-if="u.d") -{{ sify(u.d) }}
                  br
                  button.ui.basic.purple.button(@click="selectedUnit = u.id")
                    | {{ sify('往前倒溯') }}
        .five.wide.padded.left.aligned.column
          .padded
            h4.ui.blue.header {{sify('後續知識')}}
            .ui.list
              .item(v-for="u in postrequisiteUnits" :key="u.id")
                a(@click="op(u.url, u.n, u.pro, u.wiki)" target="_blank" rel="noopener noreferrer")
                  img(:src="'https://www.google.com/s2/favicons?domain='+u.url", :alt="sify(u.n)", v-if="!useWiki")
                  img(src="https://www.google.com/s2/favicons?domain=https://zh.wikipedia.org", :alt="sify(u.n)", v-else)
                  //i.download.icon
                  span(v-if="!useWiki") {{ sify(u.n) }}
                  span(v-else) {{sify(u.wiki)}}
                  // .ui.teal.label(v-show="u.pro") pro
                  span.gray(v-if="u.d") -{{ sify(u.d) }}
                  br
                  button.ui.basic.orange.button(@click="selectedUnit = u.id")
                    | {{ sify('往後前推') }}
  
    .ui.divider
    d3-network(
      v-show="selectedUnit !== null",
      ref='net',
      :net-nodes="filteredNodes",
      :net-links="filteredLinks"  
      :options="options",
      style="width: 100%; height: 100%;"
    )
</template>

<script>
import { sify } from 'chinese-conv'
import { backs } from '../data/backs.js'; 
import D3Network from 'vue-d3-network';

export default {
  name: 'TraceBack',
  components: {
    D3Network
  },
  props: ['units'],
  data() {
    return {
      useWiki: false,
      logic: 'backward',
      backs: backs,
      selectedUnit: null, // 預設為 null
      nodeSize: 20,
      canvas: false
    }
  },
  computed: {
    currentUnit() {
      return this.units.find(unit => unit.id === this.selectedUnit) || null;
    },
    nodes() {
      return (this.units || []).map((u) => ({
        id: u.id,
        name: u.n,
        _color: 'orange'
      }));
    },
    filteredNodes() {
      if (this.selectedUnit === null) return this.nodes;
      const selectedUnitName = this.currentUnit.n;
      
      // 找到先備知識單元
      const prerequisiteUnits = this.backs.filter(back => back.to.includes(selectedUnitName)).map(back => back.from);
      
      // 找到後續知識單元
      const postrequisiteUnits = this.backs.filter(back => back.from === selectedUnitName).map(back => back.to).flat();
      
      // 過濾節點以顯示選擇單元及其先備和後續知識單元
      const filteredNodes = this.nodes.filter(node => 
        node.name === selectedUnitName || 
        prerequisiteUnits.includes(node.name) || 
        postrequisiteUnits.includes(node.name)
      );
      
      // 將先備知識單元設置為紫色
      filteredNodes.forEach(node => {
        if (prerequisiteUnits.includes(node.name)) {
          node._color = 'purple';
        } else if (postrequisiteUnits.includes(node.name)) {
          node._color = 'lightblue'; // 將後續知識單元設置為淺藍色
        }
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
      const selectedUnitName = this.currentUnit.n;
      return this.links.filter(link => {
        // const sourceNode = this.nodes.find(node => node.id === link.sid).name;
        const targetNode = this.nodes.find(node => node.id === link.tid).name;
        return targetNode === selectedUnitName; // || sourceNode === selectedUnitName;
      });
    },
    prerequisiteUnits() {
      if (this.selectedUnit === null) return [];
      const selectedUnitName = this.currentUnit.n;
      return this.units.filter(u => this.backs.some(back => back.to.includes(selectedUnitName) && back.from === u.n));
    },
    postrequisiteUnits() {
      if (this.selectedUnit === null) return [];
      const selectedUnitName = this.currentUnit.n;
      return this.units.filter(u => this.backs.some(back => back.from === selectedUnitName && back.to.includes(u.n)));
    },
    options() {
      return {
        force: 600,
        size: { w: window.innerWidth, h: 420 },
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
    sify(t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
    getIdByName(name) {
      const unit = (this.units || []).find(u => u.n === name);
      return unit ? unit.id : -1;
    },
    onSelectUnit(event) {
      const value = parseInt(event.target.value, 10);
      console.log('Selected value:', value);
      this.selectedUnit = isNaN(value) ? null : value;
      console.log('Set selectedUnit:', this.selectedUnit);
    },
    op(url, name, pro, wiki) {
      this.$gtag.query('event', 'view' + name, {
        name: name,
        url: url,
        pro: pro
      })
      if (!this.useWiki) {
        window.open(url)
      } else {
        window.open('https://zh.wikipedia.org/wiki/' + wiki)
      }
    },
    countGrade(g, G) {
      var min = g
      if (g <= 0) {
        min = '學前'
      }
      var ans = G + '年級'
      if (G <= 0) {
        ans = '學前'
      }
      if (ans === min) {
        return ans
      } else {
        ans = min + '~' + ans
      }
      return ans
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
.hello {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9; /* Set a light background color */
  padding: 20px; /* Add some padding around the content */
}

.ui.header {
  font-size: 24px; /* Set header font size */
  color: #333; /* Set header font color */
  margin-bottom: 20px; /* Add some space below the header */
}

.ui.dropdown {
  font-size: 16px; /* Set dropdown font size */
  margin-bottom: 20px; /* Add some space below the dropdown */
}

.ui.divider {
  margin: 20px 0; /* Add vertical space around the divider */
}

.ui.grid .column {
  padding: 20px; /* Add padding inside the grid columns */
  background-color: #fff; /* Set column background color to white */
  border: 1px solid #ddd; /* Add a border around columns */
  border-radius: 4px; /* Round the corners of the columns */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
}

.ui.list .item {
  margin-bottom: 10px; /* Add space between list items */
}

.ui.button {
  font-size: 14px; /* Set button font size */
  margin-top: 10px; /* Add space above buttons */
}

d3-network {
  width: 100%; /* Set network width to full container width */
  height: 600px; /* Set network height */
  margin-top: 20px; /* Add space above the network */
}
</style>
