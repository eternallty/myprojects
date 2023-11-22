using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WpfApp1
{
    public class DatabaseControl
    {
        public static List<Phone> GetPhonesForView()
        {
            using(DbAppContext ctx = new DbAppContext())
            {
                return ctx.Phones.Include(p => p.CompanyEntity).ToList();
            }
        }

        public static void AddPhone(Phone phone)
        {
            using(DbAppContext ctx=new DbAppContext())
            {
                ctx.Phones.Add(phone);
                ctx.SaveChanges();
            }
        }

        public static void UpdatePhone(Phone phone)
        {
            using (DbAppContext ctx=new DbAppContext())
            {
                Phone _phone = ctx.Phones.FirstOrDefault(p => p.Id == phone.Id);

                _phone.Title = phone.Title;
                _phone.Price = phone.Price;
                _phone.CompanyId = phone.CompanyId;
                _phone.Image = phone.Image;
                _phone.Definition = phone.Definition;
                ctx.SaveChanges();
            }
        }

        public static List<Company> GetCompanies()
        {
            using (DbAppContext db = new DbAppContext())
            {
                return db.Company.Include(p => p.PhoneEntities).ToList();
            }
        }

        public static void DeletePhones(Phone phone)
        {
            using (DbAppContext ctx = new DbAppContext())
            {
                ctx.Phones.Remove(phone);
                ctx.SaveChanges();
            }
        }
    }
}
