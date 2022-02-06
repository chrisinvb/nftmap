<?php

use \Arweave\SDK\Arweave;
use \Arweave\SDK\Support\Wallet;

include __DIR__ . '/vendor/autoload.php';

// Read uploaded file content
$mime = mime_content_type($_FILES['file']['tmp_name']);
if(!str_starts_with($mime, 'image')) die("You can upload only images");

$file = file_get_contents($_FILES['file']['tmp_name']);

$arweave = new Arweave('https', 'arweave.net', 443);
$jwk = json_decode(file_get_contents(__DIR__ .'/jwk.json'), true);
$wallet =  new Wallet($jwk);

// Upload photo
$transaction = $arweave->createTransaction($wallet, [
    'data' => $file,
    'tags' => [
        'Content-Type' => $mime,
        'X-Lat' => $_FILES['lat'],
        'X-Lon' => $_FILES['lon']
    ]
]);

$arweave->api()->commit($transaction);
$imageTransaction = $transaction->getAttribute('id');
$imageUri = 'https://arweave.net/' . $imageTransaction;


//Upload nft metadata
$metadataTemplate = file_get_contents(__DIR__ .'/metadata.json');
$metadata = str_replace("%uri%", $imageUri, $metadataTemplate);
$transaction = $arweave->createTransaction($wallet, [
    'data' => $metadata,
    'tags' => [
        'Content-Type' => 'application/json'
    ]
]);

$arweave->api()->commit($transaction);
$metadataTransaction = $transaction->getAttribute('id');
$metadataUri = 'https://arweave.net/' . $metadataTransaction;

echo $imageTransaction . "\n" . $metadataTransaction;