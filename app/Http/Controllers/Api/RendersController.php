<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\ReplicateService;
use App\Http\Requests\StoreRenderRequest;
use App\Http\Resources\RendersResource;
use App\Models\renders;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class RendersController extends Controller
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return RendersResource::collection(renders::where('privacy', 'Public')->orderBy('id', 'desc')->paginate());
    }


     /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSurveyRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRenderRequest $request)
    {
        $data = $request->validated();
        //chack if image exist and save on local file
        if (isset($data['originalPhoto'])) {
            $originalPhotoPath = $this->saveImage($data['originalPhoto']);
            $data['originalimage'] = $originalPhotoPath;
        }
        if (isset($data['restoredPhoto'])) {
            $restoredPhotoPath = $this->saveImage($data['restoredPhoto']);
            $data['restoredimage'] = $restoredPhotoPath;
        }
        $prompt = $data['mode'] . " " . "of " . $data['style'] . " " . $data['room'];
        $data['prompt'] = $prompt;

        $render = renders::create($data);


        
        return new RendersResource($render);
    }



    private function saveImage($image)
    {
        // check if image is valid base64 string
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            // Take out the base64 encoded text without mime type
            $image = substr($image, strpos($image, ',') + 1);
            //Get file extention
            $type = strtolower($type[1]); // jpg, png, gif

            // Check if file is an image
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }

        $dir = 'images/';
        $file = Str::random(). '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }
}
