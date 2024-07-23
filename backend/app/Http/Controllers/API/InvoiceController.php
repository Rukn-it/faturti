<?php

namespace App\Http\Controllers\API;

use App\Classes\ApiResponseClass;
use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;
use App\Interfaces\InvoiceRepositoryInterface;
use App\Repositories\InvoiceRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class InvoiceController extends Controller
{
    private InvoiceRepositoryInterface $invoiceRepositoryInterface;

    public function __construct(InvoiceRepositoryInterface $invoiceRepositoryInterface)
    {
        $this->invoiceRepositoryInterface = $invoiceRepositoryInterface;
    }

    public function index(){
        $data = $this->invoiceRepositoryInterface->index();

        return ApiResponseClass::sendResponse(InvoiceResource::collection($data), '', 200);
    }

    public function store(Request $request){
        $data = $request->validate([
                'customer_id'=>"required",
                'InvoiceDate'=>"required",
                'TotalAmount'=>"required"
            ]);
            DB::beginTransaction();
        try{
            $invoice = $this->invoiceRepositoryInterface->store($data);
            DB::commit();
            return ApiResponseClass::sendResponse($invoice,'Customer Create Successful', 200);

        }catch(\Exception $e){
            return ApiResponseClass::rollback($e);
        }
    }

    public function update(Request $request , $id){
        $data = $request->validate([
            'customer_id'=>"required",
            'InvoiceDate'=>"required",
            'TotalAmount'=>"required"
        ]);
        DB::beginTransaction();
    try{
        $invoice = $this->invoiceRepositoryInterface->update($data,$id);
        DB::commit();
        return ApiResponseClass::sendResponse($invoice,'Customer updated Successful', 200);

    }catch(\Exception $e){
        return ApiResponseClass::rollback($e);
    }
    }
}
