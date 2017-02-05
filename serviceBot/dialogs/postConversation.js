module.exports = function () {

bot.dialog('/postConversation', [
        function (session) {
            postConversation();
            session.endDialog("I'm connecting you with a human.");
        }
    ]);


function postConversation() {

    var client = restify.createStringClient({
    url : 'http://callcenterbotmaster.azurewebsites.net'
});

var body = {
    "customerNumber": "08154711", 
    "userConversationId": "j86bdgn6i23fm04c", 
    "messages": [ 
        { 
        "type": "message", 
        "text": "Hi", 
        "from": { 
            "id": "default-user", 
            "name": "User" 
        }, 
        "locale": "en", 
        "timestamp": "2017-02-05T17:33:37.756Z", 
        "channelData": { 
            "clientActivityId": "1486316013711.15784323464130656.0" 
        }, 
        "id": "hfjf1a8j6n28a98h6", 
        "channelId": "emulator", 
        "localTimestamp": "2017-02-05T09:33:37-08:00", 
        "recipient": { 
            "id": "214591gl3a0gjc7j7c", 
            "name": "Bot" 
        }, 
        "conversation": { 
            "id": "j86bdgn6i23fm04c" 
        }, 
        "serviceUrl": "http://localhost:59734" 
        }, 
        { 
        "type": "message", 
        "text": "Hi", 
        "from": { 
            "id": "default-user", 
            "name": "User" 
        }, 
        "locale": "en", 
        "timestamp": "2017-02-05T17:33:37.756Z", 
        "channelData": { 
            "clientActivityId": "1486316013711.15784323464130656.0" 
        }, 
        "id": "hfjf1a8j6n28a98h6", 
        "channelId": "emulator", 
        "localTimestamp": "2017-02-05T09:33:37-08:00", 
        "recipient": { 
            "id": "214591gl3a0gjc7j7c", 
            "name": "Bot" 
        }, 
        "conversation": { 
            "id": "j86bdgn6i23fm04c" 
        }, 
        "serviceUrl": "http://localhost:59734" 
        } 
    ] 
 
};

client.post('/api/userChats', body, function(err, req, res, data) {

    if (err) {
        console.log('ERROR! :(');
        console.log(err);
    } else {
        console.log('YAY!');
        console.log(data);
        
    }

});
}




}




