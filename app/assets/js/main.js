(function(){
    var app = angular.module('application', ['ui.bootstrap', 'bootstrapLightbox']);

    app.controller('mainController', ['$scope', '$interval', 'Lightbox', function($scope, $interval, Lightbox) {
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

        $scope.images = [
            {
                'url': 'app/assets/images/mortgageHome.png',
                'thumbUrl': 'app/assets/images/angular.png'
            },
            {
                'url': 'app/assets/images/mortgage-calculator.png',
                'thumbUrl': 'app/assets/images/angular.png',
                'caption': 'hey!'
            }
        ];

        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.images, index);
        };

    }]);
})();