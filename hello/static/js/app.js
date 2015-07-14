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
        main: '#main',
    });

    return App;
});
