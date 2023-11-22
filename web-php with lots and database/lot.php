<?php 
require_once ('functions.php');
require_once ('helpers.php');
require_once ('init.php');

$id = $_GET['id'] ?? 0;
$categories = get_category($con);
$lot = get_lot($con, $id);
if ($lot) {
$page_content = include_template('main-lot.php', [
  'categories' => $categories,
  'lots' => $lot
]);
}
else {
  $page_content = include_template('404.php', [
    'categories' => $categories
  ]);
};
$layout_content = include_template('layout.php' , [
  'page_content' => $page_content,
  'user_name' => $user_name,
  'categories' => $categories,
  'title' => 'Главная',
  'is_auth' => $is_auth,
]);
print ($layout_content);