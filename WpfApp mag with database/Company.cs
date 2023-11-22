using System;
using System.Collections.Generic;
using System.Text;

namespace WpfApp1
{
    public class Company
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string CEO { get; set; }
        public double Capital { get; set; }

        public List<Phone> PhoneEntities { get; set; }
    }
}
