app.factory('AuthService' , function($http , $window ) {

    return {
      authUser : function(){
        var token = localStorage.getItem('token');
        var header = {'Authorization' : token};
        return $http.post('/' , null , {headers:header})
        .success(function(data) {
          console.log("Authorization success");
        })
        .error(function(data){
          $window.location.href = '#/login';
        });
      }
    }

})
