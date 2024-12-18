import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';

const ChiTietCongVan = ({ congvan }) => {
  console.log(congvan);

  // Chuyển đổi thời gian từ định dạng ISO sang thời gian Việt Nam
  congvan.lichsu.forEach(ls => {
    const date = new Date(ls.created_at);
    const options = { timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    ls.formattedDate = date.toLocaleString('vi-VN', options);
  });

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Chi tiết công văn</h2>}
    >
      <Head title="Chi tiết công văn" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-lg">
            {/* Chi tiết công văn */}
            <div className="grid grid-cols-4 bg-white rounded-lg shadow-sm">
              {/* Header row */}
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Số công văn</div>
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Tiêu đề</div>
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Mô tả</div>
              <div className="px-3 py-3 text-white font-bold text-center bg-sky-500">Người tạo</div>
              {/* Nội dung */}
              <div className="px-3 py-2 text-center">{congvan.so_cong_van}</div>
              <div className="px-3 py-2 text-center">{congvan.tieu_de}</div>
              <div className="px-3 py-2 text-center">{congvan.mo_ta}</div>
              <div className="px-3 py-2 text-center">{congvan.nguoidung.name}</div>
            </div>
            {/* Lịch sử */}
            <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm mt-3">
              {/* Header row */}
              <div className="rounded-lg">
                <div className="px-3 py-3 text-white font-bold text-center bg-sky-500 rounded-tl-lg">Lịch sử thao tác</div>
                {congvan.lichsu.map((ls, index) => (
                  <div key={index} className="px-3 py-2 text-center">{ls.nguoidung?.name} - {ls.trang_thai}</div>
                ))}
              </div>
              {/* Nội dung */}
              <div>
                <div className="px-3 py-3 text-white font-bold text-center rounded-tr-lg bg-sky-500">Thời gian</div>
                {congvan.lichsu.map((ls, index) => (
                  <div key={index} className="px-3 py-2 text-center">{ls.formattedDate}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ChiTietCongVan;