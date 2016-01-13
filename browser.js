var document = require('global/document')
var h = require('hyperscript')
var angular = require('angular')

document.body.appendChild(
  h('div', { 'data-ui-view': '' })
)

angular.module('app',[
  require('angular-ui-router')
])
.config([
  '$urlRouterProvider',
  '$stateProvider',
  ($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('home', require('./src/components/home'))
  }
])

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app'])
})
