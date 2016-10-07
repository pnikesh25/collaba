app.controller ('RegisterController' , function($scope , registerService){
  $scope.register = {};
  $scope.register = function() {
    //console.log($scope.user);
    registerService.registerUser($scope.register);
  }
});
