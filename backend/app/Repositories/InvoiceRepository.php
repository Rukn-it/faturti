<?php

namespace App\Repositories;
use App\Interfaces\InvoiceRepositoryInterface;
use App\Models\Customer;
use App\Models\Invoice;

class InvoiceRepository implements InvoiceRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public  function index(){
            
        return Invoice::get();
    }
    public function userInvoices($id){

    }
    public function store(array $data){
        return Invoice::create($data);
    }
    public function update(array $data,$id){
        $invoice = Invoice::find($id);
        $invoice->update($data);
        return $invoice;
    }
}

