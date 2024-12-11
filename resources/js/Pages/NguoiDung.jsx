import ButtonLink from '@/Components/ButtonLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import ListNguoiDung from '@/Components/ListNguoiDung';

export default function NguoiDung({ dsusers }) {
    // console.log(dscoquan) //trave đúng dữ liệu mong muốn hay không
	const { errors, flash } = usePage().props;
	//	Toast
	useEffect(() => {
		// Success
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
		// Error
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
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý người dùng</h2>}
		>
			<Head title='Nhân sự' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div>
						<ButtonLink className='mb-4 bg-green-500' href={route('them-nguoi-dung')}>
							Thêm người dùng
						</ButtonLink>
						<div>
							<div className='grid grid-cols-4 content-center justify-items-center rounded-t-lg bg-sky-400 py-1 text-white'>
								<div>
									<p>Họ và tên</p>
								</div>
								<div>
									<p>Gmail</p>
								</div>
								<div>
									<p>Địa chỉ</p>
								</div>
								<div>
									<p>Số điện thoại</p>
								</div>
								<div>
									<p>Mã quyền</p>
								</div>
                                <div>
									<p>Thao tác</p>
								</div>
							</div>
							{dsusers.length === 0 ? (
								<div className='text-center mt-3'>Không có người dùng nào.</div>
							) : (
								dsusers.map((us, index) => (
									<ListNguoiDung index={index} key={us.id} us={us} />
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}