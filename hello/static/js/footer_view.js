define([
    "marionette"
], function(
    Marionette
){
    return Marionette.ItemView.extend({
        template: '#footer-template',
        ui: {
            facebook: "#icon-facebook",
            linkedin: "#icon-linkedin",
            github: "#icon-github",
            instagram: "#icon-instagram",
            email: "#icon-email"
        },
        events: {
            "click @ui.facebook": "openInNewTab",
            "click @ui.facebook": "openInNewTab",
            "click @ui.facebook": "openInNewTab",
            "click @ui.facebook": "openInNewTab",
            "click @ui.facebook": "openInNewTab",
            "mouseover @ui.facebook": "hover",
            "mouseover @ui.linkedin": "hover",
            "mouseover @ui.github": "hover",
            "mouseover @ui.instagram": "hover",
            "mouseover @ui.email": "hover",
            "mouseout @ui.facebook": "noHover",
            "mouseout @ui.linkedin": "noHover",
            "mouseout @ui.github": "noHover",
            "mouseout @ui.instagram": "noHover",
            "mouseout @ui.email": "noHover"
        },
        openInNewTab: function() {
            var url = "www.facebook.com/Sarah.C.Heffer";
            var win = window.open(url, '_blank');
            //win.focus();
            win.location;
        },
        hover: function(ev) {
            var target = $(ev.currentTarget);
            var active = target.data('active');
            target.addClass(active);
        },
        noHover: function(ev) {
            var target = $(ev.currentTarget);
            var active = target.data('active');
            target.removeClass(active);
        }
    });
});
