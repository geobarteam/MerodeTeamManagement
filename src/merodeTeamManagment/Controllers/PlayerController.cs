using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MerodeTeamManagment.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace MerodeTeamManagment.Controllers
{
    [Route("api/[controller]")]
    public class PlayerController : Controller
    {
        private Settings _settings;
        private IMongoDatabase _database;

        public PlayerController(IOptions<Settings> settings)
        {
            this._settings = settings.Value;
            this._database = Connect();
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Player> Get(string teamName)
        {
            var collection = this._database.GetCollection<Player>("players");
            return collection.Find(_ => true).ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        private IMongoDatabase Connect()
        {
            var client = new MongoClient(_settings.MongoConnection);
            var database = client.GetDatabase(this._settings.Database);
            
            return database;
        }
    }
}
