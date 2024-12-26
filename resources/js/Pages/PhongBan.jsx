import ButtonLink from '@/Components/ButtonLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import ListPhongBan from '@/Components/ListPhongBan';

export default function PhongBan({ dsphongban }) {
    const { errors, flash } = usePage().props;

    // Toast notifications
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if (flash.error) {
            toast.error(flash.error, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [flash]);

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-normal leading-4 text-black  hover:text-blue-700">QUẢN LÝ PHÒNG BAN</h2>}
        >
            <Head title="Quản lý phòng ban" />

            <div className="py-12 w-full bg-gradient-to-r from-blue-400 to-blue-200">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                        <div>
                            <ButtonLink className="mt-6 ml-6 px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" href={route('them-phong-ban')}>
                                Thêm phòng ban
                            </ButtonLink>
                            <div className="p-6">
                                <div className="grid grid-cols-6 content-center justify-items-center bg-blue-600 py-2 text-white font-medium rounded-t-lg">
                                    <div>
                                        <p>Tên phòng ban</p>
                                    </div>
                                    <div>
                                        <p>Mô tả</p>
                                    </div>
                                    <div>
                                        <p>Người quản lý</p>
                                    </div>
                                    <div>
                                        <p>Địa chỉ</p>
                                    </div>
                                    <div>
                                        <p>Số điện thoại</p>
                                    </div>
                                    <div>
                                        <p>Thao tác</p>
                                    </div>
                                </div>
                                {dsphongban.length === 0 ? (
                                    <div className="text-center mt-3">Không có phòng ban nào.</div>
                                ) : (
                                    dsphongban.map((pb, index) => (
                                        <ListPhongBan index={index} key={pb.id} pb={pb} />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
