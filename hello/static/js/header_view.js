define([
    "marionette"
], function(
    Marionette
){
    return Marionette.ItemView.extend({
        template: '#header-template',
        ui: {
            nav1: "#nav1",
            nav2: "#nav2",
            nav3: "#nav3",
        },
        events: {
            "click @ui.nav1": "selectNavTab",
            "click @ui.nav2": "selectNavTab",
            "click @ui.nav3": "selectNavTab",
            "mouseover @ui.nav1": "hover",
            "mouseover @ui.nav2": "hover",
            "mouseover @ui.nav3": "hover",
            "mouseout @ui.nav1": "no_hover",
            "mouseout @ui.nav2": "no_hover",
            "mouseout @ui.nav3": "no_hover"
        },
        selectNavTab: function(ev) {
            this.toggleSelect(ev);
        },
        toggleSelect: function(ev) {
            this.ui.nav1.removeClass("nav-item-select");
            this.ui.nav2.removeClass("nav-item-select");
            this.ui.nav3.removeClass("nav-item-select");
            $(ev.currentTarget).addClass("nav-item-select");
        },
        hover: function(ev) {
            $(ev.currentTarget).addClass("nav-item-hover");
        },
        no_hover: function(ev) {
            $(ev.currentTarget).removeClass("nav-item-hover");
        }
    });
});
