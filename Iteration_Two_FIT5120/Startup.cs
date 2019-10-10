using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Iteration_Two_FIT5120.Startup))]
namespace Iteration_Two_FIT5120
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
