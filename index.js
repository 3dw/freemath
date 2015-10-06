

function showImg() {
  $(".fm_logo").attr("src", "images/math-logo-small.png").css({height: "25px", width: "25px"});
  $(".wiki").attr("src", "images/wikipedia-logo.png").css({height: "25px", width: "25px"});
  $(".google").attr("src", "images/google_box.png").css({height: "20px", width: "20px"});
  $(".3du").attr("src", "images/3du-logo.png").css({height: "20px", width: "20px"}); 
}


$(document).ready(function(){
  showImg();
}); 



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
  $scope.showImg = showImg;

}

angular.module('App.filters', [])
/*  .filter('mathUnitsFilter', function () {
    return function (Units, searchM, searchK,logic) {
        searchK = ""+searchK;

        if (!angular.isUndefined(Units)  ) {  
              var tempUnits = {and:[], or:[]};
              
              tempUnits.or = Units.filter(
                function (unit) {
                  return (
                    (unit.g <= searchM && searchM <= unit.G) 
                        || 
                        (searchK.length && unit.n.indexOf(searchK) > -1)

                      )
              });

              tempUnits.and = Units.filter(
                function (unit) {
                  return (
                    (!searchM || (unit.g <= searchM && searchM <= unit.G)) 
                        && 
                        (searchK.length && unit.n.indexOf(searchK) > -1)
                      )
              });


              return tempUnits[logic];

         //   return tempUnits.length > 0 ? tempUnits : Units;
        } else {
            console.log(Units[0].g);
            console.log(searchM);
            return Units;
        }
    };
}) */
.filter('mathUnitsFilter', function () {
    return function(us,s){
      console.log(us);
      console.log(s);
      var searchK = s || '';
      var searchM = parseInt(s);
      return us.filter(
                function (o) {
                  return (
                    (o.g <= searchM && searchM <= o.G) 
                        || 
                        (searchK.length && o.n.indexOf(searchK) > -1)
                        || !searchM
                      )
              });
    }
})
.directive('focus',

function($timeout) {

return {

scope : {

 trigger : '@focus'

 },

 link : function(scope, element) {
 
 scope.$watch('trigger', function(value) {
  
  if (value === "true") {
   
   $timeout(function() {
   
   element[0].focus();

   });
  }
 });
   }

  };

 }

);