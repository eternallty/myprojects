using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp1
{
    /// <summary>
    /// Логика взаимодействия для AboutPage.xaml
    /// </summary>
    public partial class AboutPage : Page
    {
        public AboutPage(Phone _phone)
        {
            InitializeComponent();
            Title.Text = _phone.Title;
            Definition.Text = _phone.Definition;
            Company.Text = _phone.CompanyEntity.Title;
            Price.Text = _phone.Price.ToString();
            if(_phone.Image != null)
            {
                BitmapImage _bitmapImage = new BitmapImage();
                using (Stream stream = File.OpenRead(_phone.Image))
                {
                    _bitmapImage.BeginInit();
                    _bitmapImage.CacheOption = BitmapCacheOption.OnLoad;
                    _bitmapImage.StreamSource = stream;
                    _bitmapImage.EndInit();
                }
                Image.Source = _bitmapImage;
            }
            else
            {
                Image.Source = new BitmapImage(new Uri("C:/Users/student/Downloads/WpfApp1/Images/noimage.png"));
            }
        }

        private void BackArrowButton_Click(object sender, RoutedEventArgs e)
        {
            FrameContext.MainWindowFrame.Navigate(null);
        }
    }
}
