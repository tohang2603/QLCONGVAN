<?php

namespace App\Http\Controllers;

use App\Models\Congvan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Storage;

class TimKiemController extends Controller
{
	protected $CongVanController;

	public function __construct(CongVanController $CongVanController)
	{
		$this->CongVanController = $CongVanController;
	}

	public function giaoDienTimKiem(Request $request)
	{
		// Validate the search input
		$request->validate([
			'search' => ['nullable', 'string', 'max:255'],
		], [
			'search.string' => 'Từ khóa tìm kiếm phải là chuỗi.',
			'search.max' => 'Từ khóa không được vượt quá 255 ký tự.',
		]);

		// Get the search term from the request
		$search = $request->input('search');

		// Query the Congvan model
		$results = Congvan::query()
			->when($search, function ($query, $search) {
				$query->where('so_cong_van', 'like', "%{$search}%")
					->orWhere('tieu_de', 'like', "%{$search}%")
					->orWhere('mo_ta', 'like', "%{$search}%");
			})
			->orderBy('created_at', 'desc')
			->get();

		// Return results to the React component
		return Inertia::render('TimKiem', [
			'cv' => $results,
			'search' => $search, // Pass the search term to the frontend if needed
		]);
	}

	public function timKiemCongVan(Request $request)
	{
		// Lấy giá trị của query string 'query'
		$search = $request->query('search');
		// chuyển đổi search thành chuỗi
		$search = (string) $search;
		// Query the Congvan model
		$results = Congvan::query()
			->when($search, function ($query, $search) {
				$query->where('so_cong_van', 'like', "%{$search}%")
					->orWhere('tieu_de', 'like', "%{$search}%")
					->orWhere('mo_ta', 'like', "%{$search}%");
			})
			->orderBy('created_at', 'desc')
			->get()->map(function ($congvan) {
				$congvan->file = Storage::url($congvan->file);
				return $congvan;
			});
		// Return results to the React component
		return Inertia::render('TimKiem', [
			'cv' => $results,
			'search' => $search, // Pass the search term to the frontend if needed
		]);
	}
}
