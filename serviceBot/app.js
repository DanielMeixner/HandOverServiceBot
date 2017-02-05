require('./connectorSetup.js')();
require('./dialogs/accountSupport.js')();
require('./dialogs/postConversation.js')();


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
        var choices = ["Account", "Payment", "Using Spotify"]
        var helloString = "Hi there! Welcome to the Spotify Customer Service. My name is sBOTify, how can I help you today?<br /><br />Please select one of the following topics. You can also type your question below.";
        builder.Prompts.choice(session, helloString, choices, { listStyle: builder.ListStyle.button }); 
    },
    function (session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Account":
                    session.replaceDialog('/accountSupport');
                    break;
                case "Payment":
                    session.replaceDialog('/paymentSupport');
                    break;
                case "Using Spotify":
                    session.replaceDialog('/postConversation');
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






