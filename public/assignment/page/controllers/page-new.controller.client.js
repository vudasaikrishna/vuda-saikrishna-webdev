(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);
    
    function PageNewController($routeParams, PageService) {
        // console.log("New Controller");
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var vm = this;

        // event handlers
        vm.addPage = addPage;

        function init() {
            vm.websiteId = websiteId;
            vm.userId = userId;

            vm.pages = PageService.findPageByWebsiteId(websiteId);
        }
        init();

        // add method
        function addPage(page) {
            if (page == null || page.name == null){
                vm.error = "Page Name cannot be empty";
                return;
            }
            var success = PageService.createPage(websiteId, page);
            if (success){
                vm.message = "Added Successfully";
                init();
            } else{
                vm.error = "Unable to add the page";
            }
        }
    }
})();
