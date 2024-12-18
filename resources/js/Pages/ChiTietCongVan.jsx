import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';

const ChiTietCongVan = ({ congvan }) => {
  console.log(congvan);

// Chuyển đổi thời gian từ định dạng ISO sang thời gian Việt Nam
const date = new Date(congvan.created_at);
const options = { timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedDate = date.toLocaleString('vi-VN', options);

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Chi tiết công văn</h2>}
    >
      <Head title="Chi tiết công văn" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-lg">
            <div className="grid grid-cols-4 bg-white rounded-lg shadow-sm">
              {/* Header row */}
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Số công văn</div>
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Tiêu đề</div>
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Mô tả</div>
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Người tạo</div>
              
            </div>
            <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm">
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Lịch sử thao tác</div>
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Thời gian</div>
            </div>
            <div className="grid grid-cols-4 bg-white rounded-lg shadow-sm">
              {/* Content rows */}
              <div className="px-3 py-2 text-center">{congvan.so_cong_van}</div>
              <div className="px-3 py-2 text-center">{congvan.tieu_de}</div>
              <div className="px-3 py-2 text-center">{congvan.mo_ta}</div>
              <div className="px-3 py-2 text-center">{congvan.nguoidung.name}</div> 

              <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm"></div>
              {congvan.lichsu.map((ls) => (
                  <div className="px-3 py-2 text-center">{ls.nguoidung?.name} - {ls.trang_thai}</div>
              ))}
              {congvan.lichsu.map((ls) => (                
                  <div className="px-3 py-2 text-center">{formattedDate}</div>        
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ChiTietCongVan;