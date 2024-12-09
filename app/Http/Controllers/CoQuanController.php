<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Coquan;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class CoQuanController extends Controller
{
	public function themCoQuan(Request $request): Response
	{
		return Inertia::render('ThemCoQuan', [
			// 
		]);
	}


	public function taoCoQuan(Request $request)
	{
		$request->validate([
			'ten_co_quan' => ['required', 'string', 'max:255'],
			'dia_chi' => ['required', 'string', 'max:255'],
			'so_dt' => ['required', 'string', 'size:10'], // Độ dài số điện thoại đúng 10 ký tự
		], [
			'ten_co_quan.required' => 'Tên cơ quan không được để trống.',
			'ten_co_quan.string' => 'Tên cơ quan phải là một chuỗi.',
			'dia_chi.required' => 'Địa chỉ không được để trống.',
			'so_dt.required' => 'Số điện thoại không được để trống.',
			'so_dt.size' => 'Số điện thoại phải có 10 ký tự.',
		]);

		// Tạo cơ quan trong CSDL
		$coquan = Coquan::create([
			'ten_co_quan' => $request->ten_co_quan,
			'dia_chi' => $request->dia_chi,
			'so_dt' => $request->so_dt,
		]);

		return redirect()->route('dashboard')->with('success', 'Thêm cơ quan thành công.');
	}
	public function layTatCaCoQuan()
	{
		$coquan = CoQuan::all(); // Lấy tất cả các bản ghi trong bảng coquan
		return Inertia::render('CoQuan', [
			'dsCoQuan' => $coquan
		]);
	}
	public function suaCoQuan($id): Response
	{
		return Inertia::render('SuaCoQuan', [
			'cv' => $this->LayThongTinCoQuan($id),
		]);
	}

	public function LayThongTinCoQuan($id)
	{
		$coquan = Coquan::find($id);
		return $coquan;
	}
	// Cập nhật thông tin cơ quan
	//sua co quan
	public function capNhatCoQuan(Request $request, $id)
	{
		$request->validate([
			'ten_co_quan' => ['required', 'string', 'max:255'],
			'dia_chi' => ['required', 'string', 'max:255'],
			'so_dt' => ['required', 'string', 'max:10'],
		], [
			'ten_co_quan.required' => 'Tên cơ quan không được để trống.',
			'ten_co_quan.string' => 'Tên cơ quan phải là một chuỗi.',
			'dia_chi.required' => 'Địa chỉ không được để trống.',
			'so_dt.required' => 'Số điện thoại không được để trống.',
			'so_dt.max' => 'Số điện thoại không được vượt quá 10 ký tự.',
		]);

		// Tìm cơ quan theo ID và cập nhật thông tin
		$coquan = CoQuan::findOrFail($id);
		$coquan->update([
			'ten_co_quan' => $request->ten_co_quan,
			'dia_chi' => $request->dia_chi,
			'so_dt' => $request->so_dt,
		]);

		return redirect()->route('dashboard')->with('success', 'Cập nhật cơ quan thành công.');
	}
	// Xóa cơ quan
	public function xoaCoQuan($id)
	{
		$coquan = CoQuan::findOrFail($id);  // Tìm cơ quan theo ID
		$coquan->delete();  // Xóa cơ quan

		return redirect()->route('coquan')->with('success', 'Xóa cơ quan thành công.');
	}

}
