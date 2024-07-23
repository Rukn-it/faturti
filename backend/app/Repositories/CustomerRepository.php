<?php

namespace App\Repositories;
use App\Interfaces\CustomerRepositoryInterface;
use App\Models\Customer;

class CustomerRepository implements CustomerRepositoryInterface
{
    public function index(){
        return Customer::all();
    }

    public function getById($id){
       return Customer::findOrFail($id);
    }

    public function store(array $data){
       return Customer::create($data);
    }

    public function update(array $data,$id){
        $customet = Customer::find($id);
        $customet->update($data);
       return $customet;
    }
    
    public function delete($id){
       Customer::destroy($id);
    }
}
