/**
 * Options namespace.
 * @namespace
 */
var options = {};

/**
 * Angular controller for the options page.
 * @param {!angular.Scope} $scope
 */
options.OptionsCtrl = function($scope) {

  chrome.storage.sync.get(preferences, function(preferences) {
    $scope.$apply(function() {
      $scope.preferences = preferences;
    });
  });

  $scope.save = function() {
    chrome.storage.sync.set($scope.preferences, function() {
      window.close();
    });
  };
};


var optionsApp = angular.module('optionsApp', []);
optionsApp.controller('OptionsCtrl', options.OptionsCtrl);
