<?php 

$transaction = $_GET["tx"];
$arweave = $_GET["arweave"];
$lat = $_GET["lat"];
$lon = $_GET["lon"];

if(isset($transaction) && isset($arweave) && isset($lat) && isset($lon)) {
    $fp = fopen('contracts.txt', 'a');
    fwrite($fp, "$transaction|$arweave|$lat|$lon\n");
    fclose($fp);
    exit();
}

$lines = file('contracts.txt', FILE_IGNORE_NEW_LINES);
echo json_encode($lines);