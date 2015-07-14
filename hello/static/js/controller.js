define([
    "app",
    "marionette",
    "hello_view"
], function (
    App,
    Marionette,
    HelloView
) {
    return Marionette.Controller.extend({
        hello: function() {
            var helloModel = new Backbone.Model({name: "Sarah"});

            var helloView = new HelloView({
                model: helloModel
            });

            App.main.show(helloView);
        }
    });
});
