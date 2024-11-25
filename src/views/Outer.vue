<template lang="pug">
  .hello
    br
    br
    .container
      .row
        .col-md-6.col-lg-4
          .card.mb-4
            .card-body
              h5.card-title 相關書籍
              ul.list-group.list-group-flush
                li.list-group-item(v-for='b in books')
                  a(:href='b.h', target='_blank')
                    img(:src="'https://www.google.com/s2/favicons?domain=' + b.h")
                    | {{ b.n }}
        .col-md-6.col-lg-4
          .card.mb-4
            .card-body
              h5.card-title 網路學習資源
              ul.list-group.list-group-flush
                li.list-group-item(v-for="w in webs")
                  a(:href='w.h', target='_blank')
                    img(:src="'https://www.google.com/s2/favicons?domain=' + w.h")
                    | {{ w.n }}
        .col-md-6.col-lg-4
          .card.mb-4
            .card-body
              h5.card-title 延伸學習資源
              ul.list-group.list-group-flush
                li.list-group-item
                  a(href='https://arxiv.org/archive/math', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=https://arxiv.org/archive/math')
                    | arXiv.org學術平台
                li.list-group-item
                  a(href='https://proofwiki.org/wiki/Main_Page', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=https://proofwiki.org/wiki/Main_Page')
                    | 維基證明
                li.list-group-item
                  a(href='http://www.mathland.idv.tw/mathtest/exambody.htm', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=http://www.mathland.idv.tw/mathtest/exambody.htm')
                    | 國中各單元複習題庫
                li.list-group-item
                  a(href='https://sites.google.com/site/jsjhmath/home/bu-jiu-jiao-xue-juan', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=https://sites.google.com/site/jsjhmath/home/bu-jiu-jiao-xue-juan')
                    | 國中各單元複習卷
        .col-md-6.col-lg-4
          .card.mb-4
            .card-body
              h5.card-title 工具軟體
              ul.list-group.list-group-flush
                li.list-group-item
                  a(href='https://www.geogebra.org/', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=https://www.geogebra.org/')
                    | geogebra算術繪圖
                li.list-group-item
                  a(href='https://scratch.mit.edu/', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=https://scratch.mit.edu/')
                    | scratch拼圖寫程式
        .col-md-6.col-lg-4
          .card.mb-4
            .card-body
              h5.card-title 會考考古題
              ul.list-group.list-group-flush
                li.list-group-item
                  a(href="https://mp3ktv.huhu.tw/years-test/years-test.htm?fbclid=IwY2xjawGwoY9leHRuA2FlbQIxMQABHZQ5hPWKALZpD95IZYWbpq5tCz-XbQhJRE2nzO4PH0FP5VKKWw9GtyfMKw_aem_exkkBNvEQEPsH7NbOPvBcg", target="_blank")
                    img(src='https://www.google.com/s2/favicons?domain=https://mp3ktv.huhu.tw/years-test/years-test.htm?fbclid=IwY2xjawGwoY9leHRuA2FlbQIxMQABHZQ5hPWKALZpD95IZYWbpq5tCz-XbQhJRE2nzO4PH0FP5VKKWw9GtyfMKw_aem_exkkBNvEQEPsH7NbOPvBcg')
                    | 國中會考考古題(阿超自編教學影片)
        .col-md-6.col-lg-4
          .card.mb-4
            .card-body
              h5.card-title 大學考試考古題詳解
              ul.list-group.list-group-flush
                li.list-group-item
                  a(href='http://www.grandeast.com.tw/Math/PastExam?T=45', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45')
                    | 學科能力測驗
                li.list-group-item
                  a(href='http://www.grandeast.com.tw/Math/PastExam?T=46', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45')
                    | 指定科目考試
                li.list-group-item
                  a(href='http://www.grandeast.com.tw/Math/PastExam?T=47', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45')
                    | 四技二專統測
                li.list-group-item
                  a(href='https://www.k12ea.gov.tw/Tw/SingleWindow/QuizList?filter=12445983-2A68-41E7-BC50-E7448925D6BC&type=57', target='_blank')
                    img(src='https://www.google.com/s2/favicons?domain=https://www.k12ea.gov.tw/Tw/SingleWindow/QuizList?filter=12445983-2A68-41E7-BC50-E7448925D6BC&type=57')
                    | 高中同等學力鑑定
</template>

<script>
export default {
  name: 'Outer',
  data () {
    return {
      webs: [
        { n: '數學@維基百科', h: 'https://zh.wikipedia.org/zh-tw/%E6%95%B0%E5%AD%A6' },
        { n: 'Math@可汗學院', h: 'https://www.khanacademy.org/math' },
        { n: 'SAT線上測驗', h: 'https://www.4tests.com/sat' },
        { n: 'chatGPT', h: 'https://chat.openai.com/' }
      ],
      books: [
        { n: '數學教育的藝術與實務─另類教與學', h: 'https://www.books.com.tw/products/0010079574' },
        { n: '跟孩子一起玩數學(原名:數學學習診斷法)', h: 'https://www.books.com.tw/products/0010687205' }
      ],
      oldtests: [
        { n: '109國中會考考古題', h: 'https://drive.google.com/file/d/1WOPUIoTY5vUvLWwCgW_sddjdocHFsJFQ/view', a: 'http://chu246.blogspot.com/2020/05/109.html' },
        { n: '108國中會考考古題', h: 'https://cap.rcpet.edu.tw/exam/108/108P_Math150DPI.pdf', a: 'http://chu246.blogspot.com/2019/05/108.html' },
        { n: '107國中會考考古題', h: 'https://cap.nace.edu.tw/exam/107/107P_Math.pdf', a: 'http://chu246.blogspot.com/2018/05/107.html' },
        { n: '106國中會考考古題', h: 'https://cap.nace.edu.tw/read_aloud/106/106P_Math150DPI.pdf', a: 'http://chu246.blogspot.com/2017/05/106.html' },
        { n: '105國中會考考古題', h: 'https://cap.nace.edu.tw/read_aloud/105/105P_Math150DPI.pdf', a: 'http://chu246.blogspot.com/2016/05/105.html' },
        { n: '104國中會考考古題', h: 'https://cap.nace.edu.tw/read_aloud/104/104P_Math.pdf', a: 'http://chu246.blogspot.com/2015/05/104.html' },
        { n: '103國中會考考古題', h: 'https://cap.nace.edu.tw/read_aloud/103/103P_Math.pdf', a: 'http://chu246.blogspot.com/2014/05/103.html' },
        { n: '102國中會考考古題', h: 'https://cap.nace.edu.tw/exam/102/102P_Math150DPI.pdf', a: 'http://chu246.blogspot.com/2016/01/102.html' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
p {
  font-size: 1.2em;
  text-align: center;
}

p img {
  max-width: 25vmin;
  margin: 1em;
  transition: all 0.5s ease-in;
}

p img:hover {
  transform: scale(1.1);
}

span.space {
  display: inline-block;
  width: 2em;
}

a {
  position: relative;
  left: 0;
  transition: all 0.3s ease;
}

a:hover {
  position: relative;
  left: -0.5em;
}

.card {
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.5em;
  font-weight: bold;
}

.list-group-item {
  display: flex;
  align-items: center;
}

.list-group-item img {
  margin-right: 1em;
}
</style>
