using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CallCenterBotMaster.Models
{
    public class UserChat
    {
        public int customerNumber { get; set; }

        public string userConversationId { get; set; }

        public Message[] messages { get; set; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }
    }
}