define([
    "marionette"
], function(
    Marionette
){
    return Marionette.ItemView.extend({
        template: '#main-template',
        templateHelpers: {
            aboutMeText: "hello~!"
        },
        ui: {
        },
        events: {
        }
    });
});
