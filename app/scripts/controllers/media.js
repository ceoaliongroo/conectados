'use strict';

/**
 * @ngdoc function
 * @name conectadosApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the conectadosApp
 */
angular.module('conectadosApp')
<<<<<<< HEAD
  .controller('MediaCtrl', function ($scope) {
    console.log('MediaCtrl');
=======
  .controller('MediaCtrl', function ($scope, $anchorScroll, $location) {
    /**
     * Go to the section in the content
     *
     * @param section
     *  The name of the section.
     */
    $scope.goToSection = function(section) {
      $location.hash(section);
      $anchorScroll();
    };
>>>>>>> 4d834d7b0c34ec6e372b12e4fab63473467e5383
  });
