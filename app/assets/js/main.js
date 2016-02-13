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

        //MODAL FUNCTIONALITY
        $scope.capitalOne = [
            {
                index: 0,
                title: 'Capital One Home Loans',
                image: 'app/assets/images/mortgageHome.png'
            },
            {
                index: 1,
                title: 'Capital One Calculator',
                image: 'app/assets/images/mortgage-calculator.png'
            },
            {
                index: 2,
                title: 'Capital One Other',
                image: 'app/assets/images/backpackHiker.png'
            }
        ];

        $scope.sideProjects = [
            {
                index: 0,
                title: 'Capital One Home Loans',
                image: 'app/assets/images/mortgage-calculator.png'
            },
            {
                index: 1,
                title: 'Capital One Calculator',
                image: 'app/assets/images/mortgage-calculator.png'
            },
            {
                index: 2,
                title: 'Capital One Other',
                image: 'app/assets/images/mortgage-calculator.png'
            }
        ];

        $scope.invokeModal = function(type) {
            $scope.gallery = $scope[type];
            $scope.currentGallery = $scope[type][0];
        };

        $scope.goForward = function(index) {
            if (index !== $scope.gallery.length - 1) {
                $scope.currentGallery = $scope.gallery[index + 1];
            }
            else {
                $scope.currentGallery = $scope.gallery[0];
            }
        };
        $scope.goBack = function(index) {
            if (index !== 0) {
                $scope.currentGallery = $scope.gallery[index - 1];
            }
            else {
                $scope.currentGallery = $scope.gallery[$scope.gallery.length - 1];
            }
        };

    }]);
})();