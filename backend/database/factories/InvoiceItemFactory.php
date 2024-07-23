<?php

namespace Database\Factories;

use App\Models\Invoice;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InvoiceItem>
 */
class InvoiceItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $invoice =Invoice::all();
        return [
            'invoice_id' => $invoice->random()->id,
            'Description' => $this->faker->sentence,
            'Quantity' => $this->faker->numberBetween(1, 10),
            'UnitPrice' => $this->faker->randomFloat(2, 1, 100),
        ];
    }
}
