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
              <img :src="'https://www.google.com/s2/favicons?domain=' + o.h" />
              {{o.n}}
             </a>
             <span class="space"></span>
             <a :href="o.a" target="_blank">
              <img :src="'https://www.google.com/s2/favicons?domain=' + o.a" />
              解答
             </a>
          </div>
          <br/>     
        </div>
      </div>
      <div class = 'ui card'>
        <h1>大學考試考古題詳解</h1>
        <div class="ui list">
          <div class="item">
             <a href="http://www.grandeast.com.tw/Math/PastExam?T=45" target="_blank">
              <img src="https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45"/>
              學科能力測驗
             </a>
          </div>
          <div class="item">
             <a href="http://www.grandeast.com.tw/Math/PastExam?T=46" target="_blank">
              <img src="https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45"/>
              指定科目考試
             </a>
          </div>
          <div class="item">
             <a href="http://www.grandeast.com.tw/Math/PastExam?T=47" target="_blank">
              <img src="https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45"/>
              四技二專統測
             </a>
          </div>
        </div>
      </div>
      <div class = 'ui card'>
        <h1>相關書籍</h1>
        <div class="ui list">
          <div class="item" v-for="b in books">
            <a :href="b.h" target="_blank">
              <img :src="'https://www.google.com/s2/favicons?domain=' + b.h"/>
              {{ b.n }}
            </a>
          </div>
        </div>
      </div>
      <div class = 'ui card'>
        <h1>網路學習資源</h1>
        <div class="ui list">
          <div class="item">
            <a href="https://www.khanacademy.org/math" target="_blank">
              <img src= "https://www.google.com/s2/favicons?domain=https://www.khanacademy.org/math" />
              河汗學院
            </a>
          </div>
          <div class="item">
            <a href="https://www.junyiacademy.org/exercisedashboard" target="_blank">
              <img src="https://www.google.com/s2/favicons?domain=https://www.junyiacademy.org/exercisedashboard"/>
              均一平台
            </a>
          </div>
          <div class="item">
            <a href="https://www.4tests.com/sat" target="_blank">
              <img src="https://www.google.com/s2/favicons?domain=https://www.4tests.com/sat">SAT線上測驗
            </a>
          </div>
        </div>
      </div>
      <div class = 'ui card'>
        <h1>延伸學習資源</h1>
        <div class="ui list">
          <div class="item">
            <a href="https://arxiv.org/archive/math" target="_blank">
              <img src= "https://www.google.com/s2/favicons?domain=https://arxiv.org/archive/math" />
              arXiv.org學術平台
            </a>
          </div>
          <div class="item">
            <a href="https://proofwiki.org/wiki/Main_Page" target="_blank">
              <img src= "https://www.google.com/s2/favicons?domain=https://proofwiki.org/wiki/Main_Page" />
              維基證明
            </a>
          </div>
        </div>
      </div>
      <div class = 'ui card'>
        <h1>工具軟體</h1>
        <div class="ui list">
          <div class="item">
            <a href="https://www.geogebra.org/" target="_blank">
              <img src= "https://www.google.com/s2/favicons?domain=https://www.geogebra.org/" />
              geogebra算術繪圖
            </a>
          </div>
          <div class="item">
            <a href="https://scratch.mit.edu/" target="_blank">
              <img src= "https://www.google.com/s2/favicons?domain=https://scratch.mit.edu/" />
              scratch拼圖寫程式
            </a>
          </div>
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
      books: [
        { n: '數學教育的藝術與實務─另類教與學',
          h: 'https://www.books.com.tw/products/0010079574'
        },
        { n: '跟孩子一起玩數學',
          h: 'https://www.books.com.tw/products/0010687205'
        }
      ],
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
          a: 'http://chu246.blogspot.com/2015/05/104.html'
        },
        { n: '103國中會考考古題',
          h: 'https://cap.nace.edu.tw/read_aloud/103/103P_Math.pdf',
          a: 'http://chu246.blogspot.com/2014/05/103.html'
        },
        { n: '102國中會考考古題',
          h: 'https://cap.nace.edu.tw/exam/102/102P_Math150DPI.pdf',
          a: 'http://chu246.blogspot.com/2016/01/102.html'
        }

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

a {
  position: relative;
  left: 0;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}

a:hover {
  position: relative;
  left: -1em;
}
</style>
