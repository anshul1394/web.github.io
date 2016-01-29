var app = angular.module('StarterApp', ['ngMaterial','ngAnimate','ngTouch']);
app.config(function($mdThemingProvider) {
  })

app.controller('AppCtrl', ['$scope', '$interval', function($scope, $interval){
   var self = this, j= 0, counter = 0;
    self.mode = 'query';
    self.activated = true;
    self.determinateValue = 10;
   self.modes = [ ];
   self.toggleActivation = function() {
        if ( !self.activated ) self.modes = [ ];
        if (  self.activated ) {
          j = counter = 0;
          self.determinateValue = 10;
        }
    };
    $interval(function() {
      self.determinateValue += 1;
      if (self.determinateValue > 100) self.determinateValue =100;
    });
      
        // Incrementally start animation the five (5) Indeterminate,
        // themed progress circular bars
     /*   if ( (j < 2) && !self.modes[j] && self.activated ) {
          self.modes[j] = (j==0) ? 'buffer' : 'query';
        }
        if ( counter++ % 4 == 0 ) j++;
        // Show the indicator in the "Used within Containers" after 200ms delay
        if ( j == 2 ) self.contained = "indeterminate";
    }, 100, 0, true);
    $interval(function() {
      self.mode = (self.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);*/
  
  $scope.slides = [
    {
    image:'http://lorempixel.com/400/200/'
    },
    {
 image:'http://lorempixel.com/400/200/foo'
    },
    {
 image:'http://lorempixel.com/400/200/sports'
    },
    {
 image:'http://lorempixel.com/400/200/people'
    }
  ];


  $scope.direction = 'left';
  $scope.currentIndex=0;
  $scope.setCurrentSlideIndex=function(index){
    $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
    $scope.currentIndex=index;
  };
  $scope.isCurrentSlideIndex=function(index){
    return $scope.currentIndex===index;
  };
  $scope.prevSlide=function(){
      $scope.direction = 'left';
    $scope.currentIndex=($scope.currentIndex<$scope.slides.length-1)?++$scope.currentIndex:0;
  };
  $scope.nextSlide=function(){
    $scope.direction = 'right';
    $scope.currentIndex=($scope.currentIndex>0)?--$scope.currentIndex:$scope.slides.length-1;
  };
  }]);
  
app.animation('.slide-animation',function(){
  return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });
