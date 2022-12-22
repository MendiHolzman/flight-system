using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace PrimaryFlightSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : MyBaceController
    {

        public TestController()
        {

        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            var list = new List<string>() { "a", "b", "c" };
            return list;
        }

    }
}
