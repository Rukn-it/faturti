<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoices extends Model
{
      
    protected $table = 'invoices';
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'TotalAmount', 'Customer_ID'];
    use HasFactory;
}
