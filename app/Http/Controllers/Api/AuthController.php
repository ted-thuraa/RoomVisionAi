<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use App\Models\User;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        {
            $credentials = $request->validated();
            $remember = $credentials['remember'] ?? false;
            unset($credentials['remember']);
            if (!Auth::attempt($credentials, $remember)) {
                return response([
                    'error' => 'The provided email or password incorrect'
                ], 422);
            }
            $user = Auth::user();
            $token = $user->createToken('main')->plainTextToken;
            return response([
                'user' => $user,
                'token' => $token
            ]);
        }
    }


    public function signup(SignupRequest $request)
    {
        {
            $data = $request->validated();
    
            // for id purposes you can add the following line
            // it basically tells the id that the user is an instance of User model
            /** @var \App\Models\User $user */
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password'])
            ]);
            //create token on the user
            $token = $user->createToken('main')->plainTextToken;
            
    
            return response([
                'user' => $user,
                'token' => $token
            ]);
        }
    }


    public function logout(Request $request)
    {
        /**@var User $user */
        $user = $request->user();
        //revoke the token or delete in other words
        $user->currentAccessToken()->delete();

        return response([
            'success', 204
        ]);
    }
}
