app.factory('registerService' , function($http , $window){

    return {
      registerUser: function(register) {
        
        return $http.post("/registerAuthenticate" , register);
      }
    }

});
