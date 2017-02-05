require('./connectorSetup.js')();
require('./dialogs/accountSupport.js')();


//=========================================================
// Bots Dialogs
//=========================================================

var intents = new builder.IntentDialog();
bot.dialog('/', intents);

// Entry point of the bot
intents.onDefault(
    function (session) {
        session.replaceDialog('/start');
    }
);

bot.dialog('/start', [
    function (session) {
        var choices = ["Account and Payment", "Using Spotify"]
        var helloString = "Hi there! Welcome ...";
        builder.Prompts.choice(session, helloString, choices, { listStyle: builder.ListStyle.button });
    },
    function (session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Account and Payment":
                    session.replaceDialog('/accountSupport');
                    break;
                case "Using Spotify":
                    session.replaceDialog('/userSupport');
                    break;
                default:
                    session.reset('/');
                    break;
            }
        }
    }
]);

bot.dialog('/help', function (session) {
    session.endDialog("\n* 'home' to start again; \n* 'result' to show previous results; \n* 'search' to start a new search; \n* 'bye' to end conversation");
});





