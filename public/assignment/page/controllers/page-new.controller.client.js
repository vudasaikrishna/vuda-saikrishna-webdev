(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);
    
    function WebsiteNewController($routeParams, WebsiteService) {
        // console.log("New Controller");
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var websites = WebsiteService.findAllWebsites(userId);
        var vm = this;
        vm.websites = websites;
        vm.userId = userId;
        //vm.website = WebsiteService.findWebsiteById(websiteId);

        // event handlers
        vm.addWebsite = addWebsite;

        function init() {
        }
        init();

        // add method
        function addWebsite(website) {
            console.log('website added');
        }
    }
})();
