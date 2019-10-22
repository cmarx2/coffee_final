<?php

namespace App\Http\Controllers\API;

use App\Models\Cafe;
use Request;

class CafesController extends Controller
{

    public function getCafes(){
        $cafes = Cafe::all();
        return response()->json($cafes);
    }

    public function getCafe($id){
        $cafe = Cafe::where('id', '=', $id)->first();
        return response()->json($cafe);

    }

    public function postNewCafe(){
        $cafe->name = Request::get('name');
        $cafe->name = Request::get('address');
        $cafe->name = Request::get('city');
        $cafe->name = Request::get('state');
        $cafe->name = Request::get('zip');

        $cafe->save();

        return response()->json($cafe, 201);

    }
}