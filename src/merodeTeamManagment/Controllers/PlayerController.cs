using System.Collections.Generic;
using MerodeTeamManagment.Model;
using MerodeTeamManagment.Repository;
using Microsoft.AspNetCore.Mvc;

namespace MerodeTeamManagment.Controllers
{

    [Route("api/[controller]")]
    public class PlayerController : Controller
    {
        private readonly IPlayerRepository _playerRepository;

        public PlayerController(IPlayerRepository playerRepository)
        {
            _playerRepository = playerRepository;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Player> Get(string teamName)
        {
            return this._playerRepository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post(Player player)
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

       
    }
}
