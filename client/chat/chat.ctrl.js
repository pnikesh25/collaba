app.controller('ChatController' , function($scope , AuthService){
    AuthService.authUser();
})
