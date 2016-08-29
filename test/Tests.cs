using System;
using System.Linq;
using MerodeTeamManagment.Controllers;
using Xunit;

namespace Tests
{

    public class Tests
    {
        [Fact]
        public void ValuesControllerGetResultContains2Elements()
        {
            var ctrl =new ValuesController();
            var result = ctrl.Get();

            Assert.Equal(2, result.Count());

        }
    }
}
