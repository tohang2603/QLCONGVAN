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
      header={<h2 className="text-xl font-normal leading-4 text-black">CHI TIẾT CÔNG VĂN</h2>}
    >
      <Head title="Chi tiết công văn" />
        <div className=" mt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Container for two tables */}
          <div className="grid gap-6 bg-white p-6 rounded-lg shadow-sm">
            {/* Table 1: Chi tiết công văn */}
            <div className="overflow-x-auto rounded-lg">
              <div className="grid grid-cols-4 bg-white rounded-lg shadow-sm divide-y divide-gray-300">
                {/* Header row */}
                <div className="px-3 py-3 text-white font-bold text-center bg-blue-600">Số công văn</div>
                <div className="px-3 py-3 text-white font-bold text-center bg-blue-600">Tiêu đề</div>
                <div className="px-3 py-3 text-white font-bold text-center bg-blue-600">Mô tả</div>
                <div className="px-3 py-3 text-white font-bold text-center bg-blue-600">Người tạo</div>
                {/* Nội dung */}
                <div className="px-3 py-2 text-center border-b">{congvan.so_cong_van}</div>
                <div className="px-3 py-2 text-center border-b">{congvan.tieu_de}</div>
                <div className="px-3 py-2 text-center border-b">{congvan.mo_ta}</div>
                <div className="px-3 py-2 text-center border-b">{congvan.nguoidung.name}</div>
              </div>
            </div>

            {/* Table 2: Lịch sử thao tác */}
            <div className="overflow-x-auto rounded-lg">
              <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm divide-y divide-gray-300">
                {/* Header row */}
                <div className="rounded-lg">
                  <div className="px-3 py-3 text-white font-bold text-center bg-blue-600 rounded-tl-lg">Lịch sử thao tác</div>
                  {congvan.lichsu.map((ls, index) => (
                    <div key={index} className="px-3 py-2 text-center border-b">{ls.nguoidung?.name} - {ls.trang_thai}</div>
                  ))}
                </div>
                {/* Nội dung */}
                <div>
                  <div className="px-3 py-3 text-white font-bold text-center rounded-tr-lg bg-blue-600">Thời gian</div>
                  {congvan.lichsu.map((ls, index) => (
                    <div key={index} className="px-3 py-2 text-center border-b">{ls.formattedDate}</div>
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
