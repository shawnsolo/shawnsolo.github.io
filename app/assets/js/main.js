(function(){
    var app = angular.module('application', ['ui.bootstrap']);

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

        //MODAL FUNCTIONALITY
        $scope.capitalOne = [
            {
                index: 0,
                title: 'Capital One Home Loans',
                image: 'app/assets/images/c1Widget.png',
                url: 'https://www.capitalone.com/home-loans/mortgage'
            },
            {
                index: 1,
                title: 'Capital One Mortgage Calculator',
                image: 'app/assets/images/c1Calc.png',
                url: 'https://www.capitalone.com/home-loans/mortgage/calculator'
            },
            {
                index: 2,
                title: 'Capital One Rates',
                image: 'app/assets/images/c1Rates.png',
                url: 'https://www.capitalone.com/home-loans/mortgage/rates'
            },
            {
                index: 3,
                title: 'Capital One Custom Rate',
                image: 'app/assets/images/c1Crq.png',
                url: 'https://www.capitalone.com/home-equity/calculator/rates'
            }
        ];

        $scope.sideProjects = [
            {
                index: 0,
                title: 'Backpack Hiker Home Page',
                image: 'app/assets/images/backpack1.png'
            },
            {
                index: 1,
                title: 'Backpack Hiker Search',
                image: 'app/assets/images/backpack2.png'
            },
            {
                index: 2,
                title: 'JS Express Application',
                image: 'app/assets/images/express.png'
            },
            {
                index: 3,
                title: 'Pinquistion Start Up Portal',
                image: 'app/assets/images/pinquisition.png'
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
