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
			{
				s: '+',		t: ' + '
			},
			{
				s: '-',		t: ' - '
			},
			{
				s: '*',		t: ' × '
			},
			{
				s: '/',		t: ' ÷ '
			},
		],
		reps: [
			{
				s: '',		t: '阿拉伯數字'
			},
			{
				s: '.',		t: '點點'
			},
		]
	})

	$scope.defaultC = {
		rememberMe: true,
		minN1: 0,
		maxN1: 30,
		minN2: 0,
		maxN2: 15,
		op: $scope.ops[0],
		rep: $scope.reps[0]
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
  } else {
  	$scope.c.rememberMe = angular.copy($scope.storage.mathcard.c.rememberMe);
  }


  $scope.$watch('c', function(newVal, oldVal){
  	$scope.storage.mathcard.c = angular.copy($scope.c);
  	console.log($scope.storage.mathcard);
  }, true);


	angular.extend($scope, {
		ans: function() {
			return this.$eval(this.n1 + this.c.op.s + this.n2);
		},
		flipCard: function() {
			this.welcome = '';
		 	this.flip = !this.flip;
		 	if (!this.flip) {
			 	this.n1 = this.randNum(this.c.minN1, this.c.maxN1);
			 	this.n2 = this.randNum(this.c.minN2, this.c.maxN2);
			}
		},
		randNum: function(min, max){
			return Math.floor(min + Math.random() * max)
		},
		onKeydown: function(e) {
			if (e.keyCode == 13) {
				this.flipCard();
			}
		},
		numToDots: function(n){
			var ans = [];
			for (var i = 0; i < Math.abs(n); i++) {
				ans.push('.')
			}
			console.log(ans);
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