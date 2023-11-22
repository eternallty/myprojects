using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Controls;

namespace WpfApp1
{
    public class Phone
    {
        public string Title { get; set; }
        public int Id { get; set; }
        public decimal Price { get; set; }
        public int CompanyId { get; set; }
        public string Definition { get; set; }
        public string Image { get; set; }
        public Company CompanyEntity { get; set; }
    }
    public static class FrameContext
    {
        public static Frame MainWindowFrame { get; set; }
    }
}
