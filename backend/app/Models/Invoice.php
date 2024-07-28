<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;


    protected $fillable = ['customer_id', 'invoice_number', 'invoice_date', 'total_amount', 'status'];

    
    //   Get the customer that owns the invoice.
     
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    
    //   Get the items for the invoice.
     
    public function items()
    {
        return $this->hasMany(InvoiceItem::class);
    }
}
