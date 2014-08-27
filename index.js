function showImg() {
  $(".fm_logo").attr("src", "images/math-logo-small.png").css({height: "25px", width: "25px"});
  $(".wiki").attr("src", "images/wikipedia-logo.png").css({height: "25px", width: "25px"});
  $(".google").attr("src", "images/google_box.png").css({height: "20px", width: "20px"});
  $(".3du").attr("src", "images/3du-logo.png").css({height: "20px", width: "20px"}); 

}


$(document).ready(function(){
  showImg();
});


angular.module('fmIndexApp', ['App.filters']);


function Ctrl($scope) {  
  $scope.Units = Units.sort(function(a,b){return a.g - b.g });
  $scope.Math = window.Math;
  $scope.showImg = showImg;

}

angular.module('App.filters', []).filter('mathUnitsFilter', function () {
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
}).directive('focus',

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