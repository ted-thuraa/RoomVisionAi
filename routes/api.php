<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AdminAuthController;
use App\Http\Controllers\Api\RoomVisionController;
use App\Http\Controllers\Api\RendersController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
    return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/design', [RoomVisionController::class, 'restore'])->middleware('throttle:only_two_visits');
    Route::get('/status/{id}', [RoomVisionController::class, 'status'])->middleware('throttle:only_twenty_visits');
    Route::post('/cancel', [RoomVisionController::class, 'cancel']);
    Route::post('/save', [RendersController::class, 'store']);
    Route::get('/renders', [RendersController::class, 'index']);
    
});

Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    Route::get('/admin/dashboard', [AdminAuthController::class, 'dashboard']);
    Route::get('/admin/users', [UserController::class, 'index']);
    Route::post('/admin/users', [UserController::class, 'store']);
    Route::get('/admin/users/{user:id}', [UserController::class, 'show']);
    Route::put('/admin/users/{user:id}', [UserController::class, 'update']);
    Route::delete('/admin/users/{user:id}', [UserController::class, 'destroy']);
    
});


Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);



