'use strict';

require('./index.less');

require('jquery');
require('angular');
require('availity-angular');

var app = require('./module');
var registration = require('./registration');

app.addModules([
  'availity',
  'availity.ui',
  'availity.ui.templates',
  'ui.router',
  'ng.shims.placeholder'
]);

app.controller('PageController', function($scope, AvModal, AV_GLOBALS) {

  var reg = {
    name: null,
    selectedState: null,
    date: null,
    states: AV_GLOBALS.REGIONS,
    onShow: function() {
      AvModal.create({
        scope: $scope,
        templateUrl: 'registration/templates/notification.html',
        show: true
      });

    }
  };

  reg.selectedState = reg.states[0];

  $scope.reg = reg;

});

app.config(function($stateProvider, $urlRouterProvider, avValProvider) {

  var defaultRules = {
    'name': {
      'required': {
        'message': 'Your name is required.'
      },
      'size': {
        'min': 2,
        'max': 10,
        'message': 'Your name must be between 2 and 10 characters.'
      }
    },
    'date': {
      'required': {
        'message': 'Date of service is required.'
      },
      'dateFormat': {
        'format': 'MM/DD/YYYY',
        'message': 'Format needs to be MM/DD/YYYY'
      }
    }
  };

  avValProvider.addRules({
    'default': defaultRules
  });

  $stateProvider
    .state('registration', {
      url: '/',
      template: registration.TEMPLATES.PAGE,
      controller: 'PageController'
    });

  $urlRouterProvider.otherwise('/');

});

module.exports = app;

