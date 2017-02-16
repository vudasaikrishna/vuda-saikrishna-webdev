(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);
    
    function WebsiteNewController($routeParams, WebsiteService) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;

        function init() {
            var websites = WebsiteService.findWebsitesByUser(userId);

            vm.websites = websites;
            vm.userId = userId;
        }
        init();

        // event handlers
        vm.addWebsite = addWebsite;

        // add method
        function addWebsite(website) {
            //console.log(website);
            if (website == null || website.name == null){
                vm.error="Website Name required";
                return;
            }
            var site = WebsiteService.createWebsite(vm.userId, website);
            if (site) {
                vm.message = "Website Added Successfully";
                init();
            } else{
                vm.error = "Unable to add website";
            }
        }
    }
})();
