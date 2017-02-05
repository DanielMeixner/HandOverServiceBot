module.exports = function () {
    bot.dialog('/accountSupport', [
        function (session) {
            builder.Prompts.text(session, "Great. How can I help you?");
        },
        function (session, result) {
            var issue = result.response;
            session.userData.issue = issue;
            session.endDialog("Let me check that for you." + issue);
        }
    ]);

    
}

