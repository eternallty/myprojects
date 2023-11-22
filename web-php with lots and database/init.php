<?php
const HOSTNAME = "localhost";
const USER = "ntijajgi";
const PASSWORD = "pAU33n";
const DATABASE = "ntijajgi_m2";
$con = mysqli_connect(HOSTNAME, USER, PASSWORD, DATABASE);
mysqli_set_charset($con, "utf8");

$is_auth = rand(0, 1);

$user_name = 'Вадим'; // укажите здесь ваше имя