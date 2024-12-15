<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Phanquyen;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class PhanQuyenController extends Controller
{
	// Giao diện thêm quyền
	public function themPhanQuyen(Request $request): Response
	{
		return Inertia::render('ThemPhanQuyen', [
		]);
	}

	public function giaoDienPhanQuyen(): Response
	{
		$dsphanquyen = $this->layTatCaPhanQuyen(); //gan ds co quan
		return Inertia::render('PhanQuyen', ['dsphanquyen' => $dsphanquyen]);
	}

	public function taoPhanQuyen(Request $request)
	{
		$request->validate([
			'ten_quyen' => ['required', 'string', 'max:255'],
			'ten_ghi_tat' => ['required', 'string', 'max:50'],
			'mo_ta' => ['nullable', 'string', 'max:255'],
		], [
			'ten_quyen.required' => 'Tên quyền không được để trống.',
			'ten_quyen.string' => 'Tên quyền phải là một chuỗi.',
			'ten_ghi_tat.required' => 'Tên ghi tắt không được để trống.',
			'ten_ghi_tat.string' => 'Tên ghi tắt phải là một chuỗi.',
			'mo_ta.string' => 'Mô tả phải là một chuỗi.',
			'mo_ta.max' => 'Mô tả không được quá 255 ký tự.',
		]);

		// Tạo phân quyền trong CSDL
		$phanquyen = Phanquyen::create([
			'ten_quyen' => $request->ten_quyen,
			'ten_ghi_tat' => $request->ten_ghi_tat,
			'mo_ta' => $request->mo_ta,
		]);

		return redirect()->route('phanquyen')->with('success', 'Thêm phân quyền thành công.');
	}

	// Lấy tất cả phân quyền
	public function layTatCaPhanQuyen()
	{
		$phanquyen = PhanQuyen::all();  // Lấy tất cả các phân quyền
		return $phanquyen;
	}

	// Sửa phân quyền
	public function suaPhanQuyen($id)
	{
		return Inertia::render('SuaPhanQuyen', [
			'phanquyen' => $this->LayThongTinPhanQuyen($id),
		]);
	}
	public function LayThongTinPhanQuyen($id)
	{
		$phanquyen = Phanquyen::find($id);
		return $phanquyen;
	}
	// Cập nhật phân quyền
	public function capNhatPhanQuyen(Request $request, $id)
	{
		// dd($request->all());
		$request->validate([
			'ten_quyen' => ['required', 'string', 'max:255'],
			'ten_ghi_tat' => ['required', 'string', 'max:50'],
			'mo_ta' => ['nullable', 'string', 'max:255'],
		], [
			'ten_quyen.required' => 'Tên quyền không được để trống.',
			'ten_quyen.string' => 'Tên quyền phải là một chuỗi.',
			'ten_ghi_tat.required' => 'Tên ghi tắt không được để trống.',
			'ten_ghi_tat.string' => 'Tên ghi tắt phải là một chuỗi.',
			'mo_ta.string' => 'Mô tả phải là một chuỗi.',
			'mo_ta.max' => 'Mô tả không được quá 255 ký tự.',
		]);

		// Tìm phân quyền theo ID và cập nhật thông tin
		$phanquyen = PhanQuyen::findOrFail($id);
		$phanquyen->update([
			'ten_quyen' => $request->ten_quyen,
			'ten_ghi_tat' => $request->ten_ghi_tat,
			'mo_ta' => $request->mo_ta,
		]);

		return redirect()->route('phanquyen')->with('success', 'Cập nhật phân quyền thành công.');
	}

	// Xóa phân quyền
	public function xoaPhanQuyen($id)
	{
		$phanquyen = PhanQuyen::findOrFail($id);  // Tìm phân quyền theo ID
		$phanquyen->delete();  // Xóa phân quyền

		return redirect()->route('phanquyen')->with('success', 'Xóa phân quyền thành công.');
	}
}
