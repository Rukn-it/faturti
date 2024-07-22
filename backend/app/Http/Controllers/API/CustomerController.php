<?php

namespace App\Http\Controllers\API;

use App\Classes\ApiResponseClass;
use App\Http\Controllers\Controller;
use App\Http\Resources\CustomerResource;
use Illuminate\Http\Request;
use App\Interfaces\CustomerRepositoryInterface;
use Illuminate\Support\Facades\DB;


class CustomerController extends Controller
{
    private CustomerRepositoryInterface $customerRepositoryInterface;

    public function __construct(CustomerRepositoryInterface $customerRepositoryInterface)
    {
        $this->customerRepositoryInterface = $customerRepositoryInterface;
    }

    public function index()
    {
        $data = $this->customerRepositoryInterface->index();

        return ApiResponseClass::sendResponse(CustomerResource::collection($data), '', 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required'
        ]);
        DB::beginTransaction();
        try {
            $customer = $this->customerRepositoryInterface->store($data);
            DB::commit();
            return ApiResponseClass::sendResponse(new CustomerResource($customer), 'Customer Create Successful', 201);

        } catch (\Exception $ex) {
            return ApiResponseClass::rollback($ex);
        }
    }
    public function update(Request $request, $id)
    {
        $data = $request->validate(
            [
                'name' => 'required',
                'phone' => 'required',
                'email' => 'required'
            ]);
        DB::beginTransaction();
        try {
            $customer = $this->customerRepositoryInterface->update($data, $id);
            DB::commit();
            return ApiResponseClass::sendResponse($customer,'customer updated successful', 200);
        } catch (\Exception $e) {
            return ApiResponseClass::rollback($e);
        }
    }
}
