
var fmDocApp = angular.module('fmDocApp', []);
function Ctrl($scope) {
  $scope.ranges = ["小學數學學習地圖","國中數學學習地圖","高中數學學習地圖"];
  $scope.range = "小學數學學習地圖";
  $scope.color = "#4bf";
  $scope.colors = ["#4bf","#000","#880","#0f0"];
}

fmDocApp.directive("drawing", function(){
  return {
    restrict: "A",
    link: function(scope, element){
      var ctx = element[0].getContext('2d');  
 
      ctx.lineWidth=1;    
      reset();   

      // variable that decides if something should be drawn on mousemove
      var drawing = false;     
      // the last coordinates before the current move
      var lastX;
      var lastY;

      element.bind('dblclick', function(event){
        reset();
      });

      element.bind('mousedown', function(event){
        lastX = event.offsetX;
        lastY = event.offsetY;        
        // begins new line
        ctx.beginPath();        
        drawing = true;
      });

      element.bind('mousemove', function(event){
        if(drawing){
          // get current mouse position
          currentX = event.offsetX;
          currentY = event.offsetY;

          draw(lastX, lastY, currentX, currentY);

          // set current coordinates to last one
          lastX = currentX;
          lastY = currentY;
        }        
      });
      element.bind('mouseup', function(event){
        // stop drawing
        drawing = false;
      });        
      // canvas reset
      function reset(){
          element[0].width = window.innerWidth / 2;  
      }         
      function draw(lX, lY, cX, cY){
        // line from
        ctx.moveTo(lX,lY);
        // to
        ctx.lineTo(cX,cY);
        // color
        ctx.strokeStyle = scope.color;
        // draw it
        ctx.stroke();
      }
    }
  };
});