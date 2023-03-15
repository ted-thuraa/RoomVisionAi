<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use \App\Http\Requests\StoreRenderRequest;
use App\Services\ReplicateService;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class RoomVisionController extends Controller
{
    protected ReplicateService $replicateService;

    /**
     * HomeController constructor.
     *
     * @param ReplicateService $replicateService
     */
    public function __construct(ReplicateService $replicateService)
    {
        $this->replicateService = $replicateService;
    }

    /**
     * Upload a photo to Replicate API.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function restore(Request $request)
    {
        $data = $request->validate( [
            'originalPhoto' => 'nullable|string',
            'room' => 'nullable|string',
            'style' => 'nullable|string',
            'mode' => 'nullable|string',
            'renders' => 'nullable|string',
            'resolution' => 'nullable|string',
            'privacy' => 'nullable|string',
        ]);
        $photo = $data['originalPhoto'];
        $prompt = $data['mode'] . " " . "of " . $data['style'] . " " . $data['room'];
        $renders = $data['renders'];
        $resolution = $data['resolution'];
        $privacy = $data['privacy'];
        $a_prompt = "best quality, extremely detailed, photo from Pinterest, interior, cinematic photo, ultra-detailed, ultra-realistic, award-winning";
        $n_prompt = "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality";

        try {
            $response = $this->replicateService->predict($photo, $prompt, $renders, $a_prompt, $n_prompt, $resolution);
        } catch (\Exception $e) {
            return response([
                "error" => true,
                "message" => $e->getMessage()
            ], 500);
        }

        if ($response->getStatusCode() != 201) {
            return response([
                "error" => true,
                "message" => "Failed!"
            ], 400);
        }

        return $response->json();

    }



    /**
     * Get the status of the AI prediction for a specific image.
     *
     * @param string $id - The ID of the image prediction
     * @return \Illuminate\Http\Response
     */
    public function status($id)
    {
        try {
            $response = $this->replicateService->getPrediction($id);
        } catch (\Exception $e) {
            return response([
                "error" => true,
                "message" => $e->getMessage()
            ], 500);
        }

        if ($response->getStatusCode() != 200) {
            return response([
                "error" => true,
                "message" => "Failed!"
            ], 400);
        }

        return $response->json();
    }



    

}
