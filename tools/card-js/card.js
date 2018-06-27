var app = angular.module('mathApp', ['ngStorage']);
app.controller('Ctrl', ['$scope', '$localStorage', 
	function($scope, $localStorage) {
	angular.extend($scope, {
		Math: Math,
		welcome: '按Enter或點擊卡片開始',
		n1: 3,
		n2: 8,
		flip: false,
		ops: [
			{	s: '+',		t: ' + ' },
			{	s: '-',		t: ' - '	},
			{	s: '*',		t: ' × '},
//		  {	s: '/',		t: ' ÷ '},
		],
		workType: 'include', // ['include', 'divide']
		remType: 'get', // ['get', 'throw', 'fill', 'cut']
		reps: [
			{
				s: '',		t: '阿拉伯數字'
			},
			{
				s: '.',		t: '點點'
			},
			{
				s: '$',		t: '錢幣'
			},
		],
		modes: [
			'閃卡模式', '挑戰模式', // '挫折模式'
		],
		coinTypes: [
			'c1000s', 
			'c500s',
			'c100s',
			'c50s',
			'c10s',
			'c5s',
			'c1s'
		]
	})

	$scope.defaultC = {
		rememberMe: true,
		minN1: 0,
		maxN1: 30,
		minN2: 0,
		maxN2: 15,
		op: $scope.ops[0],
		rep: $scope.reps[0],
		mode: '閃卡模式'
	}

	$scope.c = angular.copy($scope.defaultC);
	angular.extend($scope, {
		storage: $localStorage.$default(
      {
      	mathcard: {
      		c: $scope.c
      	}
      })
		}
	);

  if ($scope.storage.mathcard.c.rememberMe) {
  	$scope.c = angular.copy($scope.storage.mathcard.c);
//  	console.log($scope.c)
  } else {
  	$scope.c.rememberMe = angular.copy($scope.storage.mathcard.c.rememberMe);
  }

	$scope.c.op = $scope.ops.filter(function(o){return o.t == $scope.c.op.t})[0];
	$scope.c.rep = $scope.reps.filter(function(o){return o.t == $scope.c.rep.t})[0];
	$scope.c.mode = $scope.modes.filter(function(t){return t == $scope.c.mode})[0];


  $scope.$watch('c', function(newVal, oldVal){
  	$scope.storage.mathcard.c = angular.copy($scope.c);
 // 	console.log($scope.storage.mathcard);
  }, true);


	angular.extend($scope, {
		ans: function() {
			return this.$eval(this.n1 + this.c.op.s + this.n2);
		},
		nextQ: function(){
		 	this.n1 = this.randNum(this.c.minN1, this.c.maxN1);
		 	this.n2 = this.randNum(this.c.minN2, this.c.maxN2);
		},
		flipCard: function() {
			this.welcome = '';
			console.log('閃卡模式?');
			console.log(this.c.mode);

			if (this.c.mode == '閃卡模式') {
			 	this.flip = !this.flip;
			 	if (!this.flip) this.nextQ();
			 	console.log('閃卡模式');
			}
			if (this.c.mode !== '閃卡模式') {
				if (!this.flip) {
					var userAns = window.prompt("請作答");
					if (userAns == this.ans()) {
						window.alert("答對了，你真強!");
						this.flip = true;
					} else {
						window.alert("沒關係，再接再勵");
					 	return;
					}
				} else {
					this.flip = false;
					this.nextQ();
				}
			}
		},
		randNum: function(min, max){
			return Math.floor(min + Math.random() * (max-min))
		},
		onKeydown: function(e) {
			if (e.keyCode == 13) {
				this.flipCard();
			}
		},
		numToDots: function(n){
			var ans = [];
			for (var i = 1; i <= Math.abs(n); i++) { ans.push(i * Math.sign(n))  }
			return ans;
		},
		numToCoins: function(n){
			var ans = [];
			n = Math.abs(n);

			var r;
			var c1000 = Math.floor(n / 1000); r = n - c1000 * 1000;
			var c500 = Math.floor(r / 500); r = r - c500 * 500;
			var c100 = Math.floor(r / 100); r = r - c100 * 100;
			var c50 = Math.floor(r / 50); r = r - c50 * 50;
			var c10 = Math.floor(r / 10); r = r - c10 * 10;
			var c5 = Math.floor(r / 5); r = r - c5 * 5;
			var c1 = r;

			function toList(c, $$) {
				var ans = [];
				for (var i = 1; i <= c; i++) { ans.push($$)  }	
				return ans;			
			}

			return {
				c1000s: toList(c1000, 1000),
				c500s: toList(c500, 500),
				c100s: toList(c100, 100),
				c50s: toList(c50, 50),
				c10s: toList(c10, 10),
				c5s: toList(c5, 5),
				c1s: toList(c1, 1),
			}
		},
		countQuotRem: function(f, s){
			var q = Math.floor(f / s);
			var r = f % s;
			var ans = [q,r];
			return ans;
		}
	});
}]);

// filters
app.filter('renderNagtive', function(){
	return function(n){
		return n < 0 ? '('+ n +')': '' + n;
	}
})
app.filter('renderQuotient', function(){
	return function(n){
		var s = (''+n);
		if ((s.indexOf('.') > -1 && s.length) > 5) {
				return s.slice(0,5) + '...';
		} else { return s}
	}
})
app.filter('renderInf', function(){
	return function(s){
		s = s == 'Infinity' ? '∞' : s;
		s = s == 'NaN' ? '𝕌' : s;
		return s;
	}
})