requirejs.config({
    prefix: "/static/js/",
    paths: {
        'jquery': 'external/jquery-2.1.4',
        'underscore': 'external/underscore',
        'backbone': 'external/backbone',
        'marionette': 'external/backbone.marionette'
    },
    shim: {
        'backbone': ['jquery', 'underscore'],
        'marionette': ['backbone']
    }
});

require([
    'backbone',
    'marionette',
    'app',
    'controller'
],
function(
    Backbone,
    Marionette,
    App,
    Controller
) {
    var Router = Marionette.AppRouter.extend({
        controller: new Controller(),
        appRoutes: {
            "": "hello"
        }
    });
    App.appRouter = new Router({
    });

    App.start();
});
