import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function NhanSu({ nhanSu }) {
    const [chuaKichHoat, setChuaKichHoat] = useState(nhanSu.chuaKichHoat);
    const [nhanSuAll, setNhanSuAll] = useState(nhanSu.tatCa);

    const { post } = useForm({});

    const handleActivate = (nhanSu) => {
        post(route("kich-hoat", { id: nhanSu.id }), {
            onSuccess: () => {
                alert("Kích hoạt thành công!");
                window.location.reload(); // Làm mới trang để cập nhật danh sách
            },
            onError: (errors) => {
                console.error("Lỗi khi kích hoạt:", errors);
                alert("Không thể kích hoạt tài khoản.");
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-normal leading-4 text-black">Quản lý nhân sự</h2>}
        >
            <Head title="Quản lí nhân sự" />
            <div className='py-12 w-full bg-gradient-to-r from-blue-400 to-blue-200'>
                <div className='mx-auto max-w-7x1 sm:px-6 lg:px-8'>
                    <div className='overflow-hidden bg-white shadow-lg sm:rounded-lg'>
                        <div className="py-6">
                            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                                <h3 className="text-lg font-semibold">Tài khoản cần kích hoạt</h3>
                                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mt-4">
                                    <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] content-center justify-items-center bg-sky-400 py-2 text-white font-medium">
                                        <div className="px-2">ID</div>
                                        <div className="px-2">Họ và tên</div>
                                        <div className="px-2">Email</div>
                                        <div className="px-2">Chức vụ</div>
                                        <div className="px-2">Điện thoại</div>
                                        <div className="px-2">Hành động</div>
                                    </div>
                                    {chuaKichHoat.map((item, index) => (
                                        <div key={index} className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] content-center justify-items-center bg-white py-2 text-gray-900 hover:bg-sky-100">
                                            <div className="px-2">{item.id}</div>
                                            <div className="px-2">{item.name}</div>
                                            <div className="px-2">{item.email}</div>
                                            <div className="px-2">{item.phan_quyen.ten_quyen}</div>
                                            <div className="px-2">{item.phone}</div>
                                            <div className="px-2">
                                                <Link as="button" method="put" href={`/kich-hoat/${item.id}`} className="text-indigo-600 hover:text-indigo-800">Kích hoạt</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="mt-5 text-lg font-semibold">Tài khoản đã kích hoạt</h3>
                                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mt-4">
                                    {nhanSuAll.map((item, index) => (
                                        <div key={index} className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] content-center justify-items-center bg-white py-2 text-gray-900 hover:bg-sky-100">
                                            <div className="px-2">{item.id}</div>
                                            <div className="px-2">{item.name}</div>
                                            <div className="px-2">{item.email}</div>
                                            <div className="px-2">{item.phan_quyen.ten_quyen}</div>
                                            <div className="px-2">{item.phone}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
