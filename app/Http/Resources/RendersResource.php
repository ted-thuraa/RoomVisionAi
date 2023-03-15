<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class RendersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'originalimage_url' => $this->originalimage ? URL::to($this->originalimage) : null,
            'restoredimage_url' => $this->restoredimage ? URL::to($this->restoredimage) : null,
            'prompt' => $this->prompt,
            'privacy' => $this->privacy,
        ];
    }
}
