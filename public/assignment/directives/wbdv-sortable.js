(function () {
    angular
        .module('wbdvDirectives', [])
        .directive('sortable', sortableDir);

    function sortableDir() {
        //console.log("Sortable Dir");
        function linkFunc(scope, element) {
            element
                .sortable({
                    axis: 'y',
                    handle: ".glyphicon-align-justify"
                })
                .disableSelection();
        }
        return {
            link: linkFunc
        };
    }
})();
