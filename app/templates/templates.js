angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/templates', {
      templateUrl: 'templates/templates.html',
      controller: 'TemplatesCtrl'
    })
    .when('/templates/:templateId', {
      templateUrl: 'templates/template-detail.html',
      controller: 'TemplateDetailCtrl'
    });
}])

.controller('TemplatesCtrl', ['$scope', function ($scope) {
    $scope.imgColors = ['blue', 'gray', 'green', 'orange', 'purple', 'red'];

}])
  .controller('TemplateDetailCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.color = $routeParams.templateId;
}]);