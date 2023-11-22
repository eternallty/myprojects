<?php
require_once ('functions.php');
require_once ('helpers.php');
require_once ('init.php');

$page_content = include_template('main.php', [
        'categories' => get_category($con),
        'lots' => get_lots($con)
]);

$layout_content = include_template('layout.php' , [
        'page_content' => $page_content,
        'user_name' => $user_name,
        'categories' => get_category($con),
        'title' => 'Главная',
        'is_auth' => $is_auth,
]);
print ($layout_content);