



/**
 * the HTML5 autofocus property can be finicky when it comes to dynamically loaded
 * templates and such with AngularJS. Use this simple directive to
 * tame this beast once and for all.
 *
 * Usage:
 * <input type="text" autofocus>
 * 
 * License: MIT
 */
angular.module('utils.autofocus', [])
.directive('autofocus', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link : function($scope, $element) {
      $timeout(function() {
        $element[0].focus();
      });
    }
  }
}]);



angular.module('fmIndexApp', ['App.filters','utils.autofocus']);


function Ctrl($scope) {  
  $scope.Units = Units.sort(function(a,b){return a.g - b.g });
  $scope.Math = window.Math;
  $scope.searchM ='';
}

angular.module('App.filters', [])
  .filter('mathUnitsFilter', function () {
    return function(us,s){
//      console.log(us);
//      console.log(s);
      var searchK = ("" + s) || '';
      var searchM = parseInt(s);
      console.log(searchK);
      console.log(searchM);
      return us.filter(
                function (o) {
                  return (
                    (o.g <= searchM && searchM <= o.G) 
                        || 
                        (searchK.length && o.n.indexOf(searchK) > -1)
                          || !searchK
                      )
              });
    }
});