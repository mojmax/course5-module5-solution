(function () {
  'use strict';

  angular.module('public')
  .controller('MyInfoController',MyInfoController);

  MyInfoController.$inject = ['SignupService','ApiPath'];
  function MyInfoController(SignupService,ApiPath) {
    var $ctrl = this;

    $ctrl.signup = SignupService.getSignup();
    $ctrl.basePath =  ApiPath;

  }

})();
