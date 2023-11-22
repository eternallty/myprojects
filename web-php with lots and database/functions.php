<?php
date_default_timezone_set("Asia/Yekaterinburg");
function format_price (int $price) : string {
    return number_format($price, 0, ',', ' ') . ' ₽';
}
define("secInMin", 60);
define("secInHour", 3600);
define("secInDay", 86400);

function get_dt_range (string $exptime) : array {
    $kon_date = strtotime($exptime) + secInDay;
    $sek_time = $kon_date - time() + secInMin;
    $hour = str_pad(floor($sek_time / secInHour), 2, "0", STR_PAD_LEFT);
    $now_time = $sek_time - ($hour * secInHour);
    $minute = str_pad(floor($now_time / secInMin), 2, "0", STR_PAD_LEFT);
    if ($hour < 0) {
        return ["00", "00"];
    }
    return [$hour, $minute];

}

function get_category (mysqli $con  ) : array {
    $sql = "SELECT * FROM Category";
    $result = mysqli_query($con, $sql);
    return mysqli_fetch_all($result, MYSQLI_ASSOC);
}
function get_lots (mysqli $con) : array {
    $sql = "SELECT Lot.id, Lot.name, Lot.price, Lot.image, Category.name AS category_name, Lot.end_date FROM Lot JOIN Category ON Lot.category = Category.id WHERE Lot.end_date > NOW() ORDER BY Lot.creation_date DESC";
    $result = mysqli_query($con, $sql);
    return mysqli_fetch_all($result, MYSQLI_ASSOC);
}
function get_lot (mysqli $con, int $id) : array|null {
    $sql = "SELECT Lot.id, Lot.name, Lot.price, Lot.image, Category.name AS category_name, Lot.end_date FROM Lot JOIN Category ON Lot.category = Category.id WHERE Lot.id = ?";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, 'i', $id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    if (!mysqli_num_rows($result)) {
        http_response_code(404);
    }
       return mysqli_fetch_all($result, MYSQLI_ASSOC);
   
}
