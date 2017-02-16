(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($location, UserService) {
        var vm = this;

        // event handlers
        vm.register = register;

        function init() {
        }
        init();

        function register(user) {
            if(user==null) {
                vm.error = "Username required";
                return;
            }
            if(user.password == null){
                vm.error = "Password cannot be empty";
                return;
            }
            if(user.password != user.password2){
                vm.error = "Passwords do not match";
                return;
            }

            var u = UserService
                .findUserByUsername(user.username);
            if(u) {
                vm.error = "Username already taken";

            } else {
                u = UserService.createUser(user);
                if (u){
                    vm.message = "Registered Successfully";
                    $location.url("/user/"+user._id);
                } else{
                    vm.error = "Unable to Register";
                }

            }
        }
    }
})();