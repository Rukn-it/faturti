<?php

use App\Http\Controllers\API\InvoiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CustomerController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResource('/customers',CustomerController::class);
Route::apiResource('/storeCustomer',CustomerController::class);
Route::apiResource('/showCustomer',CustomerController::class);

// invoice routes 

Route::apiResource('/invoices',InvoiceController::class);
Route::apiResource('/storeInvoice',InvoiceController::class);