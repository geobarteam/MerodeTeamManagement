using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MerodeTeamManagment.Model;
using Microsoft.Extensions.Options;
using MongoDB.Bson;

namespace MerodeTeamManagment.Repository
{
    public class PlayerRepository : IPlayerRepository
    {
        private Settings _settings;
        public PlayerRepository(IOptions<Settings> settings)
        {
            this._settings = settings.Value;
        }

        public void Add(Player player)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Player> GetAll()
        {
            throw new NotImplementedException();
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
    }
}
