define([
    'backbone',
    'marionette'
],
function(
    Backbone,
    Marionette
) {
    var App = new Backbone.Marionette.Application();

    App.addInitializer(function() {
        Backbone.history.start();
    });

    App.addRegions({
        headerRegion: '#header-region',
        mainRegion: '#main-region',
        footerRegion: '#footer-region'
    });

    return App;
});
