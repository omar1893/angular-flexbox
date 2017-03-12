'use strict';

// Declare app level module which depends on views, and components
angular.module('App', ['ui.router'])

.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {


  /*
      IMPORTANTE:
      Aquí es donde se definen las rutas
      */

  $stateProvider

.state('view1', {
    url: '/view1',
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  })

  .state('view2', {
    url: '/view2',
    templateUrl: 'views/view2/view2.html',
    controller: 'View2Ctrl'
  })



  $urlRouterProvider.otherwise('/view1');

});