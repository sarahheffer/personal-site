define([
    "app",
    "marionette",
    "header_view",
    "main_view",
    "footer_view"
], function (
    App,
    Marionette,
    HeaderView,
    MainContentView,
    FooterView
) {
    return Marionette.Controller.extend({
        hello: function() {
            var helloModel = new Backbone.Model({name: "Sarah"});

            var headerView = new HeaderView({
                model: helloModel
            });
            var mainView = new MainContentView();
            var footerView = new FooterView();

            App.headerRegion.show(headerView);
            App.mainRegion.show(mainView);
            App.footerRegion.show(footerView);
        }
    });
});
