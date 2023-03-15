<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

/**
 * Class ReplicateService
 *
 * This class handles the interactions with the Replicate API.
 *
 * @package App\Services
 */
class ReplicateService
{
    private $headers;
    private $modelVersion;
    private $url;

    public function __construct() {
        $this->headers = [
            "Content-Type"=> "application/json",
            'Authorization' => 'Token ' . config('app.replicate.api_token')
        ];
        $this->modelVersion = '854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b';
        $this->url = 'https://api.replicate.com/v1/predictions';
    }


    /**
     * Make a prediction using the image provided.
     *
     * @param string $image The image in base64 format
     * @return \Illuminate\Http\Response
     */
    public function predict($image, $prompt, $renders, $a_prompt, $n_prompt, $resolution)
    {
        return Http::withHeaders($this->headers)
            ->timeout(60)
            ->post($this->url, [
                'version' => $this->modelVersion,
                'input' => [
                    "image" => $image,
                    "prompt" => $prompt,
                    "a_prompt" => $a_prompt,
                    "n_prompt" => $n_prompt,
                ],
            ]);
    }

    /**
     * Get the progress of an AI prediction by id.
     *
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function getPrediction($id)
    {
        return Http::withHeaders($this->headers)
            ->acceptJson()
            ->timeout(60)
            ->get("{$this->url}/{$id}");
    }

    /**
     * Convert an image to base64 format.
     *
     * @param string $path
     * @return string
     */
    public function imageToBase64($path)
    {
        $image = Storage::get($path);
        $mimeType = Storage::mimeType($path);
        $base64 = base64_encode($image);
        return "data:" . $mimeType . ";base64," . $base64;
    }
}