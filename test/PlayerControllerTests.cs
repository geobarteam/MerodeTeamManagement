using System;
using System.Linq;
using MerodeTeamManagment;
using MerodeTeamManagment.Controllers;
using Microsoft.Extensions.Options;
using Xunit;

namespace MerodeTeamManagement.Test
{
    public class PlayerControllerTests
    {
        public IOptions<Settings> Settings { get; set; }

        public PlayerControllerTests()
        {
            this.Settings = TestFactory.GetSettings();
        }        

        [Fact]
        public void GetPlayersForMerodeReturnsPlayerArray()
        {
            var ctrl = new PlayerController(this.Settings);
            var result = ctrl.Get("merode");

            Assert.True(result.Any());
        }
    }
    
}
