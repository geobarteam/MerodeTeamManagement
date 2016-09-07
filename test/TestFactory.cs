using MerodeTeamManagment;
using Microsoft.Extensions.Options;
using NSubstitute;

namespace MerodeTeamManagement.Test
{
    public static class TestFactory
    {
        public static IOptions<Settings> GetSettings()
        {
            var settings = Substitute.For<IOptions<Settings>>();
            settings.Value.Returns(new Settings {Database = "merode", MongoConnection = "mongodb://localhost:27017"});
            return settings;
        }
    }
}