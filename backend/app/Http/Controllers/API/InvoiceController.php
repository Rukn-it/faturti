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

    public function index()
    {
        $invoices = $this->invoiceRepositoryInterface->index();
        $data = [];
    
        foreach ($invoices as $invoice) {
            $invoiceData = [
                'id' => $invoice->id,
                'customer_id' => $invoice->customer_id,
                'InvoiceDate' => $invoice->InvoiceDate,
                'TotalAmount' => $invoice->TotalAmount,
                'InvoiceItems' => []
            ];
        
            $invoiceItems = $this->invoiceRepositoryInterface->getInvoiceItems($invoice->id);
    
            foreach ($invoiceItems as $item) {
                $invoiceData['InvoiceItems'][] = [
                    'InvoiceItemID' => $item->id,
                    'InvoiceID' => $item->invoice_id,
                    'Description' => $item->Description,
                    'Quantity' => $item->Quantity,
                    'UnitPrice' => $item->UnitPrice
                ];
            }
    
            $data[] = $invoiceData;
        }
    
        return ApiResponseClass::sendResponse($data, '', 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'customer_id' => "required",
            'InvoiceDate' => "required",
            'TotalAmount' => "required",
            'InvoiceItems' => "required|array",
            'InvoiceItems.*.Description' => "required",
            'InvoiceItems.*.Quantity' => "required|numeric",
            'InvoiceItems.*.UnitPrice' => "required|numeric",
        ]);

        DB::beginTransaction();
        try {
            $invoice = $this->invoiceRepositoryInterface->store($data);
            DB::commit();
            return ApiResponseClass::sendResponse($invoice, 'Invoice Created Successfully', 200);
        } catch (\Exception $e) {
            return ApiResponseClass::rollback($e);
        }
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'customer_id' => "required",
            'InvoiceDate' => "required",
            'TotalAmount' => "required",
            'InvoiceItems' => "required|array",
            'InvoiceItems.*.Description' => "required",
            'InvoiceItems.*.Quantity' => "required|numeric",
            'InvoiceItems.*.UnitPrice' => "required|numeric",
        ]);

        DB::beginTransaction();
        try {
            $invoice = $this->invoiceRepositoryInterface->update($data, $id);
            DB::commit();
            return ApiResponseClass::sendResponse($invoice, 'Invoice Updated Successfully', 200);
        } catch (\Exception $e) {
            return ApiResponseClass::rollback($e);
        }
    }
}
