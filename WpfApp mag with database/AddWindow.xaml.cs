using Microsoft.Win32;
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
using System.Windows.Shapes;

namespace WpfApp1
{
    /// <summary>
    /// Логика взаимодействия для AddWindow.xaml
    /// </summary>
    public partial class AddWindow : Window
    {
        private const string _imageSource = "C:\\Users\\student\\Downloads\\WpfApp1\\Images\\imgphone";
        private OpenFileDialog _img;

        public AddWindow()
        {
            InitializeComponent();
            Company.ItemsSource = DatabaseControl.GetCompanies();
        }

        private void AddPhoneButton_Click(object sender, RoutedEventArgs e)
        {
            if (!String.IsNullOrWhiteSpace(Company.Text) && !String.IsNullOrWhiteSpace(Title.Text) && !String.IsNullOrWhiteSpace(Price.Text) && Price.Text != null && int.TryParse(Price.Text, out int number) && !String.IsNullOrWhiteSpace(Definition.Text) && Convert.ToDecimal(Price.Text) > 0)
            {
                Phone newPhone = new Phone
                {
                    Title = Title.Text,
                    CompanyId = (int)Company.SelectedValue,
                    Price = Convert.ToDecimal(Price.Text),
                    Definition = Definition.Text
                };

                if (_img != null)
                {
                    string filePath = System.IO.Path.Combine(_imageSource, _img.SafeFileName);
                    File.Copy(_img.FileName, filePath, true);
                    newPhone.Image = filePath;
                }

                DatabaseControl.AddPhone(newPhone);

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
