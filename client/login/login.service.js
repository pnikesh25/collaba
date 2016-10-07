app.factory('loginService' , function($http , $window ,$location){

    return {
      loginUser: function(user) {
        return $http.post("/loginAuthenticate" , user)
        .success(function(data) {
          console.log("Login successful");
          console.log("Token : "+data);
          if(data != undefined) {
            //console.log("Token "+data);
            localStorage.setItem('token',data);
          }
          else {
            console.error("Invalid User Credentials");
          }

        })
        .error(function(data){
            $location.path('/login');
            //# not required here
        });
      }
    }

})
