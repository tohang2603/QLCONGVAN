<?php

namespace App\Http\Controllers;

use App\Models\Congvan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Storage;
use Carbon\Carbon;


class TimKiemController extends Controller
{
	protected $CongVanController;

	public function __construct(CongVanController $CongVanController)
	{
		$this->CongVanController = $CongVanController;
	}

	public function giaoDienTimKiem(Request $request)
	{
		$search = $request->input('search');//lay tu khoa tim kiem tu yeu cau
        $startDate = $request->input('startDate');// lay ngay bat dau
        $endDate = $request->input('endDate'); // lay ngay ket thuc

        $results = Congvan::query() // tao dieu kien tìm kiem voi so cv, tieu de, mota
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('so_cong_van', 'like', "%{$search}%")
                        ->orWhere('tieu_de', 'like', "%{$search}%")
                        ->orWhere('mo_ta', 'like', "%{$search}%");
                });
            })
            ->when($startDate && $endDate, function ($query, $startDate, $endDate) {
                $query->whereBetween('created_at', [Carbon::parse($startDate)->startOfDay(), Carbon::parse($endDate)->endOfDay()]);
            })
            ->orderBy('created_at', 'desc')
            ->get();
        return Inertia::render('TimKiem', [
            'cv' => $results,
            'search' => $search,
            'startDate' => $startDate,
            'endDate' => $endDate,
        ]);
    }

	public function timKiemCongVan(Request $request)
	{
		$search = $request->query('search');
		$startDate = $request->query('startDate');
		$endDate = $request->query('endDate');
	
		$results = Congvan::query()
			->when($search, function ($query) use ($search) {
				$query->where(function ($q) use ($search) {
					$q->where('so_cong_van', 'like', "%{$search}%")
						->orWhere('tieu_de', 'like', "%{$search}%")
						->orWhere('mo_ta', 'like', "%{$search}%");
				});
			})
			->when($startDate && $endDate, function ($query) use ($startDate, $endDate) {
				$query->whereBetween('created_at', [
					Carbon::parse($startDate)->startOfDay(),
					Carbon::parse($endDate)->endOfDay()
				]);
			})
			->orderBy('created_at', 'desc')
			->get()->map(function ($congvan) {
				$congvan->file = Storage::url($congvan->file);
				return $congvan;
			});
	
		return Inertia::render('TimKiem', [
			'cv' => $results,
			'search' => $search,
			'startDate' => $startDate,
			'endDate' => $endDate,
		]);
	}
}
