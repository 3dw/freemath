<template lang="pug">
  .hello
    br
    br
    .ui.two.doubling.cards.container
      .ui.card
        h1 會考考古題
        h4
          | 寫的時候就照著時限(80分鐘)，來測試自己的速度
          br
          |           最好寫完還有20分鐘以上可以檢查一遍~
        .ui.list
          .item(v-for='(o, idx) in oldtests')
            a(:href='o.h', target='_blank')
              img(:src="'https://www.google.com/s2/favicons?domain=' + o.h")
              |               {{o.n}}
            span.space
            a(:href='o.a', target='_blank')
              img(:src="'https://www.google.com/s2/favicons?domain=' + o.a")
              |               解答
          br
      .ui.card
        h1 大學考試考古題詳解
        .ui.list
          .item
            a(href='http://www.grandeast.com.tw/Math/PastExam?T=45', target='_blank')
              img(src='https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45')
              | 學科能力測驗
          .item
            a(href='http://www.grandeast.com.tw/Math/PastExam?T=46', target='_blank')
              img(src='https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45')
              | 指定科目考試
          .item
            a(href='http://www.grandeast.com.tw/Math/PastExam?T=47', target='_blank')
              img(src='https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45')
              | 四技二專統測
          .item
            a(herf='https://www.k12ea.gov.tw/Tw/SingleWindow/QuizList?filter=12445983-2A68-41E7-BC50-E7448925D6BC&type=57')
              img(src='https://www.google.com/s2/favicons?domain=https://www.k12ea.gov.tw/Tw/SingleWindow/QuizList?filter=12445983-2A68-41E7-BC50-E7448925D6BC&type=57')
              | 高中同等學力鑑定
      .ui.card
        h1 相關書籍
        .ui.list
          .item(v-for='b in books')
            a(:href='b.h', target='_blank')
              img(:src="'https://www.google.com/s2/favicons?domain=' + b.h")
              | {{ b.n }}
      .ui.card
        h1 網路學習資源
        .ui.list
          .item(v-for="w in webs")
            a(:href='w.h', target='_blank')
              img(:src="'https://www.google.com/s2/favicons?domain=' + w.h")
              | {{ w.n }}
      .ui.card
        h1 延伸學習資源
        .ui.list
          .item
            a(href='https://arxiv.org/archive/math', target='_blank')
              img(src='https://www.google.com/s2/favicons?domain=https://arxiv.org/archive/math')
              |               arXiv.org學術平台
          .item
            a(href='https://proofwiki.org/wiki/Main_Page', target='_blank')
              img(src='https://www.google.com/s2/favicons?domain=https://proofwiki.org/wiki/Main_Page')
              |               維基證明
          .item
            a(href='http://www.mathland.idv.tw/mathtest/exambody.htm', target='_blank')
              img(src='https://www.google.com/s2/favicons?domain=http://www.mathland.idv.tw/mathtest/exambody.htm')
              |               國中各單元複習題庫
          .item
            a(href='https://sites.google.com/site/jsjhmath/home/bu-jiu-jiao-xue-juan', target='_blank')
              img(src='https://www.google.com/s2/favicons?domain=https://sites.google.com/site/jsjhmath/home/bu-jiu-jiao-xue-juan')
              |               國中各單元複習卷
      .ui.card
        h1 工具軟體
        .ui.list
          .item
            a(href='https://www.geogebra.org/', target='_blank')
              img(src='https://www.google.com/s2/favicons?domain=https://www.geogebra.org/')
              |               geogebra算術繪圖
          .item
            a(href='https://scratch.mit.edu/', target='_blank')
              img(src='https://www.google.com/s2/favicons?domain=https://scratch.mit.edu/')
              |               scratch拼圖寫程式

</template>

<script>

export default {
  name: 'Outer',
  data () {
    return {
      webs: [
        { n: '高中數學@零時黑板',
          h: 'http://goban.tw/#/see/%E9%AB%98%E4%B8%AD%E6%95%B8%E5%AD%B8/0/0'},
        { n: 'Math@可汗學院',
          h: 'https://www.khanacademy.org/math'},
        { n: '均一平台',
          h: 'https://www.junyiacademy.org/exercisedashboard'},
        { n: 'SAT線上測驗',
          h: 'https://www.4tests.com/sat'}
      ],
      books: [
        { n: '數學教育的藝術與實務─另類教與學',
          h: 'https://www.books.com.tw/products/0010079574'
        },
        { n: '跟孩子一起玩數學',
          h: 'https://www.books.com.tw/products/0010687205'
        }
      ],
      oldtests: [
        { n: '109國中會考考古題',
          h: 'https://drive.google.com/file/d/1WOPUIoTY5vUvLWwCgW_sddjdocHFsJFQ/view',
          a: 'http://chu246.blogspot.com/2020/05/109.html'},
        { n: '108國中會考考古題',
          h: 'https://cap.rcpet.edu.tw/exam/108/108P_Math150DPI.pdf',
          a: 'http://chu246.blogspot.com/2019/05/108.html'},
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
