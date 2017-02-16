(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    
    function WidgetService() {
        var count = 1000;
        var widgets = [
            { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            // { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            // { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];
        var api = {
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "createWidget": createWidget,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };
        return api;
        
        function deleteWidget(widgetId) {
            for(w in widgets){
                if (widgets[w]._id == widgetId) {
                    widgets.splice(w,1);
                    return true;
                }
            }
            return false;
        }
        
        function updateWidget(widgetId, widget) {
            //console.log(widget);
            for(w in widgets){
                if (widgets[w]._id == widgetId) {
                    //console.log(widget.width);
                    widgets[w].name = widget.name;
                    widgets[w].size = widget.size;
                    widgets[w].text = widget.text;
                    if (widget.width)
                        widgets[w].width = widget.width+"%";
                    widgets[w].url = widget.url;
                    //console.log(widget);
                    return angular.copy(widgets[w]);
                }
            }
            return null;
        }

        function findWidgetById(wgid) {
            for(var w in widgets){
                if(widgets[w]._id == wgid)
                    return angular.copy(widgets[w]);
            }
            return null;
        }

        function findWidgetsByPageId(pageId) {
            var wdgs = [];
            for(w in widgets){
                if (widgets[w].pageId == pageId)
                    wdgs.push(widgets[w]);
            }
            return wdgs;
        }

        function createWidget(pageId, widget) {
            ++count;
            widget._id = count.toString();
            widget.pageId = pageId;
            widgets.push(widget);
            return widget;
        }


    }
})();