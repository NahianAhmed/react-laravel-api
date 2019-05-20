<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// header('Access-Control-Allow-Origin: *');
// header( 'Access-Control-Allow-Headers: Authorization, Content-Type' );

Route::get('/', function () {
    return view('welcome');
});
Route::get('/ReadData','ApiController@ReadData');
Route::post('/SaveData','ApiController@SaveData');
Route::get('/DeleteData/{id}','ApiController@DeleteData');
Route::get('/GetData/{id}','ApiController@GetData');
Route::post('/UpdateData','ApiController@UpdateData');
