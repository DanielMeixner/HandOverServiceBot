using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNet.SignalR;
using CallCenterBotMaster.Hubs;

namespace CallCenterBotMaster.Controllers
{
    public class UserChatsController : ApiController
    {
        // GET: api/Conversation
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/Conversation/5
        //public string Get(string id)
        //{
        //    return "value";
        //}

        // POST: api/Conversation
        public HttpResponseMessage Post([FromBody]Models.UserChat chat)
        {
            //Take user conversation from the bot and initiate a new conversation on the client
            var context = GlobalHost.ConnectionManager.GetHubContext<UserConversationHub>();
            context.Clients.All.addNewUserConversationToPage(chat.ToString());
            return new HttpResponseMessage(HttpStatusCode.OK);            
        }

        // PUT: api/Conversation/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        // DELETE: api/Conversation/5
        //public void Delete(int id)
        //{
        //}
    }
}
