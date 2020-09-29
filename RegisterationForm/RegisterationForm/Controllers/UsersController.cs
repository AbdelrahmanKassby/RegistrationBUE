using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RegisterationForm.Model;

namespace RegisterationForm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public UsersController()
        {

        }

        [HttpGet] // Action
        public List<User> Get()
        {
            var db = new MainDbContext();

            return db.Users.Where(x => x.Id > 2).ToList();
        }

        [HttpPost] // Action
        public ActionResult Post(User user)
        {
            var db = new MainDbContext();

            db.Users.Add(user);
            db.SaveChanges();

           // var deletedUser = db.Users.FirstOrDefault(x => x.Id == 3);

            //db.Users.Remove(deletedUser);
           // db.SaveChanges();

            return Ok();
        }
    }
}
