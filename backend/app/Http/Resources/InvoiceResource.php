<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'invoiceDate'=> $this->InvoiceDate,
            'totalAmount'=> $this->TotalAmount,
            'date'=>$this->created_at,
            'customer'=>$this->customer->name
        ];
    }
}
