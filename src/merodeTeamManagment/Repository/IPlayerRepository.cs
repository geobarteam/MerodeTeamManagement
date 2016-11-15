using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MerodeTeamManagment.Model;
using MongoDB.Bson;

namespace MerodeTeamManagment.Repository
{
    public interface IPlayerRepository
    {
        IEnumerable<Player> GetAll();

        Player GetById(ObjectId id);

        Player Add(Player player);

        void Update(Player player);

        bool Remove(Player player);
    }
}
