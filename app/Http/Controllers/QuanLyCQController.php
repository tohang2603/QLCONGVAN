<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
class QuanLyCQController extends Controller
{
     // Khai báo
     protected $CoquanController;

     public function __construct(CoQuanController $CoquanController) {
         $this->CoQuanController = $CoquanController;
     }
 
     public function coQuan(Request $request): Response
     {
         // Lấy tất cả các bộ phận từ BoPhanController
         $dsCoQuan = $this->CoquanController->layThongTinCoQuan($request);
 
         // Render giao diện TrangChuCQ với danh sách các bộ phận
         return Inertia::render('coquan', [
             'status' => session('status'),
             'dscoquan' => $dsCoQuan,
         ]);
     }
}
