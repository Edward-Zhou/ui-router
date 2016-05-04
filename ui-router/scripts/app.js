/// <reference path="angular-ui-router.js" />
var app = angular.module('_app_', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '',
        views:{
            '':{templateUrl:'partials/index.body.html'}
        }
    })
    .state('index.red', {
        url: '/red',
        templateUrl:'partials/index.body.red.html'
    })
    .state('index.green', {
        url: '/green',
        templateUrl:'partials/index.body.green.html'
    })
    .state('index.yellow', {
        url: '/yellow',
        templateUrl:'partials/index.body.yellow.html'
    })

})
.controller('navController', function ($scope, $state) {
    $scope.navToGreen = function () { $state.transitionTo('index.green'); };
    $scope.setUrl = function (p) { location.href = "http://localhost:18752/index-ui-router.html#/"+p };

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
