using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Iteration_Two_FIT5120.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Service()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult NewsEvents()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Job()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Survey()
        {
            ViewBag.Message = "Your survey page.";

            return View();
        }

        public ActionResult Jobcrime()
        {
            ViewBag.Message = "Your jobcrime page.";

            return View();
        }

        public ActionResult Youth_Infograph()
        {
            ViewBag.Message = "Your jobcrime page.";

            return View();
        }

        public ActionResult Bully_Infograph()
        {
            ViewBag.Message = "Your jobcrime page.";

            return View();
        }

        public ActionResult LegalAdvice()
        {
            ViewBag.Message = "Your legal advice page.";

            return View();
        }

        public ActionResult FairPay()
        {
            ViewBag.Message = "Your fair pay page.";

            return View();
        }

        public ActionResult Acts()
        {
            ViewBag.Message = "Your acts page.";

            return View();
        }

        public ActionResult Bills()
        {
            ViewBag.Message = "Your bills page.";

            return View();
        }

        public ActionResult Information()
        {
            ViewBag.Message = "Your information page.";

            return View();
        }

        public ActionResult AusPolitics()
        {
            ViewBag.Message = "Your politics page.";

            return View();
        }

        public ActionResult Civil()
        {
            ViewBag.Message = "Your civil rights page.";

            return View();
        }

        public ActionResult Mental_Quiz()
        {
            ViewBag.Message = "Your mental quiz page.";

            return View();
        }
        
        public ActionResult Meter_Mental()
        {
            ViewBag.Message = "Your mental meter page.";

            return View();
        }

        public ActionResult Taxcal()
        {
            ViewBag.Message = "Your tax calculator page.";

            return View();
        }
    }
}