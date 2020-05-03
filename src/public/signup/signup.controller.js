(function () {
  "use strict";

angular.module('public')
.controller('SignupController',SignupController);


SignupController.$inject = ['MenuService','SignupService'];
function SignupController(MenuService,SignupService) {
  var $ctrl = this;
  $ctrl.signup = {};
  $ctrl.signup.alert=false;
  $ctrl.signup.success=false;
  $ctrl.signup.menu_item=undefined;
  $ctrl.submit = function () {

      var promise = MenuService.getMenuItem($ctrl.signup.user.menuNumber);
      promise.then(function (response) {
        $ctrl.signup.alert=false;
        $ctrl.signup.menu_item =  response.data;
        $ctrl.signup.success= "Your information has been saved";
        SignupService.saveSignup($ctrl.signup);
      })
      .catch(function (error) {
        $ctrl.signup.success=false;
        $ctrl.signup.menu_item = false;
        $ctrl.signup.alert = "No such menu number exists";

      })

  }
}

})();
