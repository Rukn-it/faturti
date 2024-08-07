<?php

namespace Database\Seeders;


use App\Models\Customer;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        User::factory()->count(10)->create();
        Customer::factory()->create();
        Invoice::factory()->count(20)->create();
        InvoiceItem::factory()->count(100)->create();
    }
}
