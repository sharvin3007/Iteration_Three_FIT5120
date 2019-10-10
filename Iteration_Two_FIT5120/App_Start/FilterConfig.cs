using System.Web;
using System.Web.Mvc;

namespace Iteration_Two_FIT5120
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
