<template>
  <div class="hello">
    <br />
    <br />
    <div class="ui two doubling cards container">
      <div class = 'ui card'>
        <h1>會考考古題</h1>
        <h4>
          寫的時候就照著時限(80分鐘)，來測試自己的速度
          <br/>
          最好寫完還有20分鐘以上可以檢查一遍~
        </h4>
        <div class="ui list">
          <div class="item"v-for ="(o, idx) in oldtests">
             <a :href="o.h" target="_blank">
              {{o.n}}
             </a>
             <span class="space"></span>
             <a :href="o.a" target="_blank">
              解答
             </a>
          </div>
          <br/>
           
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Outer',
  data () {
    return {
      oldtests: [
        { n: '107國中會考考古題',
          h: 'https://cap.nace.edu.tw/exam/107/107P_Math.pdf',
          a: 'http://chu246.blogspot.com/2018/05/107.html'
        },
        { n: '106國中會考考古題',
          h: 'https://cap.nace.edu.tw/read_aloud/106/106P_Math150DPI.pdf',
          a: 'http://chu246.blogspot.com/2017/05/106.html'
        },
        { n: '105國中會考考古題',
          h: 'https://cap.nace.edu.tw/read_aloud/105/105P_Math150DPI.pdf',
          a: 'http://chu246.blogspot.com/2016/05/105.html'
        },
        { n: '104國中會考考古題',
          h: 'https://cap.nace.edu.tw/read_aloud/104/104P_Math.pdf',
          a: 'http://chu246.blogspot.com/2015/05/104.html'}
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-size: 1.4em;
  text-align: center;
}

p img {
  max-width: 33vmin;
  margin: 1em;
  transition: all 0.5s ease-in;
}

p img:hover {
  transform: scale(1.2);
}

span.space {
  display: inline-block;
  width: 3em;
}

</style>
