using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using static System.Net.Mime.MediaTypeNames;

namespace WpfApp1
{
    public partial class EditWindow : Window
    {
        private const string _imageSource = "C:\\Users\\student\\Downloads\\WpfApp1\\Images\\imgphone";
        private OpenFileDialog _img;
        Phone _tempPhone;
        public EditWindow(Phone phone)
        {
            InitializeComponent();
            _tempPhone = phone;
            Company.ItemsSource = DatabaseControl.GetCompanies();
            Title.Text = phone.Title;
            Company.SelectedValue = phone.CompanyEntity.Id;
            Price.Text = phone.Price.ToString();
            Definition.Text = phone.Definition.ToString();
        }

        private void EditButton_Click(object sender, RoutedEventArgs e)
        {
            if (!String.IsNullOrWhiteSpace(Company.Text) && !String.IsNullOrWhiteSpace(Title.Text) && !String.IsNullOrWhiteSpace(Price.Text) && Price.Text != null && int.TryParse(Price.Text, out int number) && Convert.ToDecimal(Price.Text) > 0)
            {
                _tempPhone.Title = Title.Text;
                _tempPhone.CompanyId = (int)Company.SelectedValue;
                _tempPhone.Price = Convert.ToDecimal(Price.Text);
                string copyImage = _tempPhone.Image;
                if (_img != null)
                {
                    File.Delete(_tempPhone.Image);
                    _tempPhone.Image =
                   System.IO.Path.Combine(_imageSource, _img.SafeFileName);
                    File.Copy(_img.FileName, _tempPhone.Image, true);
                }
                _tempPhone.Definition = Definition.Text;
                DatabaseControl.UpdatePhone(_tempPhone);
                (this.Owner as MainWindow).RefreshTable();
                this.Close();
            }
            else
            {
                MessageBox.Show("Ошибка", "Error!", MessageBoxButton.OK, MessageBoxImage.Question);
            }
        }
        private void SelectImageButton_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog openFileDialog = new OpenFileDialog();
            openFileDialog.Filter = "Images (*.jpg, *.png)|*.jpg;*.png;*.JPG;*.PNG";
            if (openFileDialog.ShowDialog() == true)
            {
                _img = openFileDialog;
            }
        }
    }
}
