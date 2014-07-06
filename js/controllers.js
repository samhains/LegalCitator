var LegalCtrl = angular.module('legal.controllers', [])

LegalCtrl.controller('BiblioController',['$scope',function($scope){
    console.log('BiblioController');
    $scope.data = {
    };

    $scope.data.author;
    $scope.data.journal;
    $scope.data.name;
    $scope.data.year;

    $scope.setData = function(author){
        $scope.data.author = author;
    }


}])
