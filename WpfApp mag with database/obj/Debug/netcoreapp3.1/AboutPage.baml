   M S B A M L   `   `   `  ����B  >WpfApp1, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:WpfApp1WpfApp1  5          WpfApp1.AboutPage   5      W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      'localclr-namespace:WpfApp1     5        N� Title$  	AboutPage��5	       � 	Resources 5
         RoundButton �� CornerRadius��%�   &	        �� 5   
   .R�5      �� $ 25��6   
���   �$��2q�5      $��50��6)   $��50��68   $	��Top=�5      ._�5      �� $��/Images/backArrow.png��6   5      5      5      .��5      � 
������� � ColumnDefinitions 5   
   �� 5      $
��0.5* �6   6.   �� 5      6!   �� 5      6!    � RowDefinitions 5   
   �� 5      $
��1.7* �6   6,   �� 5      6   .+�5   
   �� -   5        #��[  5      5      �� 5   
   -   5         ��Name$ Image��5      $��1��6=   ��6   ��  �� Path$ Image�6=   �� 5    
   $��2��6   .+�5!      �� $��10q�6   $��18(�6$   $(��"Название телефона:��62   �� 5"      -   5         ��Name$ Title��5"      $��10q�6'   $��18(�63   ��6A   �� $ Title��� 5#      $��10q�6   $��18(�6$   $ ��Производитель��62   �� 5$      -   5        $ Company��5$      $��10q�6)   $��18(�65   ��6C   �� $ CompanyEntity.Title��� 5%      $��10q�6   $��18(�6$   $��Цена��62   �� 5&      -   5        $ Price��5&      $��10q�6'   $��18(�63   ��6A   �� $ Price�5'      �� 5(   
   $��1��6   $��1��6"   $��2��62   .+�5)      �� $��18(�6   $��Описание:��6&   �� 5*      -   5        $ 
Definition��5*      $��18(�6,   ��6:   �� $ 
Definition�5+      5,      5-      