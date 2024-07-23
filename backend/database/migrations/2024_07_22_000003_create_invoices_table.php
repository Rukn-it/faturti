<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
     
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('TotalAmount');
            $table->foreignId('Customer_ID');
            $table->foreign('Customer_ID')->references('id')->on('users');
            // $table->date_create('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Schema::dropIfExists('invoices');
    }
};
