<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class renders extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'originalimage', 'restoredimage', 'privacy', 'prompt'];
}
