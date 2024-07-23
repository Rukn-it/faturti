<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;
    protected $fillable=['InvoiceDate', 'TotalAmount'];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'CustomerID');
    }

    public function invoiceItems()
    {
        return $this->hasMany(InvoiceItem::class, 'InvoiceID');
    }
   
}
