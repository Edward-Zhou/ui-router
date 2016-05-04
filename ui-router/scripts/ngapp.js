/// <reference path="angular-ui-router.js" />
var app = angular.module('_app_', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/red', {
        templateUrl:'partials/index.body.red.html'
    })
    .when('/green', {
        templateUrl: 'partials/index.body.green.html'
    })
    .when('/yellow', {
        templateUrl: 'partials/index.body.yellow.html'
    })
})
    .controller('navController', function ($scope) {
    $scope.setUrl = function (p) { location.href = "http://localhost:18752/index-ng-router.html#/" + p };

});

//app.config(function ($stateProvider, $urlRouterProvider) {
//    $stateProvider.state('index', {
//        url: '',
//        views:{
//            '': { templateUrl: 'partials/index.html' },
//            '@index': { templateUrl: 'partials/index.body.html' }
//        }
        
//    })
//    .state('index.red', {
//        url: '/red',
//        templateUrl: 'partials/index.body.red.html'
//    })
//});
