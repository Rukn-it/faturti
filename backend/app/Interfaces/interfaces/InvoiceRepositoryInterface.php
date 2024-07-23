<?php

namespace App\Interfaces\interfaces;

interface InvoiceRepositoryInterface
{
    public function index();
    public function userInvoices($id);
    public function store(array $data);
    public function update(array $data,$id);
}
