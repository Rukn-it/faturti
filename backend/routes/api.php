<?php

use App\Http\Controllers\API\InvoiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CustomerController;
use App\Http\Controllers\API\UserAuthController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// auth
Route::post('register',[UserAuthController::class,'register']);
Route::post('login',[UserAuthController::class,'login']);
Route::post('logout',[UserAuthController::class,'logout'])
  ->middleware('auth:sanctum');


Route::apiResource('/customers',CustomerController::class);
Route::apiResource('/storeCustomer',CustomerController::class);
Route::apiResource('/showCustomer',CustomerController::class);

// invoice routes 

Route::apiResource('/invoices',InvoiceController::class);
Route::apiResource('/storeInvoice',InvoiceController::class);
Route::apiResource('/updateInvoice',InvoiceController::class);