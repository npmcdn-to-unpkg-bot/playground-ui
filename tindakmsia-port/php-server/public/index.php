<?php
/**
 * Created by PhpStorm.
 * User: leow
 * Date: 12/24/15
 * Time: 6:15 PM
 */

require __DIR__ . "/../vendor/autoload.php";
// Setup the env
$env = new \Dotenv\Dotenv(__DIR__ . '/..','env');
$env->load();
// Setup Auryn DI here ..
// OK good to go ..
// Main bootstrap and router here??
echo "Hellow World!!<br/>";
// print_r($env->load());
echo "GOOGLE KEY is " . getenv('GOOGLE_API_KEY') . "<br/>";
echo "USER is " . getenv('USER') . "<br/>";
echo "APP_STATE is " . getenv('APP_STATE') . "<br/>";
echo "DB_USER is " . getenv('DB_USER') . "<br/>";
echo "DB_PASSWD is " . getenv('DB_PASSWD') . "<br/>";

