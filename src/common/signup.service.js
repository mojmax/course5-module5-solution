(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);



function SignupService() {
  var service = this;
  service.signup;
  service.saveSignup = function (signup) {
    service.signup = signup;
  };
  service.getSignup = function () {
    return service.signup;
  } 

}



})();
