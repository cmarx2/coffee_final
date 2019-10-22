<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CafesController extends Controller
{
    
    public function index()
    {
        return view('cafes.index');
    }

    public function show()
    {
        return view('cafes.show');
    }
}
