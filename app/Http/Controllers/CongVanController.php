<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Congvan;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CongVanController extends Controller
{

	// Giao dien them cong van
	public function themCongVan(Request $request): Response
	{
		return Inertia::render('ThemCongVan', [
			'status' => session('status'),
		]);
	}

	// Thêm công văn
	public function taoCongVan(Request $request)
	{
		$request->validate([
			'socongvan' =>['required','string'],
			'tieude' =>['required', 'string', 'max: 255'],
			'mota' =>['required', 'string', 'max: 255'],	
			// 'file' =>['required'],
		],[
			'socongvan.required' => 'Không được bỏ trống dòng này.',
			'socongvan.string' => 'Số công văn phải là một chuỗi.'
		]);

		//thao tac CSDL tao congvan
		$congvan = Congvan::create([
			'so_cong_van' => $request->socongvan,
			'tieu_de' => $request->tieude,
			'mo_ta' => $request->mota, 
			'nguoi_tao' => auth()->user()->id,
			'file' => 'string', 
			// 'file' => $request->file('file'),
		]);

		$newSlug = $congvan->id . '-'. Str::of($congvan->tieu_de)->slug('-');
		// dd($newSlug);
		$congvan->slug = $newSlug;
		$congvan->save();

		return redirect()->route('dashboard')->with('success','Thêm công văn thành công.');
	}

	// Hiện dữ liệu công văn
	public function layTatCaCongVan()
	{
		$congvan = Congvan::all();
		return $congvan;
	}
}
