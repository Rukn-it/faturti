<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invoice>
 */
class InvoiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $customers = Customer::all();
        return [
            'customer_id' => $customers->random()->id,
            'InvoiceDate' => $this->faker->date,
            'TotalAmount' => $this->faker->randomFloat(2, 10, 1000),
        ];
    }
}
