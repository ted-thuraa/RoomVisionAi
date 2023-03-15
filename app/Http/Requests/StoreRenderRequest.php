<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRenderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => $this->user()->id
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'originalPhoto' => 'string',
            'restoredPhoto' => 'string',
            'room' => 'string',
            'style' => 'string',
            'mode' => 'string',
            'renders' => 'string',
            'resolution' => 'string',
            'privacy' => 'string',
            'user_id' => 'exists:users,id',
        ];
    }
}
