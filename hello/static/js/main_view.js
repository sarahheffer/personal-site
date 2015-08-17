define([
    "marionette"
], function(
    Marionette
){
    return Marionette.ItemView.extend({
        template: '#main-template',
        templateHelpers: {
            aboutMeText: "In 2010 I discovered the world of computer science through " +
"a single course offered at my high school, and I was hooked immediately. In 2012 I " +
"was accepted into Honours Computer Science at the University of Waterloo, and I’m " +
"currently completing my 3rd year of study. I am in the co-op program and I feel " +
"incredibly lucky to have had the opportunity to work at some truly amazing companies. " +
"Working for companies such as Zynga and Pivotal Labs in Toronto, and Hearsay Social " +
"in San Francisco, has exposed me to unique challenges, new technologies, as well as " +
"many aspects of the software development lifecycle. I have been fortunate to work " +
"with fabulous, brilliant, creative people who have mentored me and challenged me " +
"along the way to help me rapidly gain experience in both mobile and web development." +
"\n" +
"I try to give back wherever I can, and have been a volunteer math tutor and peer " +
"mentor for at-risk youth, and a volunteer TA teaching Android development to " +
"underrepresented communities in technology, as well as an animal socialization " +
"volunteer for Rabbit Rescue. Some things that make me happy include the great " +
"outdoors, family, snowboarding, conversation, sushi, adventure, dogs, bubble tea, " +
"intellectual challenge, wine, hiking, laughter, s'mores, and of course spending " +
"time with great friends."
        },
        ui: {
        },
        events: {
        }
    });
});
