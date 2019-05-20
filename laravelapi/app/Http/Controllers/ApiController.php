<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Api;
class ApiController extends Controller
{
    public function ReadData(){
     //  header("Access-Control-Allow-Origin: *");
       $data = Api::all();
       return $data;
    }

    public function SaveData(Request $req){
      // header('Access-Control-Allow-Origin: *');
      // header( 'Access-Control-Allow-Headers: Authorization, Content-Type' );
       $data = new Api();
       $data->task=$req->task;
       $data->status=$req->status;
       $data->save();
       return "save data";
    }
    public function DeleteData($id){
    	$data=Api::find($id);
    	$data->delete();
    	return "Data Deleted";
    }

    public function GetData($id){
    	$data=Api::find($id);
    	return $data;
    }

    public function UpdateData(Request $req){

    	$data=Api::find($req->id);
    	$data->task=$req->task;
    	$data->status=$req->status;
    	$data->save();
    	return "data updateed";
    }
}
