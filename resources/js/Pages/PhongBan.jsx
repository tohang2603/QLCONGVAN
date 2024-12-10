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
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Quản lý phòng ban</h2>}
        >
            <Head title="Manage Departments" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div>
                        <ButtonLink className="mb-4 bg-green-500" href={route('them-phong-ban')}>
                            Thêm phòng ban
                        </ButtonLink>
                        <div>
                            <div className="grid grid-cols-5 content-center justify-items-center rounded-t-lg bg-sky-400 py-1 text-white">
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
        </AuthenticatedLayout>
    );
}
