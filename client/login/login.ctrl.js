/*
angular.module('ChatApp')
      .controller ('LoginController' , function() {

      //console.log("Login Controller");
      var login = this;

      console.log(login);
      var loginObj = JSON.stringify(login);
      loginObj = JSON.parse(loginObj);
      //console.log("Username : " + login1.username);
      //console.log("Password : " + login1.password);
      login.submit = submit;
    });

    function submit() {
      console.log("Login Controller : Submit")
      //console.log(login);

      console.log("Login Object : " + login);
    }
*/


app.controller('LoginController' , function($scope, loginService){

  $scope.user = {};
  $scope.login = function() {
    //console.log($scope.user);
    loginService.loginUser($scope.user);
  }

});
