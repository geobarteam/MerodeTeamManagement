using System;
using System.Collections.Generic;
using MerodeTeamManagment.Model;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MerodeTeamManagment.Repository
{
    public class PlayerRepository : IPlayerRepository
    {
        private IMongoDatabase _database;
        private Settings _settings;

        public PlayerRepository(IOptions<Settings> settings)
        {
            this._settings = settings.Value;
            this._database = Connect();
        }

        public void Add(Player player)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Player> GetAll()
        {
            var collection = this._database.GetCollection<Player>("players");
            return collection.Find(_ => true).ToList();
        }

        public Player GetById(ObjectId id)
        {
            throw new NotImplementedException();
        }

        public bool Remove(Player player)
        {
            throw new NotImplementedException();
        }

        public void Update(Player player)
        {
            throw new NotImplementedException();
        }

        private IMongoDatabase Connect()
        {
            var client = new MongoClient(_settings.MongoConnection);
            var database = client.GetDatabase(this._settings.Database);

            return database;
        }
    }
}
