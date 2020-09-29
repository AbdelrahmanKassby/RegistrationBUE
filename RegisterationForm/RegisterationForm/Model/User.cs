using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RegisterationForm.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string  FirstName { get; set; }


        public string SecoundName { get; set; }

        public int Age { get; set; }

        public string Email { get; set; }

        public string phone { get; set; }

        public string password { get; set; }
    }
}
