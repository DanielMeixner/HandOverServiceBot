using Microsoft.AspNet.SignalR;
using SignalRChat;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {

            //SignalRChat.ChatHub c = new SignalRChat.ChatHub();

            var context = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();
            //context.Clients.All.Send("botmaster", "new client waiting");
            context.Clients.All.addNewMessageToPage("server", "bla");
            //context.Clients.All.DoIt();
            //c.Send("botmaster", "hello");

            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}