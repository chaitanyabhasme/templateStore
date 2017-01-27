'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStore', [
  'ngRoute',
  'templateStore.view1',
  'templateStore.view2',
  'templateStore.templates'
])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
      redirectTo: '/templates'
    });
}])
  .filter('capitalize', function () {
    return function (input, scope) {
      if (input != null)
        input = input.toLowerCase();
      return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
  });