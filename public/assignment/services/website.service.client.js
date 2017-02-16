(function () {
    angular
        .module("WebAppMaker")
        .service("WebsiteService", WebsiteService);

    function WebsiteService() {
        count = 1000;
        var websites = [
            { "_id": "123", "name": "Facebook", update: new Date(),    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter", update: new Date(),     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo", update: new Date(),     "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", update: new Date(), "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers", update: new Date(),    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess", update: new Date(),       "developerId": "234", "description": "Lorem" }
        ];
        // TODO: complete website crud functions
        this.createWebsite = createWebsite;
        this.findWebsitesByUser = findWebsitesByUser;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;
        
        function deleteWebsite(websiteId) {
            for(var w in websites) {
                if(websiteId == websites[w]._id) {
                    websites.splice(w,1);
                    return true;
                }
            }
            return false;
        }
        
        function updateWebsite(websiteId, website) {
            for(var w in websites) {
                if(websiteId == websites[w]._id) {
                    websites[w].name = website.name;
                    websites[w].update = new Date();
                    websites[w].description = website.description;
                    return angular.copy(websites[w]);
                }
            }
            return null;
        }
        
        function createWebsite(userId, website) {
            ++count;
            website._id = count.toString();
            website.developerId = userId;
            website.update = new Date();
            websites.push(website);
            //console.log(website);
            return website;
        }

        function findWebsiteById(websiteId) {
            //console.log(websiteId);
            for(var w in websites) {
                if(websiteId == websites[w]._id) {
                    //console.log(websites[w]);
                    return angular.copy(websites[w]);
                }
            }
            return null;
        }

        function findWebsitesByUser(userId) {
            var sites = [];
            for(var w in websites) {
                if(userId == websites[w].developerId) {
                    sites.push(websites[w]);
                }
            }
            return sites;
        }
    }
})();