<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceItems extends Model
{

    protected $table = 'invoiceItems';
    protected $primaryKey = 'id';
    protected $fillable = ['Description', 'Quantity', 'UnitPrice', 'Invoice_ID'];
    use HasFactory;
}
