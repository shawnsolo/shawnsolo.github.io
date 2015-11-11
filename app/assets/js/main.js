(function(){
    var app = angular.module('application', []);

    app.controller('mainController', ['$scope', '$interval', function($scope, $interval) {
        $scope.image1 = 'assets/images/blueLake.JPG';
        var bgColors = ['lightcoral','lightgoldenrodyellow','lightgreen', 'lightgrey', 'lightpink', 'lightsalmon',
        'lightseagreen', 'lightskyblue'];
        $scope.colorCount = 0;

        $scope.$watch('colorCount', function() {
           $scope.bgColor = bgColors[$scope.colorCount];
        });

        $interval(function () {
            if($scope.colorCount < bgColors.length) {
                $scope.colorCount = $scope.colorCount + 1;
            }
            else {
                $scope.colorCount = 0;
            }
        }, 10000);

    }]);
})();