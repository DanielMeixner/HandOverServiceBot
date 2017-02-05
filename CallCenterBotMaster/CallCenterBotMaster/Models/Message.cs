using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CallCenterBotMaster.Models
{
    public class Message
    {
        public string type { get; set; }
        public string text { get; set; }
        public From from { get; set; }
        public string locale { get; set; }
        public string timestamp { get; set; }
        public ChannelData channelData { get; set; }
        public string id { get; set; }
        public string channelId { get; set; }
        public string localTimestamp { get; set; }
        public Recipient recipient { get; set; }
        public Conversation conversation { get; set; }
        public string serviceUrl { get; set; }
    }
}