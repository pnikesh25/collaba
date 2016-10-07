var app = angular.module('ChatApp', ['ngRoute','ngMaterial']);

app.config(function($routeProvider , $locationProvider) {
    $locationProvider.hashPrefix('!');

        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'login/login.html',
                controller  : 'LoginController'
                //controllerAs : 'login'
            })
            // route for the login page
            .when('/login', {
                templateUrl : 'login/login.html',
                controller  : 'LoginController'
            })
            // route for the register page
            .when('/register', {
                templateUrl : 'register/register.html',
                controller  : 'RegisterController'
            })
            .when('/chat', {
			          templateUrl: 'chat/chat.template.html',
			          controller:  'ChatController',
			      })
            .otherwise('/login');
        });
