<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'principalController@verPagina');
Route::get('/login', 'loginController@verPagina');
Route::get('/cursos', 'cursoController@verPagina');
Route::get('/temarios', 'temarioController@verPagina');
Route::get('/bloques', 'bloqueController@verPagina');
