<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $users = User::all();

        foreach ($users as $user) {
            return [
                'user_id' => $user->id,
                'address' => $this->faker->address,
                'phone' => $this->faker->phoneNumber,
            ];
        }
       
    }
    
}
