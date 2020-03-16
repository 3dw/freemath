webpackJsonp([1],{

/***/ 1077:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_db__ = __webpack_require__(569);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      play12: undefined,
      chats: undefined,
      units: [{ n: '分類', g: -1, G: -1, url: 'https://docs.google.com/presentation/d/11FQ7urzmBNkfD8yeGPCw2PEq_1cqqpDRf-mDFCjQ5l0/edit?usp=sharing', edit: true, p: 80, left: 2 }, { n: '誰比較多', g: -1, G: -1, url: 'https://docs.google.com/presentation/d/1afPtB_fNvTb2J58gWLlwAbtkXTdG589wquaq9vzJfZE/edit?usp=sharing', edit: true, p: 80, left: 3 }, { n: '認識數字', g: -1, G: -1, url: 'https://docs.google.com/drawings/d/1AH1j0rQzsNsVUW4Papgq4vAVZgEIDiQCREXVD9LbsgM/edit?usp=sharing', edit: true, p: 80, left: 0 }, { n: '數氣球', g: -1, G: -1, url: 'https://scratch.mit.edu/studios/1895336/', left: 1 }, { n: '加法', g: 0, G: 2, url: 'https://docs.google.com/document/d/18xrId9-15sm5VCdFY5cHZtygNRvKu6ZOi1XFY_k-2mw/edit?usp=sharing', edit: true, p: 50, left: 0 }, { n: '湊十釣魚', g: 0, G: 2, url: 'https://bestian.github.io/fishing-10/', edit: false, p: 100, left: 1 }, { n: '減法', g: 1, G: 2, url: 'https://docs.google.com/document/d/1xrxA_OfzcXkIgMInwXTXy3FAEkkDy4NRTUOkvFnvDMk/edit?usp=sharing', edit: true, p: 50, left: 1 }, { n: '百數表', g: 1, G: 3, url: 'https://drive.google.com/file/d/0B-3AeNXITt7ZeElLZXdxczF2TTVud0VTLXg2eFhMT2htT2FN/view', left: 2 }, { n: '認識十進位', g: 1, G: 2, url: 'https://docs.google.com/drawings/d/1jS6GPgAOGorEcSHUlJaHYYB6RB43l9v5JzxPlWwDbPY/edit?usp=sharing', edit: true, p: 20, left: 0 }, { n: '乘法A~D', g: 2, G: 4, url: 'https://docs.google.com/document/d/15YqUGEehxC63GfYXMrihKvbT_w93nx-H4m0ZuFkpbjo/edit?usp=sharing', edit: true, p: 90, left: 0 }, { n: '乘法E~F', g: 2, G: 5, url: 'https://docs.google.com/document/d/1zUE7ROOqhaIALC3k0rimZPv8Fo1lf8-gYORG1Wr6eXg/edit?usp=sharing', edit: true, p: 90, left: 1 }, { n: '除法', g: 2, G: 5, url: 'https://docs.google.com/document/d/1uXxQuYTiBDUR5F-bTNXAS3yLma-i9f0yZey5Ck109o4/edit?usp=sharing', edit: true, p: 90, left: 2 }, { n: '除法直式的意涵', g: 3, G: 4, url: 'https://www.youtube.com/watch?v=RvP7ICoxRGs', left: 0 }, { n: '除法直式精熟', g: 3, G: 4, url: 'https://www.youtube.com/watch?v=o73K7oUH_-4', left: 1 }, { n: '餘量的處理', g: 3, G: 5, url: 'https://www.youtube.com/watch?v=falQiyDLL50', left: 2 }, { n: '倍數著色', g: 3, G: 5, url: 'https://bestian.github.io/color-math/', left: 3 }, { n: '分數', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1c1ufnqICyQy0UcsZTqpkIBpBkCPDyQQsH1CB1Bj84_g/edit?usp=sharing', left: 0 }, { n: '面積的估算', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1LLNZQY4JSUc_pZ4K2LPHRA0pnJCfRdPE8Oqxejk29hI/edit?usp=sharing', left: 1 }, { n: '數線', g: 4, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1zZIt-DV6TRzENoDAFX3B-_EPISEGL91KCXd7JIofOx0/edit?usp=sharing', left: 2 }, { n: '時間的計算', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1fjnXcv0yHUCObK3_yRxLtrrDjBKIv_DSqEb_xkswiF8/edit?usp=sharing', edit: true, p: 90, left: 3 }, { n: '體積與容積', g: 5, G: 6, wiki: '', url: 'https://docs.google.com/document/d/1YDhE2j3YfOvlIbQxry-EKBz7LxeQiVt7mM-eCcwL-nE/edit?usp=sharing', left: 0 }, { n: '代數入門', g: 5, G: 6, wiki: '代數入門', url: 'https://docs.google.com/document/d/1LVcw277KiS3CHgle0b-LG5uMA6NN2HO6y_0rLZPvQe8/edit?usp=sharing', left: 1 }, { n: '分數到小數', g: 5, G: 6, wiki: '小數', url: 'https://docs.google.com/document/d/1xr9bhw0qcsio0R3FU9gUOIjW8Ir2mQpAh0fjJh4cnu0/edit?usp=sharing', left: 2 }, { n: '物理量與單位換算', g: 5, G: 6, url: 'https://docs.google.com/document/d/12R1oi-Jia84mYixQBys83TIiM_eMCJfNzQLtXgrLLis/edit', edit: true, p: 30, left: 3 }, { n: '四則運算總複習', g: 5, G: 7, wiki: '', url: 'https://docs.google.com/document/d/11-ouXYWYIfawLMPGOSkXtC_AclO2A6SBHryXfr3NKng/edit?usp=sharing', left: 4 }, { n: '因數與倍數', g: 6, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1RcZy2CN6HSP-wsXb1g61A-Sq0QWjwY3TCJVRWTq3fTQ/edit?usp=sharing', left: 0 }, { n: '正負數', g: 6, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1Agtn1WeZ1QELg3wDHAibw4q2IDyEHU3X1pwj0qaKA-Q/edit?usp=sharing', left: 1 }, { n: '比與比值', g: 6, G: 8, wiki: '比值', url: 'https://docs.google.com/document/d/1jzeGGHqUmgEWZDvywl4xXUNoVPzUoTa_w1J0JzoUk8o/edit?usp=sharing', left: 2 }, { n: '小學數學觀念精華', g: 6, G: 9, url: 'https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=sharing', p: 100, left: 3 }, { n: '正負分數', g: 7, G: 7, wiki: '有理數', url: 'https://docs.google.com/document/d/1tD4_6l1spXg7p6M7bRBb8wNwIJcCSfQIPh_LNu-rfjE/edit?usp=sharing', left: 0 }, { n: '一元一次方程式', g: 7, G: 8, wiki: '方程式', url: 'https://docs.google.com/document/d/1GLAu6BaheHxIGMqUVmz4CfgHJEVJxrP-cc_SaJI3jow/edit?usp=sharing', left: 0.5 }, { n: '不等式', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1KjWUKOMWFHBqlnx6NfZHWb_T8EeMA2GJsvZMmZA5C7k/edit?usp=sharing', left: 1 }, { n: '指數與科學記號', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1j5tdf0TirLjFHTLIcWy4lgSe1oIFh7NshM6GDHCOduE/edit?usp=sharing', left: 1.5 }, { n: '二元一次方程式', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1v80VUYFsiW5V_jEOwPdOAHya5V75XQRzvRfbwnwpPLI/edit?usp=sharing', left: 2 }, { n: '直角座標', g: 7, G: 8, wiki: '座標', url: 'https://docs.google.com/document/d/1ghJHjgS5YUNBjjfkpyQtAX0Njx9npQnzIj-4--_11tw/edit?usp=sharing', left: 2.5 }, { n: '函數圖形', g: 7, G: 8, wiki: '函數', url: 'https://docs.google.com/document/d/163OdWL9EwW4LxRTHIIzpVCnohcg4f3vpebXe2nfFT8E/edit?usp=sharing', left: 3 }, { n: '一元二次方程式', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/16fwpdw89fssKH4rpN5Ihc93zU-YCubBhzDUXs30wKcI/edit?usp=sharing', left: 0 }, { n: '幾何代數_乘法公式', g: 8, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1kjy84i-d_j_pnEp8bXqjkL8zQN6fDZ6kHpZCfY_lqHY/edit?usp=sharing', left: 0.5 }, { n: '勾股定理', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1rPovRRDJ_JBPpQ-MVasmb3s1tXdDcZKGCKLc0TW5fCI/edit?usp=sharing', left: 1 }, { n: '根式運算', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/10oB3rrEhC0yvLlilr8vjAu-Q9LuS6IzRLea4flzYNAo/edit?usp=sharing', left: 1.5 }, { n: '幾何證明', g: 8, G: 9, wiki: '證明', url: 'https://docs.google.com/document/d/13clfEdnC5OZ3fp-NOWqO5HSOAEHMwxJN7BpKM1qkz7g/edit?usp=sharing', left: 2 }, { n: '全等形', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1oPIdcpSMcYED93EK8pTIwLbqg6tRZz0RyQXKp5HtkI8/edit?usp=sharing', left: 2.5 }, { n: '尺規作圖', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1n3BiAVTJXojaYzwV7RjosJinobehwgJQ5IvZNeCAjnY/edit?usp=sharing', left: 3 }, { n: '數列與級數', g: 9, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1PSA7GuKDr2MFHbnzHgBduq-YwGykAzL866EB_yXZuk8/edit?usp=sharing', left: 0 }, { n: '多項式', g: 9, G: 10, wiki: '多項式', url: 'https://docs.google.com/document/d/1wFxpNIhsG2GyA-WLfrtlbqUxrnCKdVnDZ4HjsSw2vVI/edit?usp=sharing', left: 1 }, { n: '機率與統計', g: 9, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1L2gtHUKAe-pANjFS6XE1fAHVYvjgs20MLOFY3ElYYfM/edit?usp=sharing', left: 1 }, { n: '二次函數', g: 9, G: 10, wiki: '二次函數', url: 'https://docs.google.com/document/d/14WG9W2YWzH8t-8BjDBOEcOoJCXErI1qx1tz9geLKY3Q/edit?usp=sharing', left: 1.5 }, { n: '圓與角', g: 9, G: 9, wiki: '圓', url: 'https://docs.google.com/document/d/1PShmOOnanz_iykeu9MEpjISHTMLXmBEMsR9otBYOlj4/edit?usp=sharing', left: 2 }, { n: '三角形的心', g: 9, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1G3oG30oKd--F8t-IH2KKhEthAawf2e0C6SEGDbs2yP8/edit?usp=sharing', left: 2.5 }, { n: '相似三角形', g: 9, G: 10, wiki: '', url: 'https://docs.google.com/document/d/1bLdm7nF8N4-JeyP0ODdVNUK1oos1OYiYCPnVkgoBhso/edit?usp=sharing', left: 3 }, { n: '球體的體積', g: 9, G: 10, wiki: '', url: 'https://docs.google.com/document/d/1nSZuUmEuVyqwBQJIv61zQ_vxLm15GfmcmLSaBVHCtDc/edit#', edit: true, p: 10, left: 4 }, { n: '指數與對數', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1NqKwWmTtMcFS8B5zYrVsqoJhY7Jh6YaiAwhnpONGzug/edit?usp=sharing', left: 1 }, { n: '極座標', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1nSckL7Ge66iC9XHd7tp0VMmLiDdtT78SFKZmTiSYlEw/edit?usp=sharing', edit: true, p: 80, left: 2 }, { n: '國中數學觀念精華', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit?usp=sharing', p: 80, left: 3 }, { n: '三角函數', g: 11, G: 12, wiki: '', url: 'https://docs.google.com/document/d/1W1ZhNi-rbMmB8im9RTJRPfjtw1a6EJSgo3An4d11Dl0/edit?usp=sharing', edit: true, p: 50, left: 3 }, { n: '實無限與微分', g: 12, G: 12, url: 'https://docs.google.com/document/d/1W-lzb6HtaYWLU1S2ypVwmxP6jckXSe7n4oRxJiL52gw/edit?usp=sharing', edit: true, p: 80, left: 1 }, { n: '實無限與積分', g: 12, G: 12, url: 'https://docs.google.com/document/d/1rWVyaTU31Wy4NFvwCtDpTlmEmNCRwqL4YOTpLHhfyi0/edit?usp=sharing', edit: true, p: 50, left: 2 }]
    };
  },

  firebase: {
    play12: __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */],
    chats: __WEBPACK_IMPORTED_MODULE_0__firebase_db__["a" /* chatsRef */]
  },
  methods: {
    submit: function submit(n, email, t) {
      var o = {
        n: n,
        email: email,
        t: t,
        time: new Date().getTime()
      };
      if (t) {
        this.$firebaseRefs.chats.push(o);
        window.alert('留言已送出');
      } else {
        window.alert('請輸入留言');
      }
    },
    rand: function rand(max) {
      var list = [];
      for (var i = 0; i < this.play12.cards.length; i++) {
        var r = Math.floor(Math.random() * max) + 1;
        list[i] = r;
      }
      __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('cards').update(list);
      __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('myNum').update({ 0: 0 });
      __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('unused').update([true, true, true, true]);
      this.$forceUpdate();
    },
    changeCards: function changeCards() {
      console.log(__WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */]);
      if (this.play12.max[0] === 6) {
        __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('max').update({
          0: 9
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('max').update({
          0: 6
        });
      }
    },
    makeCard: function makeCard() {
      var idx = this.play12.unused.map(function (o) {
        return o;
      }).indexOf(false);
      var v = this.play12.myNum[0];
      __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('myNum').update({ 0: 0 });
      var list = this.play12.cards.map(function (o) {
        return o;
      });
      list[idx] = v;
      __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('cards').update(list);

      list = this.unused.map(function (o) {
        return o;
      });
      list[idx] = true;
      __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('unused').update(list);
    },
    useC: function useC(i, n, op) {
      console.log(n);
      var ans = this.play12.myNum[0];
      if (!op) {
        __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('myNum').update({ 0: n });
      } else {
        if (op === '+') {
          __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('myNum').update({ 0: ans + n });
        }
        if (op === '-') {
          __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('myNum').update({ 0: ans - n });
        }
        if (op === '*') {
          __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('myNum').update({ 0: ans * n });
        }
        if (op === '/') {
          __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('myNum').update({ 0: ans / n });
        }
      }

      var list = this.play12.unused.map(function (o) {
        return o;
      });
      list[i] = false;
      __WEBPACK_IMPORTED_MODULE_0__firebase_db__["b" /* play12Ref */].child('unused').update(list);
    }
  },
  mounted: function mounted() {
    this.units.sort(function (a, b) {
      return a.g - b.g;
    });
  }
});

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.38ad27e.png";

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hello_news__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hello_stones__ = __webpack_require__(581);
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  props: ['units'],
  components: { news: __WEBPACK_IMPORTED_MODULE_0__hello_news__["a" /* default */], stones: __WEBPACK_IMPORTED_MODULE_1__hello_stones__["a" /* default */] },
  data: function data() {
    return {
      s: '',
      news: ['2015.05<a href="https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing" target="_blank">數學學習診斷是什麼？</a>上線了！', '2019.05<a href="https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing" target="_blank">給家長的教學引導</a>上線了！', '2018.10.自由數學更新版上線，歡迎使用、協作、樂捐支持！', '2018.10.新功能：您可以直接在教材頁面上留言提問與校誤', '2018.10.全部教材搬上<a href="https://drive.google.com/drive/folders/0B-3AeNXITt7ZaExCaDkxNlZxUXc" target="_blank">GOOGLE雲端硬碟</a>, 改為GOOGLE DOC']
    };
  }
});

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'news',
  data: function data() {
    return {
      news: ['2020.01.<a href="https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit?usp=sharing" target="_blank">國中數學觀念精華</a>教材編創完成', '2020.01.<a href="https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=sharing" target="_blank">小學數學觀念精華</a>教材編創完成', '2020.01.<a href="https://docs.google.com/document/d/16fwpdw89fssKH4rpN5Ihc93zU-YCubBhzDUXs30wKcI/edit?usp=sharing" target="_blank">一元二次方程式教材加入黃金比例簡介</a>', '2019.11.<a href="https://docs.google.com/document/d/1uXxQuYTiBDUR5F-bTNXAS3yLma-i9f0yZey5Ck109o4/edit?usp=sharing" target="_blank">除法</a>教材編創完成', '2019.06.<a href="http://math.alearn.org.tw/#/play12" target="_blank">湊12的手機App版</a>上線了！', '2019.05.<a href="https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing" target="_blank">數學學習診斷是什麼？</a>上線了！', '2019.05.<a href="https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing" target="_blank">給家長的教學引導</a>上線了！', '2018.10.自由數學更新版上線，歡迎使用、協作、樂捐支持！', '2018.10.新功能：您可以直接在教材頁面上留言提問與校誤', '2018.10.全部教材搬上<a href="https://drive.google.com/drive/folders/0B-3AeNXITt7ZaExCaDkxNlZxUXc" target="_blank">GOOGLE雲端硬碟</a>, 改為GOOGLE DOC']
    };
  }
});

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'stones',
  props: ['units'],
  data: function data() {
    return {
      s: '',
      my: ''
    };
  },

  methods: {
    countGrade: function countGrade(g, G) {
      var min = g;
      if (g <= 0) {
        min = '學前';
      }
      var ans = G + '年級';
      if (G <= 0) {
        ans = '學前';
      }
      if (ans === min) {
        return ans;
      } else {
        ans = min + '~' + ans;
      }
      return ans;
    },
    goto: function goto(u) {
      window.open(u.url);
    },
    check: function check(u) {
      if (this.my.indexOf('_' + u.n + '_') === -1) {
        this.my = this.my + ',' + '_' + u.n + '_';
      } else {
        this.my = this.my.replace(',' + '_' + u.n + '_', '');
        this.my = this.my.replace('_' + u.n + '_', '');
      }
      this.my = this.my.replace('_undefined', '');
      this.$router.push('/stones/' + this.my);
    }
  },
  mounted: function mounted() {
    this.my = '_' + this.$route.params.my;
  }
});

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'intro',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_gallery_slideshow__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_gallery_slideshow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_gallery_slideshow__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'maps',
  components: {
    VueGallerySlideshow: __WEBPACK_IMPORTED_MODULE_0_vue_gallery_slideshow___default.a
  },
  data: function data() {
    return {
      index: undefined,
      myRange: { t: '小學數學地圖', p: 6 },
      ranges: [{ t: '小學數學地圖', p: 6 }, { t: '國中數學地圖', p: 6 }, { t: '高中數學地圖', p: 6 }],
      images: ['/static/maps/小學數學地圖/p0.jpg', '/static/maps/小學數學地圖/p1.jpg', '/static/maps/小學數學地圖/p2.jpg', '/static/maps/小學數學地圖/p3.jpg', '/static/maps/小學數學地圖/p4.jpg', '/static/maps/小學數學地圖/p5.jpg', '/static/maps/國中數學地圖/p0.jpg', '/static/maps/國中數學地圖/p1.jpg', '/static/maps/國中數學地圖/p2.jpg', '/static/maps/國中數學地圖/p3.jpg', '/static/maps/國中數學地圖/p4.jpg', '/static/maps/國中數學地圖/p5.jpg', '/static/maps/高中數學地圖/p0.jpg', '/static/maps/高中數學地圖/p1.jpg', '/static/maps/高中數學地圖/p2.jpg', '/static/maps/高中數學地圖/p3.jpg', '/static/maps/高中數學地圖/p4.jpg', '/static/maps/高中數學地圖/p5.jpg']
    };
  },

  methods: {
    printUrl: function printUrl(title, tail) {
      window.open('/static/maps/' + title + tail, '_blank');
    }
  }
});

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  props: ['units'],
  data: function data() {
    return {
      s: '',
      news: ['2015.05<a href="https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing" target="_blank">數學學習診斷是什麼？</a>上線了！', '2019.05<a href="https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing" target="_blank">給家長的教學引導</a>上線了！', '2018.10.自由數學更新版上線，歡迎使用、協作、樂捐支持！', '2018.10.新功能：您可以直接在教材頁面上留言提問與校誤', '2018.10.全部教材搬上<a href="https://drive.google.com/drive/folders/0B-3AeNXITt7ZaExCaDkxNlZxUXc" target="_blank">GOOGLE雲端硬碟</a>, 改為GOOGLE DOC']
    };
  }
});

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'StonesLog',
  props: ['units'],
  data: function data() {
    return {
      s: '',
      my: ''
    };
  },

  methods: {
    goto: function goto(u) {
      window.open(u.url);
    },
    check: function check(u) {
      if (this.my.indexOf('_' + u.n + '_') === -1) {
        this.my = this.my + ',' + '_' + u.n + '_';
      } else {
        this.my = this.my.replace(',' + '_' + u.n + '_', '');
        this.my = this.my.replace('_' + u.n + '_', '');
      }
      this.my = this.my.replace('_undefined', '');
      this.$router.push('/log/' + this.my);
    }
  },
  mounted: function mounted() {
    this.my = '_' + this.$route.params.my;
  }
});

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'donate',
  data: function data() {
    return {
      us: [{ n: '在每份教材上加目錄頁',
        demo: '樣品〈一元二次方程式〉：這是<a href="https://docs.google.com/document/d/16fwpdw89fssKH4rpN5Ihc93zU-YCubBhzDUXs30wKcI/edit?usp=sharing" target="_blank">修改後版本</a>與<a href="https://docs.google.com/document/d/1Z8f0p6Coqz4NxhQk8y045LoF6ZA-ciOsXTtlp_ESNqI/edit?usp=sharing" target="_blank">未修改前版本</a>，您可以比較兩版本的差異',
        edit: true,
        p: 0,
        goal: 20000,
        current: 0
      }]
    };
  }
});

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'vedio',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'faq',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'card',
  data: function data() {
    return {
      flip: false,
      op: '+',
      ops: [{ v: '+', t: '+' }, { v: '-', t: '-' }, { v: '*', t: '×' }],
      n1: 0,
      n2: 0,
      min: 0,
      range: 10
    };
  },

  methods: {
    flipCard: function flipCard() {
      if (this.flip) {
        this.reset();
        this.flip = false;
      } else {
        this.flip = true;
      }
    },
    reset: function reset() {
      this.n1 = Math.floor(Math.random() * (this.range - this.min)) + Number(this.min);
      this.n2 = Math.floor(Math.random() * (this.range - this.min)) + Number(this.min);
    }
  },
  mounted: function mounted() {
    this.reset();
    window.addEventListener('keydown', this.flipCard);
  }
});

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'play12',
  props: ['play12'],
  data: function data() {
    return {};
  },

  methods: {
    rand: function rand(max) {
      this.$emit('rand', max);
    },
    changeCards: function changeCards() {
      this.$emit('changeCards');
    },
    makeCard: function makeCard() {
      this.$emit('makeCard');
    },
    useC: function useC(i, n, op) {
      this.$emit('useC', i, n, op);
    }
  }
});

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'grid',
  data: function data() {
    return {
      type: '0_10_90,1_1_10,+',
      wh: 1.6,
      hide: {}
    };
  },

  methods: {
    countRC: function countRC(ty, k) {
      var ansL = [];
      var rT = ty.split(',')[k];
      var s = rT.split('_');
      for (var i = parseInt(s[0]); i <= parseInt(s[2]); i += parseInt(s[1])) {
        ansL.push(i);
      }
      return ansL;
    },
    op: function op(ty, r, c) {
      var o = ty.split(',')[2];
      if (!o) return '';
      if (o === '*') {
        return r * c;
      }
      if (o === '+') {
        return r + c;
      }
      if (o === '-') {
        return r - c;
      }
    },
    randHide: function randHide(list1, list2) {
      var ans = {};
      var holes = list1.length * list2.length * 3 / 4;
      for (var i = 0; i < holes; i++) {
        var r = list1[Math.floor(Math.random() * list1.length)];
        var c = list2[Math.floor(Math.random() * list2.length)];
        ans[r + '_' + c] = true;
      }
      if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.hide).length === 0) {
        this.hide = ans;
      } else {
        this.hide = {};
      }
    },
    noHide: function noHide(r, c) {
      this.hide[r + '_' + c] = false;
    }
  }
});

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Outer',
  data: function data() {
    return {
      webs: [{ n: '高中數學@零時黑板',
        h: 'http://goban.tw/#/see/%E9%AB%98%E4%B8%AD%E6%95%B8%E5%AD%B8/0/0' }, { n: 'Math@可汗學院',
        h: 'https://www.khanacademy.org/math' }, { n: '均一平台',
        h: 'https://www.junyiacademy.org/exercisedashboard' }, { n: 'SAT線上測驗',
        h: 'https://www.4tests.com/sat' }],
      books: [{ n: '數學教育的藝術與實務─另類教與學',
        h: 'https://www.books.com.tw/products/0010079574'
      }, { n: '跟孩子一起玩數學',
        h: 'https://www.books.com.tw/products/0010687205'
      }],
      oldtests: [{ n: '107國中會考考古題',
        h: 'https://cap.nace.edu.tw/exam/107/107P_Math.pdf',
        a: 'http://chu246.blogspot.com/2018/05/107.html'
      }, { n: '106國中會考考古題',
        h: 'https://cap.nace.edu.tw/read_aloud/106/106P_Math150DPI.pdf',
        a: 'http://chu246.blogspot.com/2017/05/106.html'
      }, { n: '105國中會考考古題',
        h: 'https://cap.nace.edu.tw/read_aloud/105/105P_Math150DPI.pdf',
        a: 'http://chu246.blogspot.com/2016/05/105.html'
      }, { n: '104國中會考考古題',
        h: 'https://cap.nace.edu.tw/read_aloud/104/104P_Math.pdf',
        a: 'http://chu246.blogspot.com/2015/05/104.html'
      }, { n: '103國中會考考古題',
        h: 'https://cap.nace.edu.tw/read_aloud/103/103P_Math.pdf',
        a: 'http://chu246.blogspot.com/2014/05/103.html'
      }, { n: '102國中會考考古題',
        h: 'https://cap.nace.edu.tw/exam/102/102P_Math150DPI.pdf',
        a: 'http://chu246.blogspot.com/2016/01/102.html'
      }]
    };
  },

  methods: {}
});

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Outer',
  data: function data() {
    return {};
  },

  methods: {}
});

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Quiz',
  data: function data() {
    return {
      myQ: undefined,
      myA: undefined,
      win: false,
      wrong: false,
      myC: undefined,
      myLev: 1,
      quizs: [{ c: '加法', l: 1, q: '2+3 = ?', as: [3, 4, 5, 6], t: 5 }, { c: '加法', l: 1, q: '1+4 = ?', as: [3, 4, 5, 6], t: 5 }, { c: '加法', l: 1, q: '2+4 = ?', as: [3, 4, 5, 6], t: 6 }, { c: '加法', l: 1, q: '5+3 = ?', as: [7, 8, 9, 10], t: 8 }, { c: '加法', l: 2, q: '8+3 = ?', as: [10, 11, 12, 13], t: 11 }, { c: '加法', l: 2, q: '4+9 = ?', as: [10, 11, 12, 13], t: 13 }, { c: '加法', l: 2, q: '5+7 = ?', as: [10, 11, 12, 13], t: 12 }, { c: '加法', l: 3, q: '21+37 = ?', as: [58, 59, 60, 61], t: 58 }, { c: '加法', l: 3, q: '13+28 = ?', as: [38, 39, 40, 41], t: 41 }, { c: '加法', l: 3, q: '19+21 = ?', as: [38, 39, 40, 41], t: 40 }, { c: '減法', l: 1, q: '3-2 = ?', as: [1, 2, 3, 4], t: 1 }, { c: '減法', l: 1, q: '4-1 = ?', as: [1, 2, 3, 4], t: 3 }, { c: '減法', l: 1, q: '4-2 = ?', as: [1, 2, 3, 4], t: 2 }, { c: '減法', l: 1, q: '5-3 = ?', as: [1, 2, 3, 4], t: 2 }, { c: '減法', l: 2, q: '18-3 = ?', as: [12, 13, 14, 15], t: 15 }, { c: '減法', l: 2, q: '14-9 = ?', as: [2, 3, 4, 5], t: 5 }, { c: '減法', l: 2, q: '15-7 = ?', as: [7, 8, 9, 10], t: 8 }, { c: '減法', l: 3, q: '37-21 = ?', as: [15, 16, 17, 18], t: 16 }, { c: '減法', l: 3, q: '28-13 = ?', as: [14, 15, 16, 17], t: 15 }, { c: '減法', l: 3, q: '21-19 = ?', as: [1, 2, 3, 4], t: 2 }, { c: '乘法', l: 1, q: '3×2 = ?', as: [3, 4, 5, 6], t: 6 }, { c: '乘法', l: 1, q: '4×3 = ?', as: [11, 12, 13, 14], t: 12 }, { c: '乘法', l: 1, q: '5×2 = ?', as: [10, 11, 12, 13], t: 10 }, { c: '乘法', l: 1, q: '5×3 = ?', as: [14, 15, 16, 17], t: 15 }, { c: '乘法', l: 2, q: '8×3 = ?', as: [22, 23, 24, 25], t: 24 }, { c: '乘法', l: 2, q: '4×9 = ?', as: [34, 35, 36, 37], t: 36 }, { c: '乘法', l: 2, q: '4×8 = ?', as: [29, 30, 31, 32], t: 32 }, { c: '乘法', l: 2, q: '6×7 = ?', as: [40, 41, 42, 43], t: 42 }, { c: '乘法', l: 3, q: '17×2 = ?', as: [33, 34, 35, 36], t: 34 }, { c: '乘法', l: 3, q: '28×3 = ?', as: [53, 54, 55, 56], t: 54 }, { c: '乘法', l: 3, q: '21×9 = ?', as: [189, 190, 191, 192], t: 189 }, { c: '除法', l: 1, q: '有15顆糖,平均分配給三個人,每人可得幾顆呢?', as: [3, 4, 5, 6], t: 5 }],
      myQuizs: [],
      myCs: ['加法', '減法', '乘法']
    };
  },

  methods: {
    setC: function setC(c) {
      this.myC = c;
      this.resetO();
    },
    reset: function reset() {
      this.myLev = Math.floor(Math.random() * 3) + 1;
      this.myC = this.myCs[Math.floor(Math.random() * this.myCs.length)];
      this.resetO();
    },
    resetO: function resetO() {
      var lev = this.myLev;
      var c = this.myC;
      this.myQuizs = this.quizs.filter(function (o) {
        return o.l === lev && o.c === c;
      });
      this.myQ = this.myQuizs[Math.floor(Math.random() * this.myQuizs.length)];
      this.win = false;
      this.wrong = false;
      this.myA = undefined;
      this.$forceUpdate();
    },
    levup: function levup() {
      this.myLev++;
      this.resetO();
    },
    check: function check(a, b) {
      if (a === b) {
        this.win = true;
        this.wrong = false;
      } else {
        this.win = false;
        this.wrong = true;
      }
      this.$forceUpdate();
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Chat',
  props: ['likes', 'chats'],
  data: function data() {
    return {
      msg: '留言版',
      'myName': '訪客',
      'myEmail': '',
      'myText': ''
    };
  },

  methods: {
    submit: function submit(n, email, t) {
      this.myName = '訪客';
      this.myEmail = '';
      this.myText = '';
      this.$emit('submit', n, email, t);
    },
    parseTime: function parseTime(t) {
      return new Date(t).toLocaleDateString();
    }
  }
});

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'new',
  props: [],
  components: {},
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(361);
module.exports = __webpack_require__(563);


/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_vue__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_polyfill_noConflict__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_polyfill_noConflict___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_polyfill_noConflict__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuefire__ = __webpack_require__(1074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_es6_promise__ = __webpack_require__(1075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_autofocus_directive__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_autofocus_directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_autofocus_directive__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.










__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].directive('autofocus', __WEBPACK_IMPORTED_MODULE_8_vue_autofocus_directive___default.a);

__WEBPACK_IMPORTED_MODULE_7_es6_promise___default.a.polyfill();
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_vuefire__["a" /* rtdbPlugin */]);

__webpack_require__(1077);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_vue___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(268);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e620b9e0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(573);
function injectStyle (ssrContext) {
  __webpack_require__(567)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e620b9e0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 567:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export db */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return play12Ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatsRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_database__ = __webpack_require__(571);



var db = __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.initializeApp({
  apiKey: 'AIzaSyAbXT46-ksLj1TftoZM6InbqE98E7pY3d0',
  authDomain: 'freemath-29f84.firebaseapp.com',
  databaseURL: 'https://freemath-29f84.firebaseio.com',
  projectId: 'freemath-29f84',
  storageBucket: 'freemath-29f84.appspot.com',
  messagingSenderId: '729707040849',
  appId: '1:729707040849:web:d55e0f2cbb5b64e9392870',
  measurementId: 'G-CSRZ3GV0SP'
}).database();

var play12Ref = db.ref('play12');
var chatsRef = db.ref('chats');

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"ui top menu no-print thin-only"},[_c('router-link',{staticClass:"item",attrs:{"to":"/","exact":""}},[_c('i',{staticClass:"home icon"})]),_c('router-link',{staticClass:"item",attrs:{"to":"/maps","exact":""}},[_c('i',{staticClass:"map icon"})]),_c('router-link',{staticClass:"item",attrs:{"to":"/tools","exact":""}},[_c('i',{staticClass:"angle double down icon"})]),_c('router-link',{staticClass:"item",attrs:{"to":"/outer","exact":""}},[_c('i',{staticClass:"user add icon"})]),_c('router-link',{staticClass:"item",attrs:{"to":"/faq","exact":""}},[_c('i',{staticClass:"question icon"})])],1),_c('div',{staticClass:"ui top labeled icon menu no-print fat-only"},[_c('router-link',{staticClass:"item",attrs:{"to":"/","exact":""}},[_c('i',{staticClass:"home icon"}),_vm._v("首頁")]),_c('router-link',{staticClass:"item",attrs:{"to":"/maps","exact":""}},[_c('i',{staticClass:"map icon"}),_vm._v("學習地圖")]),_c('router-link',{staticClass:"item",attrs:{"to":"/tools","exact":""}},[_c('i',{staticClass:"angle double down icon"}),_vm._v("小工具")]),_c('router-link',{staticClass:"item",attrs:{"to":"/outer","exact":""}},[_c('i',{staticClass:"user add icon"}),_vm._v("外部資源")]),_c('div',{staticClass:"right menu"},[_c('router-link',{staticClass:"item",attrs:{"to":"/faq","exact":""}},[_c('i',{staticClass:"question icon"}),_vm._v("常見問題")]),_c('router-link',{staticClass:"item",attrs:{"to":"/chat","exact":""}},[_c('i',{staticClass:"chat icon"}),_vm._v("留言板")]),_vm._m(0),_vm._m(1)],1)],1),_c('main',{attrs:{"id":"main"}},[_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[_c('router-view',{attrs:{"units":_vm.units,"play12":_vm.play12,"chats":_vm.chats},on:{"submit":_vm.submit,"rand":_vm.rand,"changeCards":_vm.changeCards,"makeCard":_vm.makeCard,"useC":_vm.useC}})],1),_c('router-link',{attrs:{"id":"logo","to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(272)}})])],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"item",attrs:{"href":"www.github.com/bestian/freemath"}},[_c('i',{staticClass:"github icon"}),_vm._v("原始碼")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item fat-only"},[_c('iframe',{staticStyle:{"border":"none","overflow":"hidden"},attrs:{"src":"https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fmath.alearn.org.tw&layout=button_count&size=small&appId=485195848253155&width=77&height=20","width":"77","height":"20","scrolling":"no","frameborder":"0","allowtransparency":"true","allow":"encrypted-media"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Intro__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Maps__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Table__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_StonesLog__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Donate__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Vedio__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Faq__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Card__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Play12__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Grid__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Outer__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Tools__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Quiz__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Chat__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_New__ = __webpack_require__(641);



















__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/hello',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello__["a" /* default */]
  }, {
    path: '/',
    name: 'New',
    component: __WEBPACK_IMPORTED_MODULE_17__components_New__["a" /* default */]
  }, {
    path: '/intro',
    name: 'Intro',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Intro__["a" /* default */]
  }, {
    path: '/maps',
    name: 'Maps',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Maps__["a" /* default */]
  }, {
    path: '/table',
    name: 'Table',
    component: __WEBPACK_IMPORTED_MODULE_5__components_Table__["a" /* default */]
  }, {
    path: '/log/:my',
    name: 'StonesLog',
    component: __WEBPACK_IMPORTED_MODULE_6__components_StonesLog__["a" /* default */]
  }, {
    path: '/donate',
    name: 'Donate',
    component: __WEBPACK_IMPORTED_MODULE_7__components_Donate__["a" /* default */]
  }, {
    path: '/vedio',
    name: 'Vedio',
    component: __WEBPACK_IMPORTED_MODULE_8__components_Vedio__["a" /* default */]
  }, {
    path: '/faq',
    name: 'Faq',
    component: __WEBPACK_IMPORTED_MODULE_9__components_Faq__["a" /* default */]
  }, {
    path: '/outer',
    name: 'Outer',
    component: __WEBPACK_IMPORTED_MODULE_13__components_Outer__["a" /* default */]
  }, {
    path: '/tools',
    name: 'Tools',
    component: __WEBPACK_IMPORTED_MODULE_14__components_Tools__["a" /* default */]
  }, {
    path: '/card',
    name: 'Card',
    component: __WEBPACK_IMPORTED_MODULE_10__components_Card__["a" /* default */]
  }, {
    path: '/play12',
    name: 'Play12',
    component: __WEBPACK_IMPORTED_MODULE_11__components_Play12__["a" /* default */]
  }, {
    path: '/grid',
    name: 'Grid',
    component: __WEBPACK_IMPORTED_MODULE_12__components_Grid__["a" /* default */]
  }, {
    path: '/quiz',
    name: 'Quiz',
    component: __WEBPACK_IMPORTED_MODULE_15__components_Quiz__["a" /* default */]
  }, {
    path: '/chat',
    name: 'Chat',
    component: __WEBPACK_IMPORTED_MODULE_16__components_Chat__["a" /* default */]
  }]
}));

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__(273);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6111c3ea_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__(584);
function injectStyle (ssrContext) {
  __webpack_require__(577)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6111c3ea_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 577:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hello_news_vue__ = __webpack_require__(274);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_485fcfd4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_hello_news_vue__ = __webpack_require__(580);
function injectStyle (ssrContext) {
  __webpack_require__(579)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-485fcfd4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hello_news_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_485fcfd4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_hello_news_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 579:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('div',{staticClass:"ui grid container"},[_c('div',{staticClass:"ui two column row"},[_c('div',{staticClass:"ui left aligned segment column"},[_c('h3',{staticClass:"ui header"},[_vm._v("如何使用：")]),_c('div',{staticClass:"ui large ordered list"},[_c('router-link',{staticClass:"item",attrs:{"to":"/maps"}},[_vm._v("使用〈學習地圖〉(可列印出紙本)")]),_c('div',{staticClass:"item"},[_vm._v("選擇單元進入教材，自學練功(可列印出紙本)")]),_vm._m(0)],1)]),_c('div',{staticClass:"ui left aligned segment column"},[_c('h3',{staticClass:"ui header"},[_vm._v("最新消息：")]),_c('div',{staticClass:"ui large bulleted list"},_vm._l((_vm.news.slice(0, 3)),function(n){return _c('div',{staticClass:"item"},[_c('span',{domProps:{"innerHTML":_vm._s(n)}})])}))])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_vm._v("卡關時可上"),_c('a',{attrs:{"href":"https://www.facebook.com/groups/156709241062806/","target":"_blank"}},[_c('i',{staticClass:"facebook icon"}),_vm._v("自學數學團\n提問")]),_c('div',{staticClass:"item"},[_vm._v("亦可參考"),_c('a',{attrs:{"href":"https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing","target":"_blank"}},[_vm._v("數學學習診斷是什麼？")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hello_stones_vue__ = __webpack_require__(275);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb9826a8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_hello_stones_vue__ = __webpack_require__(583);
function injectStyle (ssrContext) {
  __webpack_require__(582)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eb9826a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hello_stones_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb9826a8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_hello_stones_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 582:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"river"},[_c('div',{staticClass:"ui input"},[_c('input',{directives:[{name:"autofocus",rawName:"v-autofocus"},{name:"model",rawName:"v-model",value:(_vm.s),expression:"s"}],attrs:{"id":"find","type":"text","placeholder":"依關鍵字或年級搜詢","autofocus":""},domProps:{"value":(_vm.s)},on:{"input":function($event){if($event.target.composing){ return; }_vm.s=$event.target.value}}})]),_vm._l((_vm.units),function(u){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.s || u.n.indexOf(_vm.s) > -1 || (_vm.s >= u.g && _vm.s <= u.G)),expression:"!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)"}],staticClass:"stone",class:{ checked: _vm.my.indexOf('_' + u.n + '_') > -1 },style:({top: u.g * 80 + 200 + 'px', left: u.left * 20 + 'vw' })},[_c('a',{attrs:{"href":u.url,"target":"_blank"}},[_c('img',{attrs:{"src":'https://www.google.com/s2/favicons?domain='+u.url}}),_vm._v(_vm._s(u.n)),_c('br'),_c('span',{staticClass:"fat-only gray"},[_vm._v(_vm._s(_vm.countGrade(u.g, u.G))+" ")])])])}),_c('iframe',{attrs:{"src":"https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true","width":"400","height":"1775","frameborder":"0","marginheight":"0","marginwidth":"0"}},[_vm._v("Loading...")])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br'),_c('news'),_c('stones',{attrs:{"units":_vm.units}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Intro_vue__ = __webpack_require__(276);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08ecafbe_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Intro_vue__ = __webpack_require__(587);
function injectStyle (ssrContext) {
  __webpack_require__(586)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08ecafbe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Intro_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08ecafbe_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Intro_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 586:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br',{staticClass:"fat-only"}),_c('h1',[_vm._v("編創緣起")]),_c('div',{staticClass:"ui grid"},[_c('div',{staticClass:"one column row"},[_c('div',{staticClass:"column"},[_c('div',{staticClass:"ui segment container"},[_c('h3',[_vm._v("前言：")]),_c('p',[_vm._v("補習班研發優質教材，除了自己教學用，是為了連鎖開店。我們研發優質教材，除了自己教學用，是為了公益。")]),_c('h3',[_vm._v("理念：")]),_c('p',[_vm._v("台灣國高中數學一直是學子頭痛的課題，許多人一到國中，就放棄數學。對於補習的孩子，往往考出了成績也未必真懂，更是壓力的重擔。")]),_c('p',[_vm._v("又因補習風氣過度，國中老師常會以補習班教過為由，跳過基本概念，讓沒有補習的孩子，除非天資特別，往往跟不上進度。不懂久了，挫折累積，就逐漸放棄。")]),_c('p',[_vm._v("另一方面，由於追求適性教育，台灣的在家自學人數愈來愈多，台北市一年約有三百人，且還在不停成長。自學生迫切需要教學資源，不只是教材，還有知識的脈絡，讓他們能用自己的步調學習，而非暗中瞎闖。")]),_c('p',[_vm._v("課本的設計是為了搭配上課的講解，因此往往而有綱要較少脈絡，一般坊間所謂參考書也是假想學生已在課堂上學過脈絡，而把重點放在習題。這些材料對使用教材自學的學生，過於零碎。因而專門為自學情境設計的教材更有其必要。")]),_c('p',[_vm._v("因此，我們計畫用兩年的時間，創作一系列形成性教材，還有一本國中數學自學手冊，將上課的講解化諸文字，包含脈絡與學習方法，還有國中數學的大地圖，明列各單元之間的主從與先後關係，讓學習者可自我檢視、自訂進度，落實學生中心的教學理念。")]),_c('p',[_vm._v("拜熱心的網友之賜，台灣的國中數學免費學習資源不少，在網路上可以找到很多，但是目前現在的網路資源有兩個瓶頸：")]),_c('h4',[_vm._v("1. 脈絡：")]),_c('p',[_vm._v("網上的資源，大多還是照著課本的單元，但是課本的單元是跳著上的，一下子代數、一下子幾何、一下子機率，除非全部學完，否則根本理不出頭緒。")]),_c('p',[_vm._v("例如，當學習者學到幾何時，有興趣深入，他要花很多力氣才能找到下一個相關的單元，因為分在不同冊甚至不同年級。")]),_c('p',[_vm._v("我們計劃透過自學手冊與其中的學習地圖，回歸學習的本質，以學生為中心，讓他可以掌握自己的進度，並自我檢視。")]),_c('h4',[_vm._v("2. 品質：")]),_c('p',[_vm._v("由於網路的方便，加上經費的考量，許多網路資源的品質其實不佳，有的甚至不如坊間的講義自修，更別說補習班的私藏教材了。")]),_c('p',[_vm._v("我們計劃讓自由教材的品質，提高到不輸給補習班商業機密的私藏教材，這樣可以讓整體的水準提高，讓學習者真的能靠教材學會、學懂，並且喜歡數學。")]),_c('h3',[_vm._v("SWOT分析：")]),_c('h4',[_vm._v("S優勢：")]),_c('p',[_vm._v("朱佳仁老師與我，師事數學教授與數學教育家，台大數學系副教授朱建正先生多年，對學生中心的教學充份的理解。教學經驗皆有十年以上，教導過體制內外的學生和在家自學生，曾幫助許多特殊生、學障生、資優生重建興趣，領略數學之美，也協助過許多自學生訂定自學計劃與檢視。")]),_c('h4',[_vm._v("適性教學的專業")]),_c('h4',[_vm._v("學生中心的專業")]),_c('h4',[_vm._v("重建興趣的專業")]),_c('h4',[_vm._v("自學指導的專業")]),_c('h4',[_vm._v("W劣勢：")]),_c('p',[_vm._v("由於我們是教學專業，而非編輯專業，對於各種編輯軟體、繪圖軟體的使用，還有如何推廣，都是邊做邊學。")]),_c('p',[_vm._v("人力有限也是一個限制。我們只有兩個人合力研發，一般出版社都是百人以上。因為人力不足，本來想連高中數學一併開發，造福更多學子，但現在要等國中教材成功後，才能再找合作夥伴來一起設計高中的教材。")]),_c('p',[_vm._v("此外，經費也是影響人力資源的重要因素。免費教材基本上無利可圖，為了維持生活收入，我們都必須花大量的時間備課、開課，無法專注於公益教材的開發。")]),_c('h4',[_vm._v("編輯軟體的經驗")]),_c('h4',[_vm._v("推廣管道的局限")]),_c('h4',[_vm._v("人力資源的局限")]),_c('h4',[_vm._v("經費的局限")]),_c('h3',[_vm._v("O機會點：")]),_c('p',[_vm._v("在家自學社群中，已有許多人提出類似的需求，希望有好教材、學習脈絡。")]),_c('p',[_vm._v("邊遠地區的學校，也很缺好的免費教材，讓學生就算在學校不懂，也不去補習，還是可以靠教材與地圖，自學數學，且能學會、學懂、學得紮實而有興趣。")]),_c('h3',[_vm._v("Ｔ威脅：")]),_c('p',[_vm._v("翻譯教材的想法是一個威脅。歐美的自學起步較早，加上地廣人多，社群較大，現在已累積許多好的教材。因此也有人考慮直接翻譯瑞典、美國或新加坡的自學教材，就不必自己研發。")]),_c('p',[_vm._v("我們對台灣的教材資源提升當然樂見其成，但是對翻譯教材的投入可能會影響對本土教材的支持。")]),_c('p',[_vm._v("雖然國外的教材品質也高，但本土教材有幾個難以取代的好處：")]),_c('h4',[_vm._v("本土化的舉例：")]),_c('p',[_vm._v("例如，我們用廟裡的筊杯來介紹機率基本觀念。翻譯教材舉的例子常和台灣學生的生活經驗無關，讓例子的力道打折扣。")]),_c('h4',[_vm._v("古典的舉例：")]),_c('p',[_vm._v("例如，我們在介紹勾股定理時，用了<周髀算經>的圖，而非<幾何原本>的圖。一方面是幫助理解，二方面也是復古風，讓學生瞭解古中國也有高明的數學成就，數學不只是外國人的玩意。")]),_c('h4',[_vm._v("名詞解釋：")]),_c('p',[_vm._v("[統]是綜合大量的、[計]是計算，所以[統計]是[綜合大量資料的計算]。像這樣的中文數學名詞解釋，在翻譯的教材中不可能出現。")]),_c('h4',[_vm._v("流暢的語文：")]),_c('p',[_vm._v("我們形成性教材中許多文字填空，讓學生邊學邊想。翻譯的教材文字，除非譯者特別高明，否則文法和修辭上會有點怪怪，較難一氣呵成，尤其要修改文字填空的位置，相當不易。")])])])]),_c('div',{staticClass:"two column doubling row"},[_c('div',{staticClass:"column"},[_c('div',{staticClass:"ui segment"},[_c('h2',[_vm._v("跟著教材思考  -  朱佳仁，自由數學共同發起人")]),_c('h3',[_vm._v("為什麼要編教材？")]),_c('img',{attrs:{"src":"/static/img/Chiajen001.jpg","width":"50%"}}),_c('p',[_vm._v("當初寫這份教材，是因為市面上找不到合適的自學教材，"),_c('b',[_vm._v("一般教科書太嚴謹、太生硬，很難讓人上手自學，而參考書又只是條列重點後，就是一堆例題。")])]),_c('p',[_vm._v("剛好那時候父親幫康軒編了數學好小子這一套國小數學教材，以填充格讓學生能夠跟著解題思路走，就向宗浩提議合編一套國中數學教材，"),_c('b',[_vm._v("一樣以邊閱讀邊填充的方式，增加學生參與的機會，並且配合教材合開了混齡的數學自學課程，這是起點。")])]),_c('p',[_vm._v("後來我們的共開了幾學期的自學課程，還參入數學遊戲的部份，變成「數學練與玩」，而這套教材也在學生學習的需要下，逐漸把國中各單元編寫完成，要感謝這門課程，讓我們在學生需要的催促下，能夠完成一個又一個的單元。")]),_c('h3',[_vm._v("教材的取向")]),_c('p',[_vm._v("很多學生到了國中後，開始懷疑這些非日常生活所需的數學，為什麼還要學？我常跟學生說，腦袋像肌肉一樣，不用就會退化，抽象思考能力如果不藉由學習更深的數學，就無法鍛鍊，"),_c('b',[_vm._v("也許這些內容日後並不會用到，但是在學習的過程中，學到的解題思路與策略，卻是一輩子帶的走的能力。")])]),_c('p',[_vm._v("這套教材也許並不如教科書一般嚴謹，但是"),_c('b',[_vm._v("它希望讓學生感覺到好像有人陪著他一起想問題，並且經歷當年這些許許多多的前輩們，所面臨的掙扎、所採取的各種試驗，所以在過程中特別帶入與前後單元的連結，並配合「數學地圖」，讓學生體會到數學觀念並非孤島，而是一棵互想有連結、枝葉茂密的大樹。")])]),_c('h3',[_vm._v("編創的考驗與開源釋出的想法")]),_c('p',[_vm._v("編寫教材是數學教學者最大的考驗，在課堂上，一個經驗豐富的教學者可以即時反應學生的需要，但是在編寫教材中，要想像學生在做的時候，可能會有的反應，又要兼顧讓學習的材料能夠有邏輯的呈現出來。還有挑選或是設計有代表性的例題，讓學生能夠真正的在做這些題目中，學到東西。")]),_c('p',[_vm._v("把這份教材釋出就是希望能夠讓更多人一起跟著教材思考與學習，而教材是活的，不同使用者的回饋還會讓我們去修改內容，或是以其他方式來貼近使用者的需要。"),_c('b',[_vm._v("希望大家多多給我們回饋，並且享受一起思考、一起發現的快樂與成就。")])]),_c('iframe',{attrs:{"width":"90%","height":"360","src":"https://www.youtube.com/embed/6NhyCXJU-IQ?rel=0","frameborder":"0","allowfullscreen":""}})])]),_c('div',{staticClass:"column"},[_c('div',{staticClass:"ui segment container"},[_c('h2',[_vm._v("教材不是萬能，沒教材萬萬不能  -  唐宗浩，自由數學共同發起人")]),_c('h3',[_vm._v("為什麼要編教材？")]),_c('img',{attrs:{"src":"/static/img/Bestian001.jpg","width":"50%"}}),_c('p',[_vm._v("其實，一開始我和許多教育工作者一樣，只是在教自己班上的學生，有需要時，會自編一些學習單而已，沒想過會去編整套的教材。")]),_c('p',[_vm._v("那時我總認為編整套的教材，是有人力、有財力的出版社，或是公益的基金會，才做的事。")]),_c('p',[_vm._v("後來是因為教材不夠用，我為了要找一套，可以自學用的教材，去賣參考書的書店逛。")]),_c('p',[_c('b',[_vm._v("結果，我被看到的一切嚇到了。找了很久，找不到一本有完整交代觀念的。它們都把重點放在後面的練習題。")])]),_c('p',[_vm._v("這意味著，學生不能用這些教材自學，甚至無法邊學邊問，甚至在觀念還不清楚的情況下，就被埋入大量的習題之中。")]),_c('p',[_c('b',[_vm._v("這不是我要的。我要學生可以拿來自己學會的。")])]),_c('p',[_vm._v("事實上，很多學生在課堂上不會完全聽懂，聽懂也可能會忘，教材應該具有學習和複習的功能，尤其是先備知識有洞的學生，更需要適合程度的教材來補洞。")]),_c('p',[_vm._v("例如對一個「分數」概念不清的學生，你給他二十題分數的「計算」練習，並不能幫他澄清概念。很多人以為學生數學不好就是練習不夠，其實不一定，很多時候是觀念不清。練習也重要，但不能本末倒置。")]),_c('p',[_vm._v("沒有完整引入觀念的教材，只能說是公式與題目集錦，只能當額外練習，完完全全不適合學生自學。")]),_c('p',[_c('b',[_vm._v("那時我十分沮喪。後來升起一個念頭：既然，我要的教材不存在，那就只好自己去編了。")])]),_c('h3',[_vm._v("和佳仁老師合作")]),_c('p',[_vm._v("佳仁是我在教育界的前輩，也是我在小學時的理化老師，後來我在自主培力學園任教時，她也給過很多教學方面的指導。")]),_c('p',[_vm._v("佳仁在自主培力學園請產假的那一學年，我大學還沒畢業，就接下了代課的任務。")]),_c('p',[_vm._v("代佳仁的課，一開始壓力很大，因為佳仁的課很精彩，也很紮實，而且自主培力學園是挑戰很高的班級。")]),_c('p',[_vm._v("培力學園專收不想上學的國高中生，重建他們的學習動力。那時我第一次帶混齡、學生個別差異大，包含符號障礙、閱讀障礙、受過不當教學、受過霸凌的學生時，為了重新建立成功經驗、啟動思考實驗的勇氣與能力、讓學生重新喜歡數學，就用了全部的心思和能力。")]),_c('p',[_vm._v("雖然學生的能力和態度進步明顯，但是很多在學校的考試上，仍沒有能激起成就感的成績進步。")]),_c('p',[_vm._v("我原本是要他們拿學校課本來自己練。我以為在思考和學習能力進步後，看課本自修應該不難。")]),_c('p',[_c('b',[_vm._v("但是，當我看到當前的課本編輯方式，我就瞭解為什麼他們沒辦法看課本自修。不要說困難的學生，一般生也很難看那種課本來自修。課本編輯的方式，和以前我中學時大大不同，竟然忽略讓人形成概念的「原始問題」，而是從名詞、符號、公式與例題講起。")])]),_c('p',[_vm._v("那樣的課本，完全只能在課堂中，當作一個索引和練習，非常不適合自己唸。")]),_c('p',[_c('b',[_vm._v("我也嘗試找過其他坊間的教材、參考書、包括體制外的教材…凡是一般家庭找得到的教材，我大概都接觸過。但是，都沒有一套既包含了課本的軸線，又適合自己唸的。")])]),_c('p',[_vm._v("正好那時佳仁回來，我們就商量自編「形成性教材」，也就是可以自修來形成概念，可以當課本用的教材。")]),_c('p',[_vm._v("其實，如果不是佳仁決定一起合作，我自己一個人可能不敢著手去編。")]),_c('h3',[_vm._v("編教材的過程")]),_c('p',[_vm._v("編一份教材的過程，並沒有想像中簡單。並不是把自己會的，寫出來就好。")]),_c('p',[_vm._v("形成性教材，是把課堂上的引入、講述、探問、深化、綜合、練習等過程，用紙本呈現。")]),_c('p',[_vm._v("課堂上，同一個概念可以用三四種不同的角度切入，可以跟學生持續對話，直到他懂為止。教材就沒有辦法，同一個概念大約只能用一兩個例子和代表性的圖解，來做引入，所以設計的過程就必須格外小心。如果弄偏了，學生自己唸的時候就會看不懂。")]),_c('p',[_c('b',[_vm._v("還有要考量的就是文字的量。對於閱讀障礙的學生，不管內容這是什麼，字太多、排版太緊，就會沒辦法讀。")]),_vm._v("既然教材要讓閱讀障礙的學生也能使用（當然難免還是會有些吃力），就必須在脈絡清楚的前提下，將字數精簡、將版面簡化、也不宜放太多花俏的裝飾。")]),_c('p',[_vm._v("對我來說，"),_c('b',[_vm._v("編一份搭配上課的輔助教材，大約要一個小時，但是編一份可以自修用的形成性教材，大約要一個星期。")])]),_c('p',[_vm._v("兩者的難度，是天壤之別。")]),_c('h3',[_vm._v("學習地圖")]),_c('p',[_vm._v("學習地圖原本的初始想法，其實只是一份打勾用的清單，把各單元依年段列上去。")]),_c('p',[_vm._v("後來決定嘗試用先備後續的關係，畫成有向圖、拉出學習地圖，上面也標註各單元被排入的年級，這樣學生不一定要依年段來唸，可以依主題領域去自修。有些學生喜歡深入掌握一個主題，例如幾何，先把國中各個幾何的單位弄通，再去碰代數，而不是依照課本進度，一個年級各碰一些。")]),_c('p',[_c('b',[_vm._v("有這樣一張地圖，無論是想照年級去自修，或是想照主題領域去自修的學生，都可以各得其所。")])]),_c('p',[_vm._v("等到編小學學習地圖時，發現這個結構不適用，因為小學很多都是交互相關、適合用浸泡式、整合在一起學習。")]),_c('p',[_vm._v("而且小學的領域也不大適合完全自修，所以地圖的編法是以親子數學為基本，給家長看的。")]),_c('p',[_vm._v("至於高中地圖，目前還沒有編得很完善。不過初步可以看出，高中的單元幾乎都是為了大學的數學做準備，有些是截取其中一小角來教，並不真的很必要。")]),_c('p',[_vm._v("像微積分、線性代數、機率、統計、離散數學都是這樣，被截取一角放入高中課程。因此在地圖上就標出它們原本來自哪裡，如果有興趣的學生，可以自己去找原初的知識領域，完整學起來，瞭解更高的整體，回頭來看被選入高中課程的片段，就會覺得有脈絡可循而比較簡單了。")]),_c('h3',[_vm._v("開源的想法")]),_c('p',[_c('b',[_vm._v("事實上，一開始我對開源也很陌生，是不是作品白白讓人家拿去用？")])]),_c('p',[_vm._v("但是，後來我覺得，不必為了防止少數人可能濫用，就去阻止多數人善用它的機會。而且，這套教材如果一直留在我們自己的檔案庫中，很可能一直都是半成品。")]),_c('p',[_c('b',[_vm._v("那些沒編完的單元，尤其是高中部份，需要畫大量的圖解，其實不是只靠兩名各自有家庭、有工作的人，用課餘的時間，在接下來的三五年內，能夠完成的。")])]),_c('p',[_vm._v("如果開源出去，說不定會影響一些人加入協作吧？說不定會有其他的親子數學實踐家長，和適性教學的老師，參與一起開發吧？光是為了這個可能，就值得了。")]),_c('p',[_c('b',[_vm._v("另一個原因是最近收到愈來愈多的公益教材使用申請，回信也回得有點手軟，不如把放上網路，想用的人直接下載，")]),_vm._v("討論和錯誤回報直接在Github平台上進行，也不必申請和等待了。")]),_c('p',[_vm._v("很高興一開始分享，就收到了寬廣媽媽分享的親子數學互動記錄。這記錄對於剛開始從事親子數學活動的人，是很寶貴的。")]),_c('p',[_vm._v("希望自由數學Freemath愈來愈豐富，不只有好的教材，也有好的教法，也有好的互動記錄。")]),_c('p',[_c('b',[_vm._v("然後，當好的教材不用錢，而且親師生都可以取得，大家就可以把力氣放在學習方法、教學方法等難以言詮的地方，而不會再為教材煩惱")]),_vm._v("。早日脫離「沒教材萬萬不能」，早日進入「教材不是萬能」的境地，把著眼點放在學習、互動與創造上。")])])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Maps_vue__ = __webpack_require__(277);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_697f7e2b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Maps_vue__ = __webpack_require__(592);
function injectStyle (ssrContext) {
  __webpack_require__(589)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Maps_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_697f7e2b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Maps_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 589:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeComponent", function() { return normalizeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInjector", function() { return createInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInjectorSSR", function() { return createInjectorSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInjectorShadow", function() { return createInjector$1; });
function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle$1(id, style, context);
}
function addStyle$1(id, css, context) {
    const group =  true ? css.media || 'default' : id;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        if (false) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    Buffer.from(unescape(encodeURIComponent(JSON.stringify(css.map)))).toString('base64') +
                    ' */';
        }
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}

function createInjector$1(context, shadowRoot) {
    return (id, style) => addStyle$2(style, shadowRoot);
}
function createStyleElement(shadowRoot) {
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    shadowRoot.appendChild(styleElement);
    return styleElement;
}
function addStyle$2(css, shadowRoot) {
    const styleElement = createStyleElement(shadowRoot);
    if (css.media)
        styleElement.setAttribute('media', css.media);
    if ('styleSheet' in styleElement) {
        styleElement.styleSheet.cssText = css.source;
    }
    else {
        while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
        }
        styleElement.appendChild(document.createTextNode(css.source));
    }
}


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br'),_vm._v(" "),_c('h1',[_vm._v("攀岩式學習地圖")]),_vm._v(" "),_c('div',{staticClass:"ui left aligned segment container no-print"},[_c('h3',{staticClass:"ui header"},[_vm._v("如何使用：")]),_vm._v(" "),_c('div',{staticClass:"ui large ordered list"},[_c('div',{staticClass:"item"},[_vm._v("\n        選擇適合年段的地圖下載印出\n      ")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._v("\n        用筆圈出己經會的單元\n      ")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._v("\n        用筆圈出不太會的單元(可打問號)\n      ")]),_vm._v(" "),_c('router-link',{staticClass:"item ",attrs:{"to":"/","exact":""}},[_c('i',{staticClass:"home icon"}),_vm._v("回首頁下載相關教材\n      ")]),_vm._v(" "),_vm._m(0)],1),_vm._v(" "),_c('div',{staticClass:"ui form no-print"},[_c('div',{staticClass:"inline fields"},[_c('label',[_vm._v("選擇年段：")]),_vm._v(" "),_vm._l((_vm.ranges),function(r){return _c('div',{staticClass:"field"},[_c('div',{staticClass:"ui radio checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.myRange),expression:"myRange"}],attrs:{"type":"radio","name":"year"},domProps:{"value":r,"checked":_vm._q(_vm.myRange,r)},on:{"change":function($event){_vm.myRange=r}}}),_vm._v(" "),_c('label',{staticClass:"clickable",on:{"click":function($event){_vm.myRange = r}}},[_vm._v(_vm._s(r.t))])])])}),_vm._v(" "),_c('div',{staticClass:"field"},[_c('button',{staticClass:"ui large green button",attrs:{"id":"doPrint"},on:{"click":function($event){_vm.printUrl(_vm.myRange.t,'.pdf')}}},[_vm._v(" 友善列印\n          ")])])],2)])]),_vm._v(" "),_vm._l((_vm.images),function(image,i){return _c('img',{key:i,staticClass:"image",attrs:{"src":image},on:{"click":function($event){_vm.index = i}}})}),_vm._v(" "),_c('vue-gallery-slideshow',{attrs:{"images":_vm.images,"index":_vm.index},on:{"close":function($event){_vm.index = null}}})],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_vm._v("\n        遇到問題可上\n        "),_c('a',{staticClass:"item",attrs:{"href":"https://www.facebook.com/groups/156709241062806/","target":"_blank"}},[_c('i',{staticClass:"facebook icon"}),_vm._v("自學數學團\n        ")]),_vm._v("提問\n      ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue__ = __webpack_require__(278);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e2d61a7_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Table_vue__ = __webpack_require__(595);
function injectStyle (ssrContext) {
  __webpack_require__(594)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e2d61a7_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 594:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('div',{staticClass:"ui container"},[_c('div',{staticClass:"ui input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.s),expression:"s"}],attrs:{"id":"find","type":"text","placeholder":"以關鍵字或年級查詢","autofocus":""},domProps:{"value":(_vm.s)},on:{"input":function($event){if($event.target.composing){ return; }_vm.s=$event.target.value}}})]),_c('div',{staticClass:"ui stackable grid"},[_c('div',{staticClass:"ui row"},[_c('div',{staticClass:"ui ten wide column"},[_c('table',{staticClass:"ui celled striped table"},[_c('tbody',[_vm._m(0),_vm._m(1),_c('tr',[_c('th',[_vm._v("單元")]),_c('th',[_vm._v("狀態")]),_c('th',[_vm._v("編輯進程"),_c('br'),_vm._v("（歡迎    "),_c('router-link',{staticClass:"item",attrs:{"to":"/donate","exact":""}},[_c('i',{staticClass:"gift icon"},[_vm._v("出錢出力")])]),_c('i',{staticClass:"gift icon"},[_vm._v("）來加速")])],1)]),_vm._l((_vm.units),function(u,index){return _c('tr',{directives:[{name:"show",rawName:"v-show",value:(!_vm.s || u.n.indexOf(_vm.s) > -1 || (_vm.s >= u.g && _vm.s <= u.G)),expression:"!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)"}],staticClass:"item"},[_c('td',[_c('a',{attrs:{"target":"_blank","href":u.url || ('https://3dw.github.io/mathprint/'+u.n+'.doc')}},[_c('img',{attrs:{"src":'https://www.google.com/s2/favicons?domain='+u.url}}),_vm._v(_vm._s(u.n)+"("),_c('span',{directives:[{name:"show",rawName:"v-show",value:(u.g <= 0 && u.G <=0),expression:"u.g <= 0 && u.G <=0"}]},[_vm._v("學齡前")]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(u.g <= 0 && u.G > 0),expression:"u.g <= 0 && u.G > 0"}]},[_vm._v("學齡前~"+_vm._s(u.G)+"年級")]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(u.g > 0 && u.G > 0),expression:"u.g > 0 && u.G > 0"}]},[_vm._v(_vm._s(u.g)+"~"+_vm._s(u.G)+"年級")]),_vm._v(")")])]),_c('td',[_c('a',{attrs:{"target":"_blank","href":u.url || ('https://3dw.github.io/mathprint/'+u.n+'.doc')}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(u.edit),expression:"u.edit"}]},[_c('i',{staticClass:"edit icon"}),_vm._v("草稿(歡迎共筆)")]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!u.edit),expression:"!u.edit"}]},[_c('i',{staticClass:"comments icon"}),_vm._v("完稿(歡迎留言)")])])]),_c('td',[_c('a',{attrs:{"target":"_blank","href":u.url || ('https://3dw.github.io/mathprint/'+u.n+'.doc')}},[_c('sui-progress',{attrs:{"state":u.edit ? 'warning' : 'success',"percent":u.p || (u.edit && 50) || 100,"label":(u.p || (u.edit && 50) || 100) + '%'}})],1)])])})],2)])]),_vm._m(2)])])]),_c('div',{staticClass:"fb-comments no-print",attrs:{"data-href":"http://math.alearn.org.tw","data-numposts":"5"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',{attrs:{"colspan":"4"}},[_c('h4',[_vm._v("請先參考"),_c('a',{attrs:{"href":"https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing","target":"_blank"}},[_vm._v("給家長的教學引導")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',{attrs:{"colspan":"4"}},[_vm._v("自學教材")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui six wide column"},[_c('iframe',{attrs:{"src":"https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true","width":"320","height":"1775","frameborder":"0","marginheight":"0","marginwidth":"0"}},[_vm._v("Loading...")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StonesLog_vue__ = __webpack_require__(279);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1579473d_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_StonesLog_vue__ = __webpack_require__(598);
function injectStyle (ssrContext) {
  __webpack_require__(597)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1579473d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StonesLog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1579473d_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_StonesLog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 597:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"river"},[_c('div',{staticClass:"ui input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.s),expression:"s"}],attrs:{"id":"find","type":"text","placeholder":"依關鍵字或年級搜詢","autofocus":""},domProps:{"value":(_vm.s)},on:{"input":function($event){if($event.target.composing){ return; }_vm.s=$event.target.value}}})]),_vm._l((_vm.units),function(u){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.s || u.n.indexOf(_vm.s) > -1 || (_vm.s >= u.g && _vm.s <= u.G)),expression:"!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)"}],staticClass:"stone",class:{ checked: _vm.my.indexOf('_' + u.n + '_') > -1 },style:({top: u.g * 50 + 200 + 'px', left: u.left * 20 + 'vw' })},[_c('a',{attrs:{"href":u.url,"target":"_blank"}},[_c('img',{attrs:{"src":'https://www.google.com/s2/favicons?domain='+u.url}})]),_c('a',{on:{"click":function($event){_vm.check(u)}}},[_vm._v(_vm._s(u.n))])])}),_c('iframe',{attrs:{"src":"https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true","width":"400","height":"1775","frameborder":"0","marginheight":"0","marginwidth":"0"}},[_vm._v("Loading...")])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Donate_vue__ = __webpack_require__(280);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0cd1b4ca_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Donate_vue__ = __webpack_require__(601);
function injectStyle (ssrContext) {
  __webpack_require__(600)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0cd1b4ca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Donate_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0cd1b4ca_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Donate_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 600:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br'),_vm._v(" "),_c('h1',[_vm._v("您可以讓自由數學更好")]),_vm._v(" "),_c('div',{staticClass:"ui grid container"},[_c('div',{staticClass:"ui row"},[_c('div',{staticClass:"ui left aligned segment column"},[_c('h3',{staticClass:"ui header"},[_vm._v("最新集資目標：")]),_vm._v(" "),_vm._l((_vm.us.slice(0, 1)),function(u){return _c('div',{staticClass:"item"},[_c('h2',[_vm._v(_vm._s(u.n))]),_vm._v(" "),_c('h3',{domProps:{"innerHTML":_vm._s(u.demo)}}),_vm._v(" "),_c('h4',[_vm._v("集資目標：$NT"+_vm._s(u.goal))]),_vm._v(" "),_c('h4',[_vm._v("現已集資：$NT"+_vm._s(u.current))]),_vm._v(" "),_c('sui-progress',{attrs:{"state":u.edit ? 'warning' : 'success',"percent":u.p,"label":u.p + '%'}}),_vm._v(" "),_vm._m(0,true)],1)})],2)]),_vm._v(" "),_c('div',{staticClass:"two column doubling row"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"column"},[_c('div',{staticClass:"ui segment container"},[_vm._m(2),_vm._v(" "),_c('h3',[_vm._v("為什麼要編開放教材？")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('h3',[_vm._v("分享給朋友？")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('h3',[_vm._v("提問與校誤？")]),_vm._v(" "),_c('p',[_vm._v("您可以從您或孩子正在寫的單元開始，直接在GOOGLE文件上留言提問。")]),_vm._v(" "),_c('h3',[_vm._v("參與編輯")]),_vm._v(" "),_c('p',[_vm._v("您可以先選擇"),_c('router-link',{staticClass:"item ",attrs:{"to":"/","exact":""}},[_c('i',{staticClass:"home icon"}),_vm._v("首頁")]),_vm._v("中的草稿單元，點入即可開始編輯。")],1),_vm._v(" "),_c('h3',[_vm._v("我有自行研發的教材想釋出")]),_vm._v(" "),_c('p'),_vm._m(5),_vm._v(" "),_c('p')])])])]),_vm._v(" "),_vm._m(6)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"ui green big button",attrs:{"href":"http://map.alearn.org.tw/#/doner/gift","target":"_blank"}},[_c('i',{staticClass:"gift icon"}),_vm._v("樂捐支持")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"column"},[_c('div',{staticClass:"ui segment container"},[_c('h2',[_c('i',{staticClass:"gift icon"}),_vm._v("出錢")]),_vm._v(" "),_c('h3',[_vm._v("為什麼要捐錢？")]),_vm._v(" "),_c('p',[_vm._v("支持研發與維護公益開放教材的老師")]),_vm._v(" "),_c('h3',[_vm._v("捐錢有什麼用？")]),_vm._v(" "),_c('div',{staticClass:"ui ordered list"},[_c('div',{staticClass:"item"},[_vm._v("支持研發與維護公益開放教材的老師")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._v("促進新單元的開發")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._v("您可以在捐助的留上備註你希望加速開發的單元")])]),_vm._v(" "),_c('h3',[_vm._v("如何捐錢？")]),_vm._v(" "),_c('p',[_vm._v("\n              請點選"),_c('a',{staticClass:"item",attrs:{"href":"http://map.alearn.org.tw/#/doner/gift","target":"_blank"}},[_c('i',{staticClass:"gift icon"}),_vm._v("樂捐支持\n               ")]),_vm._v("，內有詳細的說明。\n           ")]),_vm._v(" "),_c('h3',[_vm._v("會有正式的收據嗎？")]),_vm._v(" "),_c('p',[_vm._v("會的，這是"),_c('a',{attrs:{"href":"www.alearn.org.tw","target":"_blank"}},[_vm._v("社團法人自主學習促進會")]),_vm._v("的專案，會有正式的收據，可供抵稅。")]),_vm._v(" "),_c('h3',[_vm._v("一次捐多少錢好呢？")]),_vm._v(" "),_c('p',[_vm._v("量力而為，你可以用$NT1000當參考值。")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',[_c('i',{staticClass:"edit icon"}),_vm._v("出力")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("當初寫這份教材，是因為市面上找不到合適的自學教材，"),_c('b',[_vm._v("一般教科書太嚴謹、太生硬，很難讓人上手自學，而參考書又只是條列重點後，就是一堆例題。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("您可以幫忙分享給朋友，用一鍵即可"),_c('iframe',{staticStyle:{"border":"none","overflow":"hidden"},attrs:{"src":"https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fmath.alearn.org.tw&layout=button_count&size=small&mobile_iframe=false&appId=485195848253155&width=77&height=20","width":"77","height":"20","scrolling":"no","frameborder":"0","allowTransparency":"true","allow":"encrypted-media"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui list"},[_c('div',{staticClass:"item"},[_vm._v("請先上傳到GOOGLE雲端硬碟\n              ")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._v("邀請bestian@gmail.com加入協作者")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._v("在邀請信上簡介您的教材（如適合的年級）")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui segment"},[_c('a',{attrs:{"href":"mailto:bestian@gmail.com"}},[_c('i',{staticClass:"mail icon"}),_vm._v("有其他問題嗎？歡迎寫信給宗浩")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Vedio_vue__ = __webpack_require__(281);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d2c272e2_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Vedio_vue__ = __webpack_require__(604);
function injectStyle (ssrContext) {
  __webpack_require__(603)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d2c272e2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Vedio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d2c272e2_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Vedio_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 603:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('ul',{staticClass:"ui divided big list"},[_c('div',{staticClass:"item"},[_vm._v("可參考"),_c('a',{attrs:{"href":"https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit","target":"_blank"}},[_vm._v("給家長的教學引導")])]),_c('div',{staticClass:"item"},[_vm._v("可參考"),_c('a',{attrs:{"href":"https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing","target":"_blank"}},[_vm._v("數學學習診斷是什麼？")])]),_c('div',{staticClass:"item"},[_c('iframe',{attrs:{"width":"80%","height":"300","src":"https://www.youtube.com/embed/4lmydQfv6B4","frameborder":"0","allow":"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen":""}})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Faq_vue__ = __webpack_require__(282);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03c6371b_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Faq_vue__ = __webpack_require__(607);
function injectStyle (ssrContext) {
  __webpack_require__(606)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03c6371b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Faq_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03c6371b_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Faq_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 606:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br'),_vm._v(" "),_c('h1',[_vm._v("常見問題")]),_vm._v(" "),_c('h4',[_vm._v("\n    請先參考\n    "),_c('a',{attrs:{"href":"https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing","target":"_blank"}},[_vm._v("給家長的教學引導")])]),_vm._v(" "),_c('div',{staticClass:"ui grid container"},[_c('div',{staticClass:"ui two column row"},[_c('div',{staticClass:"ui segment column"},[_c('h2',[_vm._v("教材架構")]),_vm._v(" "),_c('h4',[_vm._v("Q: 自由數學的攀岩地圖和學校課綱的結構一樣嗎？如何對照？")]),_vm._v(" "),_c('p',[_vm._v("不同。自由數學的攀岩地圖不只是依年紀分，還有「知識叢集」的概念，如分數與小數叢集，包含完整的分數與小數概念、計算方式，跨越課本近三個年級的範圍。")]),_vm._v(" "),_c('p',[_vm._v("經驗上，學習者如果把目標放在學完整個叢集，再切換到別處，有助於知識的深化與固化。")]),_vm._v(" "),_c('p',[_vm._v("如果自學家庭有要返校考試的壓力，也可以兩線同步進行：一個照著「知識叢集」一塊一塊的學習，一是照著課本螺線式的學習，可以相輔相成。")]),_vm._v(" "),_c('h4',[_vm._v("Q: 自由數學知識地圖與單元教材能不能分開使用？")]),_vm._v(" "),_c('p',[_vm._v("當然可以。")]),_vm._v(" "),_c('p',[_vm._v("地圖主要是計劃和記錄的工具，可以搭配各種教材，除了自由數學，像課本、Khan Aacdemy、均一等都可以搭配。")]),_vm._v(" "),_c('p',[_vm._v("自由數學單元教材，不只可以對應到攀岩地圖，也可以對應到別種脈絡，如學校課綱、Khan Knowledge Map、均一知識星空等。均為相容。")]),_vm._v(" "),_c('p',[_vm._v("事實上，組識學習進程的方法，不只一種；各單元的教材教法也不只一種。除了選擇搭配，您還可以自創，例如用您喜歡的方式自己畫出獨特的知識地圖。")]),_vm._v(" "),_c('h4',[_vm._v("Q: 自由數學單元教材和課本單元結構一樣嗎？如何對照？")]),_vm._v(" "),_c('p',[_vm._v("範圍大至相同，但是編輯處理的方式不一樣。")]),_vm._v(" "),_c('p',[_vm._v("目前課綱是螺旋式的，有些單元分散在好幾個年紀，一次教一些，學生學了一部分就要跳到別的單元去。")]),_vm._v(" "),_c('p',[_vm._v("自由數學的教材有「知識叢集」的概念，比較集中，像<分數>單元就會從頭講起，從由來、表徵方式、等價分數、同分母與異分母的加減、一直到分數乘除以及分子分母含0的特殊情況，才完整告一段落。")]),_vm._v(" "),_c('p',[_vm._v("如果要和課本對照，可以採取兩線進度的方式，課本與自由數學教材，範圍有很大的交集，只是介紹的方式不同，可以並用參照。")]),_vm._v(" "),_c('h4',[_vm._v("Q: 地圖上的單元都有搭配的<自由數學>自學教材嗎?")]),_vm._v(" "),_c('p',[_vm._v("我們的方針是重質勝於重量。")]),_vm._v(" "),_c('p',[_vm._v("人力有限時，我們把3~9年級範圍做的比較好，品質優良，且大部份的單元都有。但也並不是每有單元都有。如果您遇到地圖上有單元沒有對應的教材，可用單元名當關鍵字，上網查詢各方教材、教學短片。")]),_vm._v(" "),_c('p',[_vm._v("3年級以下，建議多搭配具體的操作與遊戲，紙筆操作和電腦的操作都不宜太多。")]),_vm._v(" "),_c('p',[_vm._v("9年級以上，中英文的閱讀力較強，一般課本與各方網路教材足勘使用。此時也可嘗試英文網站，如:")]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"https://www.khanacademy.org/","target":"_blank"}},[_vm._v("https://www.khanacademy.org/")])]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"http://www.w3schools.com/","target":"_blank"}},[_vm._v("http://www.w3schools.com/")]),_vm._v("等等。")])]),_vm._v(" "),_c('div',{staticClass:"ui segment column"},[_c('h2',[_vm._v("自學過程")]),_vm._v(" "),_c('h4',[_vm._v("Q: 教材中有些空格是需要學生自行填寫的，如果不知道該填入什麼或是不確定填入的答案是否正確時該怎麼辦呢？")]),_vm._v(" "),_c('p',[_vm._v("A: 如果遇到不知如何填寫，可以直接在文件上留言提問，也可上臉書\n          "),_c('a',{staticClass:"item",attrs:{"href":"https://www.facebook.com/groups/156709241062806/","target":"_blank"}},[_c('i',{staticClass:"facebook icon"}),_vm._v("自學數學團\n          ")]),_vm._v("提問，可將卡住的部份拍照上傳，並寫一些目前的想法與疑問，就會有人回答了。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('h4',[_vm._v("Q: 觀念性空格的答案何不附在最後面？")]),_vm._v(" "),_c('p',[_vm._v("A: 謝謝您的建議。不過，有時空格並無標準答案，也有時雖有標準答案，但在課堂上較常鼓勵學生勇敢去猜，猜錯也沒有關係，只要後面能繼續往下，如果前面的觀念一時有誤，也能再更正。")]),_vm._v(" "),_c('p',[_vm._v("所以沒有留下空格的標準答案，如同習題也沒有留下標準答案。")]),_vm._v(" "),_c('p',[_vm._v("如果在教學時發現有標準答案的版本較符合需求，可以在google docs中複製出您自己的版本來改。")])])])]),_vm._v(" "),_c('div',{staticClass:"ui segment"},[_c('a',{attrs:{"href":"mailto:bestian@gmail.com"}},[_c('i',{staticClass:"mail icon"}),_vm._v("有其他問題嗎？歡迎寫信給宗浩")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__ = __webpack_require__(283);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_760928af_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__ = __webpack_require__(610);
function injectStyle (ssrContext) {
  __webpack_require__(609)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-760928af"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_760928af_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 609:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br'),_c('h2',[_vm._v("閃卡")]),_c('h3',[_vm._v("（按任意鍵翻牌）")]),_c('div',{staticClass:"ui form container no-print"},[_c('div',{staticClass:"inline fields"},[_c('div',{staticClass:"field"},[_c('div',{staticClass:"ui labeled input"},[_c('div',{staticClass:"ui label"},[_vm._v("數字下限")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.min),expression:"min"}],attrs:{"id":"r","type":"number","step":"5"},domProps:{"value":(_vm.min)},on:{"input":function($event){if($event.target.composing){ return; }_vm.min=$event.target.value}}})])]),_c('div',{staticClass:"field"},[_c('div',{staticClass:"ui labeled input"},[_c('div',{staticClass:"ui label"},[_vm._v("數字上限")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.range),expression:"range"}],attrs:{"id":"r","type":"number","step":"5","autofocus":""},domProps:{"value":(_vm.range)},on:{"input":function($event){if($event.target.composing){ return; }_vm.range=$event.target.value}}})])])]),_c('div',{staticClass:"inline fields"},[_c('label',[_vm._v("選擇算法：")]),_vm._l((_vm.ops),function(o){return _c('div',{staticClass:"field"},[_c('div',{staticClass:"ui radio checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.op),expression:"op"}],attrs:{"type":"radio","name":"year"},domProps:{"value":o.v,"checked":_vm._q(_vm.op,o.v)},on:{"change":function($event){_vm.op=o.v}}}),_c('label',{staticClass:"clickable",on:{"click":function($event){_vm.op = o.v}}},[_vm._v(_vm._s(o.t))])])])})],2)]),(!_vm.flip)?_c('div',{staticClass:"ui centered red card clickable",on:{"click":function($event){_vm.flipCard()}}},[(_vm.op == '+')?_c('h1',{staticClass:"ui header"},[_vm._v(_vm._s(_vm.n1)+" + "+_vm._s(_vm.n2)+" = ?")]):_vm._e(),(_vm.op == '-')?_c('h1',{staticClass:"ui header"},[_vm._v(_vm._s(_vm.n1)+" - "+_vm._s(_vm.n2)+" = ?")]):_vm._e(),(_vm.op == '*')?_c('h1',{staticClass:"ui header"},[_vm._v(_vm._s(_vm.n1)+" × "+_vm._s(_vm.n2)+" = ?")]):_vm._e()]):_c('div',{staticClass:"ui centered orange fliped card clickable",on:{"click":function($event){_vm.flipCard()}}},[(_vm.op == '+')?_c('h1',{staticClass:"ui blue header"},[_vm._v(_vm._s(_vm.n1 + _vm.n2))]):_vm._e(),(_vm.op == '-')?_c('h1',{staticClass:"ui blue header"},[_vm._v(_vm._s(_vm.n1 - _vm.n2))]):_vm._e(),(_vm.op == '*')?_c('h1',{staticClass:"ui blue header"},[_vm._v(_vm._s(_vm.n1 * _vm.n2))]):_vm._e()]),_vm._m(0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui segment container"},[_c('h3',[_vm._v("閃卡手機App")]),_c('div',{staticClass:"ui buttons"},[_c('a',{staticClass:"ui green button",attrs:{"href":"https://play.google.com/store/apps/details?id=tw.bestian.flashcard","target":"_blank"}},[_c('i',{staticClass:"google play icon"},[_vm._v("Google Play下載")])]),_c('a',{staticClass:"ui orange button",attrs:{"href":"https://apps.apple.com/us/app/自由數學閃卡/id1468723833?l=zh&ls=1","target":"_blank"}},[_c('i',{staticClass:"app store icon"},[_vm._v("App Store下載")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Play12_vue__ = __webpack_require__(284);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d319635c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Play12_vue__ = __webpack_require__(613);
function injectStyle (ssrContext) {
  __webpack_require__(612)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d319635c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Play12_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d319635c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Play12_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 612:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('div',{staticClass:"ui segment container"},[(_vm.play12.max[0] == 6)?_c('h2',[_vm._v("~~加減乘除湊 12~~")]):_c('a',{staticClass:"ui yellow button",on:{"click":function($event){_vm.changeCards()}}},[_vm._v("改成湊 12")]),(_vm.play12.max[0] == 9)?_c('h2',[_vm._v("~~加減乘除湊 24~~")]):_c('a',{staticClass:"ui yellow button",on:{"click":function($event){_vm.changeCards()}}},[_vm._v("改成湊 24")])]),_c('div',{staticClass:"ui segment container"},[_c('div',{staticClass:"ui horizontal list"},[_c('div',{staticClass:"item"},[_c('h2',{class:(_vm.play12.max[0] == 6 && _vm.play12.myNum[0] == 12) || (_vm.play12.max[0] == 9 && _vm.play12.myNum[0] == 24) ? 'good' : 'bad'},[(_vm.play12.myNum[0])?_c('a',{on:{"click":function($event){_vm.makeCard()}}},[_vm._v("目前數字："),_c('div',{staticClass:"ui yellow huge button"},[_vm._v(_vm._s(_vm.play12.myNum[0]))])]):_c('span',[_vm._v("先按一個數字開始")])])])])]),_c('div',{staticClass:"ui container"},[_c('div',{staticClass:"ui four cards"},_vm._l((_vm.play12.cards),function(c,$index){return _c('div',{staticClass:"ui card",class:$index % 2 == 0 ? 'orange' : 'yellow'},[(_vm.play12.myNum[0] != 0 && _vm.play12.unused[$index])?_c('div',{staticClass:"ui vertical buttons"},[_c('a',{staticClass:"ui huge orange button",on:{"click":function($event){_vm.useC($index, c, '+')}}},[_vm._v("+"+_vm._s(c))]),_c('a',{staticClass:"ui huge yellow button",on:{"click":function($event){_vm.useC($index, c, '-')}}},[_vm._v("-"+_vm._s(c))]),_c('a',{staticClass:"ui huge orange button",on:{"click":function($event){_vm.useC($index, c, '*')}}},[_vm._v("×"+_vm._s(c))]),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.play12.myNum[0] != 0),expression:"play12.myNum[0] != 0"}],staticClass:"ui huge yellow button",on:{"click":function($event){_vm.use($index, c, '/')}}},[_vm._v("÷"+_vm._s(c))])]):_vm._e(),(_vm.play12.myNum[0] == 0)?_c('a',{on:{"click":function($event){_vm.useC($index, c)}}},[_c('h1',[_vm._v(_vm._s(c))])]):_vm._e()])}))]),(_vm.play12)?_c('div',{staticClass:"ui segment container"},[_c('a',{staticClass:"ui yellow button",on:{"click":function($event){_vm.rand(_vm.play12.max[0])}}},[_c('h2',[_vm._v("再來!")])])]):_vm._e(),_vm._m(0),_c('br'),_c('br')])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui segment container"},[_c('h3',[_vm._v("湊12手機App")]),_c('div',{staticClass:"ui buttons"},[_c('a',{staticClass:"ui green button",attrs:{"href":"https://play.google.com/store/apps/details?id=tw.bestian.play12","target":"_blank"}},[_c('i',{staticClass:"google play icon"}),_vm._v("Google Play下載")]),_c('a',{staticClass:"ui orange button",attrs:{"href":"https://apps.apple.com/us/app/湊12/id1467667119?l=zh&ls=1","target":"_blank"}},[_c('i',{staticClass:"app store icon"}),_vm._v("App Store下載")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Grid_vue__ = __webpack_require__(285);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d37585f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Grid_vue__ = __webpack_require__(623);
function injectStyle (ssrContext) {
  __webpack_require__(615)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Grid_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d37585f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Grid_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 615:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br'),_c('h1',{staticClass:"ui center aligned header noPrint"},[_vm._v("方格紙")]),_c('div',{staticClass:"ui vertical segment"},[_c('div',{staticClass:"ui center aligned header noPrint"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.type),expression:"type"}],staticStyle:{"font-size":"120%"},attrs:{"autofocus":"true"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"1_1_10,1_1_10"}},[_vm._v("空白表")]),_c('option',{attrs:{"value":"0_10_90,1_1_10,+"}},[_vm._v("百數表")]),_c('option',{attrs:{"value":"0_1_10,0_1_10,+"}},[_vm._v("加法表")]),_c('option',{attrs:{"value":"1_1_9,1_1_9,*"}},[_vm._v("九九乘法表")]),_c('option',{attrs:{"value":"1_1_12,1_1_12,*"}},[_vm._v("十二乘法表")])]),_c('div',{staticClass:"ui button group"},[_c('a',{staticClass:"ui green button",on:{"click":function($event){_vm.randHide(_vm.countRC(_vm.type,0), _vm.countRC(_vm.type,1))}}},[_vm._v("隨機挖洞")]),_c('button',{staticClass:"ui teal button",attrs:{"onclick":"window.print()"}},[_vm._v("友善列印")])])]),_c('div',[_c('div',{staticClass:"ui"},[_c('table',{attrs:{"border":"8"}},[_c('tbody',_vm._l((_vm.countRC(_vm.type,0)),function(r){return _c('tr',_vm._l((_vm.countRC(_vm.type,1)),function(c){return _c('td',{style:({width: _vm.wh+'cm', height: _vm.wh + 'cm'})},[_c('a',{staticClass:"black",on:{"click":function($event){_vm.noHide(r, c)}}},[_c('span',{class:{invisible: _vm.hide[r+'_'+c]}},[_vm._v(_vm._s(_vm.op(_vm.type,r,c)))])])])}))}))])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Outer_vue__ = __webpack_require__(292);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d4d96da_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Outer_vue__ = __webpack_require__(626);
function injectStyle (ssrContext) {
  __webpack_require__(625)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d4d96da"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Outer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d4d96da_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Outer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 625:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('br'),_c('br'),_c('div',{staticClass:"ui two doubling cards container"},[_c('div',{staticClass:"ui card"},[_c('h1',[_vm._v("會考考古題")]),_vm._m(0),_c('div',{staticClass:"ui list"},[_vm._l((_vm.oldtests),function(o,idx){return _c('div',{staticClass:"item"},[_c('a',{attrs:{"href":o.h,"target":"_blank"}},[_c('img',{attrs:{"src":'https://www.google.com/s2/favicons?domain=' + o.h}}),_vm._v("              "+_vm._s(o.n))]),_c('span',{staticClass:"space"}),_c('a',{attrs:{"href":o.a,"target":"_blank"}},[_c('img',{attrs:{"src":'https://www.google.com/s2/favicons?domain=' + o.a}}),_vm._v("              解答")])])}),_c('br')],2)]),_vm._m(1),_c('div',{staticClass:"ui card"},[_c('h1',[_vm._v("相關書籍")]),_c('div',{staticClass:"ui list"},_vm._l((_vm.books),function(b){return _c('div',{staticClass:"item"},[_c('a',{attrs:{"href":b.h,"target":"_blank"}},[_c('img',{attrs:{"src":'https://www.google.com/s2/favicons?domain=' + b.h}}),_vm._v(_vm._s(b.n))])])}))]),_c('div',{staticClass:"ui card"},[_c('h1',[_vm._v("網路學習資源")]),_c('div',{staticClass:"ui list"},_vm._l((_vm.webs),function(w){return _c('div',{staticClass:"item"},[_c('a',{attrs:{"href":w.h,"target":"_blank"}},[_c('img',{attrs:{"src":'https://www.google.com/s2/favicons?domain=' + w.h}}),_vm._v(_vm._s(w.n))])])}))]),_vm._m(2),_vm._m(3)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h4',[_vm._v("寫的時候就照著時限(80分鐘)，來測試自己的速度"),_c('br'),_vm._v("          最好寫完還有20分鐘以上可以檢查一遍~")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui card"},[_c('h1',[_vm._v("大學考試考古題詳解")]),_c('div',{staticClass:"ui list"},[_c('div',{staticClass:"item"},[_c('a',{attrs:{"href":"http://www.grandeast.com.tw/Math/PastExam?T=45","target":"_blank"}},[_c('img',{attrs:{"src":"https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45"}}),_vm._v("學科能力測驗")])]),_c('div',{staticClass:"item"},[_c('a',{attrs:{"href":"http://www.grandeast.com.tw/Math/PastExam?T=46","target":"_blank"}},[_c('img',{attrs:{"src":"https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45"}}),_vm._v("指定科目考試")])]),_c('div',{staticClass:"item"},[_c('a',{attrs:{"href":"http://www.grandeast.com.tw/Math/PastExam?T=47","target":"_blank"}},[_c('img',{attrs:{"src":"https://www.google.com/s2/favicons?domain=http://www.grandeast.com.tw/Math/PastExam?T=45"}}),_vm._v("四技二專統測")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui card"},[_c('h1',[_vm._v("延伸學習資源")]),_c('div',{staticClass:"ui list"},[_c('div',{staticClass:"item"},[_c('a',{attrs:{"href":"https://arxiv.org/archive/math","target":"_blank"}},[_c('img',{attrs:{"src":"https://www.google.com/s2/favicons?domain=https://arxiv.org/archive/math"}}),_vm._v("              arXiv.org學術平台")])]),_c('div',{staticClass:"item"},[_c('a',{attrs:{"href":"https://proofwiki.org/wiki/Main_Page","target":"_blank"}},[_c('img',{attrs:{"src":"https://www.google.com/s2/favicons?domain=https://proofwiki.org/wiki/Main_Page"}}),_vm._v("              維基證明")])]),_c('div',{staticClass:"item"},[_c('a',{attrs:{"href":"http://www.mathland.idv.tw/mathtest/exambody.htm","target":"_blank"}},[_c('img',{attrs:{"src":"https://www.google.com/s2/favicons?domain=http://www.mathland.idv.tw/mathtest/exambody.htm"}}),_vm._v("              國中各單元複習題庫")])]),_c('div',{staticClass:"item"},[_c('a',{attrs:{"href":"https://sites.google.com/site/jsjhmath/home/bu-jiu-jiao-xue-juan","target":"_blank"}},[_c('img',{attrs:{"src":"https://www.google.com/s2/favicons?domain=https://sites.google.com/site/jsjhmath/home/bu-jiu-jiao-xue-juan"}}),_vm._v("              國中各單元複習卷")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui card"},[_c('h1',[_vm._v("工具軟體")]),_c('div',{staticClass:"ui list"},[_c('div',{staticClass:"item"},[_c('a',{attrs:{"href":"https://www.geogebra.org/","target":"_blank"}},[_c('img',{attrs:{"src":"https://www.google.com/s2/favicons?domain=https://www.geogebra.org/"}}),_vm._v("              geogebra算術繪圖")])]),_c('div',{staticClass:"item"},[_c('a',{attrs:{"href":"https://scratch.mit.edu/","target":"_blank"}},[_c('img',{attrs:{"src":"https://www.google.com/s2/favicons?domain=https://scratch.mit.edu/"}}),_vm._v("              scratch拼圖寫程式")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tools_vue__ = __webpack_require__(293);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_29ebc782_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Tools_vue__ = __webpack_require__(629);
function injectStyle (ssrContext) {
  __webpack_require__(628)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-29ebc782"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tools_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_29ebc782_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Tools_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 628:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('div',{staticClass:"ui container"},[_c('div',{staticClass:"ui two stackable cards"},[_c('div',{staticClass:"ui card"},[_c('router-link',{staticClass:"item",attrs:{"to":"/card","exact":""}},[_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":__webpack_require__(630)}})]),_vm._v("閃卡")]),_c('div',{staticClass:"description"},[_vm._v("自動產生算式和答案")])],1),_c('div',{staticClass:"ui card"},[_c('router-link',{staticClass:"item",attrs:{"to":"/grid","exact":""}},[_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":__webpack_require__(631)}})]),_vm._v("方格紙產生器")]),_c('div',{staticClass:"description"},[_vm._v("生成百數表、乘法表等，還可以隨機挖洞")])],1),_c('div',{staticClass:"ui card"},[_c('router-link',{staticClass:"item",attrs:{"to":"/log/_","exact":""}},[_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":__webpack_require__(632)}})]),_vm._v("摸石頭")]),_c('div',{staticClass:"description"},[_vm._v("以摸石頭的介面做學習記錄")])],1),_c('div',{staticClass:"ui card"},[_c('router-link',{staticClass:"item",attrs:{"to":"/table","exact":""}},[_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":__webpack_require__(633)}})]),_vm._v("教材列表")]),_c('div',{staticClass:"description"},[_vm._v("將教材排列整齊，易於查詢")])],1),_c('div',{staticClass:"ui card"},[_c('router-link',{staticClass:"item",attrs:{"to":"/play12","exact":""}},[_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":__webpack_require__(634)}})]),_vm._v("湊12")]),_c('div',{staticClass:"description"},[_vm._v("四張牌，加減乘除湊12，可以和別人連線一起解謎")])],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAAHhCAIAAADmiEI9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABFlSURBVHhe7d3fi1z1/cfx77/yvc+NUMhNoJQlIIFShFy0WqxUUKklF4lSixVNiwpJ8aK5sKVNEKmWQsUkvbEWWthiVyWKSZqmRkPUDVlrsps0MW52k3z9vnE/DdkfM5nZX6/ZzePBkIvZz5mZPZnznPM5s3Pmf74EWHXSAwRIDxAgPUBAr+n5P4B+tHZ0cOv0zNzK9evXp6amL1269B+AzqoS1Yoqxkw6WkfmuUV6ZqJz8eLFU6c++sc/jrm4uLj0cqliVDdmAtRqMlu39Mx05+zZc3VDo6OnL1++3KVhAKUqUa2oYlQ3qh6d6tMxPTPdqW7V8ufOnWvXAvSmulH16LTv0y09165dO3XqVNWrXQXQj6pHNaRK0mt6ZnZ5JicnK1q179SuBehH1aMaUiWZv+PTMT0VqgsXLtRi83MF0IuqRzWkSjJ/x6dbeiYmztdi7SqA/lVDqiR9pOfq1UrPhPQAS/FVeiaqJ72n5+r4uPQAS1INqZJUT6QHWD3SAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPUCA9AAB0gMESA8QID1AgPQAAdIDBEgPECA9QID0AAHSAwRIDxAgPWvJ9PT02NjY22+/PXKTw4cPT0xMXL9+vQ2CtUB6Bl2t8zNnzvz2t7+95557/rezTZs2/ehHP6oSTU5OtiXpweXLlw8cOHDfffdt2LChrcqb1Fp9880321CWlfQMrlrb//znP7dt29a2g97ceeedBw8enJqaardCZ6dOnbr33nvbipunYlRVmrNhsFykZ0B9/vnnu3fvXvCluBf333//hx9+2G6LhYyPjz/00ENtfS3k+eefv3btWhvNcpOeQXT69OnuW0UvtmzZ8s4777RbZLZqSpWlramFPPHEEzUXa6NZAdIzcLrPAvpS9Tl8+HC7XW7y+uuvd9mjfOCBB86ePduGsjKkZ7DUM76e920LWA62ovk++OCDu+66q62gearXNaANZcVIzwC55SygDA0NPfvsszVsxk9+8pNNmza1n3Wwb9++Of+7t7OaRv34xz9uq2Yeh5ZXjfQMkCNHjnTpyP33318D5v/9TgVreHi4XqvbuHnqFf6TTz5po29vt4x7/dSh5dUhPYNiampq586dbQuY56mnnvr888/b0IV0P0K0f//+Nu729uabb3aJu0PLq0l6BsXRo0c3btzYNoLZaoLQyybx1ltvdbqF2qiuXLnSxq2YiYmJ733ve+0u/6uuqevbiKiqc5dDPA6KrTLpGRR79+5tG8FsmzdvPn78eBvU1eTk5OOPP94Wm211tv9BTk+1u/rbHtM8lSSHlleZ9AyEmkxt3769bQezPffcc70ffXjllVfaYrN985vf/Oijj9qgFTOw6ann7b59+9oDmsenJSKkZyBUF6oObVO4yYYNG9544402qAeHDh1qS862ZcuWkydPtkErZmDT0+UQj7e0UqRnILz33nt33HFH2xpu0u+BT+mZb2xs7O67726PZh5vaaVIz6CodXvx4sVjx47Vi/Czzz67bdu23//+93VN+3FvOqVndbb/AUxP90M8O3bsuHTpUhvK6pKedeXPf/5z26pm2759e/f35pfFoKWnnq6vvvpqexzzOLScJT3rR00cnnvuubZhzbZnz545/8ErYdDS0+UQj0PLcdKzfoyOjm7durVtWzfZuHHje++91watpIFKT5dPwzm0PAikZ53oclDj0Ucf7etY9aINTnqmpqaefvrp9gjmcWh5EEjPelD7Ozt27Ggb1mw1szh06FAbt8IGJD31LK2dmk7nxKhA1+MZGRnZtWvX3XfffeONxaGhoQcffHDv3r0nTpwQplUgPWvY5ORkzaR++tOfLvjGfFnlmcWApKfLOTG+/vWvP/bYY50OAN1QA37961+v8sO+3UjPWvLxxx//8Ic/vPcr9SrdNpQOasBrr722at0pg5CeyvGTTz7Z7ntpagUePHjQHtAKkZ615OTJk11OjnFD7ew8+uijNQtri62WQUjP8PBwp6nW4uzevXt1jpTdbqRnLbller72ta/t2rWrorOaOzs3xNNz4cKFhx9+uN3x8un3b8rphfSsJb3s9dRr/o4dO44ePbqMXwq4f//+dusr6Re/+EW7v8XqfsblpfCm2LKTnrWkxwnXjArQmTNn2pJLsybSUzsmNc1st9XV0NDQzPGycvObXF34E8RlJz1rSV/pKbWNjYyMzPmvXYQ1kZ4u51qbUTtEzzzzzMcffzxnf7B2Z/71r39VtrrvMdVUriZ0bRmWTHrWkn7TU5bl5XpNpKfTudZmbN269ciRI10qXD964403uqzeCtPw8HAbzZJJz5o0PT09MTHxwQcfHDhwYPv27d2nDHfdddepU6fakosy+Onpcq610vsnRd9///1OfxNUdu7c6Rull4v0rAeXLl2q1/wuAXr66aeXss0Mfno6nWut9Lvfd/DgwU4zr9p1On36dBvH0kjP+vHOO+90mi9s3rz5xIkTbVz/Xn/99XZUtqsFD9nWNXV9G9HVCy+80O6vf2+99Va7v3l2797d15tT1fFOn0opdUdtHEsjPetKl1fsl156qQ1aMcG/6+m0X7a4T+132ct75ZVX2iCWRnrWldrI77vvvraVzPb4449PTk62cSsjmJ5Ox5hrbSzi3o8fP/6Nb3yj3cRsSzwWzg3Ss67UzGLXrl1tK5ltFRIQTE8Vod3fbE8s6gvIxsfHv/vd77abmE16lov0rDedXv+3rPyZ4QcwPYsrxYK/yAzpWS7Ss950Ok6xvtPT6beWnoElPQPk3LlzL7/88oMPPrht27Y//elPi/vQ0O2Znj/+8Y/t/mar6eciVmOX9NROZRvE0khP3vXr199///0nn3xyzptTv/vd7+b8r/Si04TrO9/5zqefftoGrYxget59990F39p77LHHvvjiizaoZ13+Sqga1waxNNITVuuz09dIbN26td9z7nT52vUf/OAH/X6rV7+C6Tl9+vSCp8RfXHA7fafQxo0bjx492gaxNNKT1+mJXn71q1/1NV/45JNPOn0O4Gc/+9n09HQbtzKC6enyQYq//e1vbVBvpqamdu7c2RaebXFv1bMg6cn797//3emt3E2bNh05cqSNu5WK1J49e9qS8+zfv7+NWzHB9JSXXnqp3eVs/f5B09///vdOn4D/zW9+M2c7YdGkJ6/Waj2n27N7ngceeODs2bNtaFddvvFuFY4xl2x6Tpw4sXnz5navN9nQz7nxP/vss+9///ttydmW+GEU5pCegdBlolRqY+j+qcX6f/nrX//aqTul388xLU42PfUL1q/Z7nW2WjO1L3PL+oyNjXX61sCyOuvw9iE9A6FW7L59+9pzfCFDQ0Ovvvrq/IlDLTg6OvrMM890+uhWqZfr48ePtwVWUjY9pX7NBXd8yh133LF3795Op1iupgwPD3f68G1Z+olHmEN6BsX4+PhDDz3Unukd1Kv3I4888vx//fznP//2t7/dftZZRW3O/+4KiafnlgWvFVgrbWRkpOaw9ahqnb/77ru//OUvu+xylr6mbPRIegbIoUOHukyaFud2+zaF+mU7fQH0olXlTbWWnfQMkFq9Bw8e7H7Kwb48/PDDPR6iXk/qV17Gr8TxPVwrRHoGS63h1157bVn2ferF//z58+12bzM1k+pyvtQe1TzrhRdecEbUFSI9g+jo0aML/m1uj4aGhg4cOHCbbzP167/44ouL3oX81re+1cubYiya9Ayo2smvLaci0jaF3tSWtmfPnnrNb7dy2xsdHZ3/4bju7rzzzj/84Q8mWStNegba5OTk8PDwI4880n0KVsWp+cVf/vKXS5cutSW5ycwpAe655562vhZSa/ipp54aGRlZ6XM5MkN61oZa8xcvXjx27FhtGzc7fPjwxMTEMn7H8fo2PT09Njb29ttvt9X3FeswQnqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAAOkBAqQHCJAeIEB6gADpAQKkBwiQHiBAeoAA6QECpAcIkB4gQHqAgEWk59r58+drsTkLAPSo6lENqZJUT3pNz7Vr1y5fvlyL1b/tWoB+3GhI9aSP9Fy5MnXy5MnR0dPtWoB+VD2qIVWSPtJz/fr16enp8fHxita5c+faDwB6U92oelRDqiTVk57SU/6743PlzJmxWr7qVXtNcxYGmKMqUa2oYlQ3qh7VkPm7PKVbeipUV69enZycPHv23Icfflg35OLi4tLLpYpR3ah6VEPm7/KUjukpN+pT3aqMXbhw4bPPPvv0K2NjLi4uLrMuM6oS1YoqRnWjU3dKt/SUmfrU/lLN1q5cmaqGlS8AFjKTiGpFFaO60ak75RbpKbXkjQCVq1frArCgmU606JTWkXlunR6AZSc9QID0AAHSA6y6L7/8f2P1b0woSRpfAAAAAElFTkSuQmCC"

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/方格紙產生器.ff5aea8.png";

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/摸石頭.6c462b0.png";

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/教材列表.2d2c95a.png";

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/湊12.00703c4.png";

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Quiz_vue__ = __webpack_require__(294);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7491b27e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Quiz_vue__ = __webpack_require__(637);
function injectStyle (ssrContext) {
  __webpack_require__(636)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7491b27e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Quiz_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7491b27e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Quiz_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 636:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[(_vm.myQ)?_c('div',[_c('h1',{staticClass:"ui header"}),_c('h4',{staticClass:"sub header"},[_vm._v(_vm._s(_vm.myQ.c)+"(等級"+_vm._s(_vm.myQ.l)+")")]),_vm._v("            "+_vm._s(_vm.myQ.q)),_c('div',{staticClass:"ui buttons"},_vm._l((_vm.myQ.as),function(a){return _c('a',{staticClass:"ui huge button",class:_vm.myA == a ? 'green' : 'gray',on:{"click":function($event){_vm.myA = a; _vm.check(a, _vm.myQ.t)}}},[_vm._v(_vm._s(a))])}))]):_vm._e(),(_vm.win)?_c('h1',[_vm._v("你答對了！")]):_vm._e(),(_vm.wrong)?_c('h1',[_vm._v("不對喔，請再加油！")]):_vm._e(),_c('hr'),_c('div',[_c('div',{staticClass:"ui buttons"},[(_vm.myQ)?_c('a',{staticClass:"ui teal huge button",on:{"click":function($event){_vm.resetO()}}},[_vm._v("同級測驗")]):_vm._e(),(_vm.myQ && _vm.myLev < 3)?_c('a',{staticClass:"ui orange huge button",on:{"click":function($event){_vm.levup()}}},[_vm._v("升級測驗")]):_vm._e()])]),_c('hr'),_c('div',[_c('h3',[_vm._v("選擇單元")]),_c('div',{staticClass:"ui buttons"},[_vm._l((_vm.myCs),function(c){return _c('a',{staticClass:"ui huge button",class:_vm.myC == c ? 'green' : 'gray',on:{"click":function($event){_vm.setC(c)}}},[_vm._v(_vm._s(c))])}),_c('a',{staticClass:"ui huge button",on:{"click":function($event){_vm.reset()}}},[_vm._v("隨機")])],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Chat_vue__ = __webpack_require__(295);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_741cfb2c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Chat_vue__ = __webpack_require__(640);
function injectStyle (ssrContext) {
  __webpack_require__(639)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-741cfb2c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Chat_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_741cfb2c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Chat_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 639:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chats"},[_c('sui-header',{attrs:{"size":"large"}},[_vm._v(_vm._s(_vm.msg))]),_c('div',{staticClass:"ui left aligned segment container"},[_c('div',{staticClass:"ui comments"},[_c('h3',{staticClass:"ui dividing header"},[_vm._v("歡迎留言")]),_vm._l((_vm.chats),function(c){return _c('div',{key:c.time,staticClass:"comment"},[_vm._m(0,true),_c('div',{staticClass:"content"},[_c('a',{staticClass:"author",attrs:{"href":'mailto:' + c.email,"target":"_blank"}},[_vm._v("  "+_vm._s(c.n)+" 說：")]),_c('div',{staticClass:"text"},[_vm._v(_vm._s(c.t)),_c('div',{staticClass:"metadata"},[_c('span',{staticClass:"date"},[_vm._v(_vm._s(_vm.parseTime(c.time)))])])])])])})],2),_c('div',{staticClass:"ui form"},[_c('div',{staticClass:"two fields"},[_c('div',{staticClass:"required field"},[_c('label',[_vm._v("您的大名:")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.myName),expression:"myName"}],attrs:{"type":"text"},domProps:{"value":(_vm.myName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.myName=$event.target.value}}})]),_c('div',{staticClass:"required field"},[_c('label',[_vm._v("Email:")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.myEmail),expression:"myEmail"}],attrs:{"type":"email"},domProps:{"value":(_vm.myEmail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.myEmail=$event.target.value}}})]),_c('div',{staticClass:"required field"},[_c('label',[_vm._v("請留言:")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.myText),expression:"myText"}],attrs:{"type":"text","placeholder":"您想說什麼？"},domProps:{"value":(_vm.myText)},on:{"input":function($event){if($event.target.composing){ return; }_vm.myText=$event.target.value}}})])]),_c('div',{staticClass:"ui submit button",on:{"click":function($event){_vm.submit(_vm.myName, _vm.myEmail, _vm.myText)}}},[_vm._v("留言")])]),_c('br'),_c('br')])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"avatar"},[_c('img',{attrs:{"src":__webpack_require__(272)}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_New_vue__ = __webpack_require__(296);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2e32ad6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_New_vue__ = __webpack_require__(643);
function injectStyle (ssrContext) {
  __webpack_require__(642)
}
var normalizeComponent = __webpack_require__(20)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_New_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2e32ad6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_New_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 642:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',{staticClass:"ui header"},[_vm._v("歡迎")]),_c('div',{staticClass:"ui divider"}),_c('div',{staticClass:"ui segment container center aligned"},[_c('div',{staticClass:"ui button group"},[_c('router-link',{staticClass:"ui huge green button",attrs:{"to":"/hello"}},[_c('i',{staticClass:"search icon"}),_vm._v("查詢教材")]),_c('router-link',{staticClass:"ui huge orange button",attrs:{"to":"/faq"}},[_c('i',{staticClass:"question icon"}),_vm._v("常見問題")])],1),_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui button group"},[_c('a',{staticClass:"ui huge purple button",attrs:{"href":"https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=drive_web&ouid=109123650148645242011","target":"_blank"}},[_c('i',{staticClass:"user icon"}),_vm._v("小學數學")]),_c('a',{staticClass:"ui huge teal button",attrs:{"href":"https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit","target":"_blank"}},[_c('i',{staticClass:"users icon"}),_vm._v("國中數學")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[360]);
//# sourceMappingURL=app.aa470b51c89afe46de1b.js.map