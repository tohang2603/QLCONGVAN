import ButtonLink from '@/Components/ButtonLink';
import ListCoQuan from '@/Components/ListCoQuan';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function NewPageCơQuan({ dscoquan }) {
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
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý cơ quan</h2>}
		>
			<Head title='Manage Organizations' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div>
						<ButtonLink className='mb-4 bg-green-500' href={route('them-co-quan')}>
							Thêm cơ quan
						</ButtonLink>
						<div>
							<div className='grid grid-cols-5 content-center justify-items-center rounded-t-lg bg-sky-400 py-1 text-white'>
								<div>
									<p>Mã cơ quan</p>
								</div>
								<div>
									<p>Tên cơ quan</p>
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
							{dscoquan.length === 0 ? (
								<div className='text-center mt-3'>Không có cơ quan nào</div>
							) : (
								dscoquan.map((cq, index) => (
									<ListCoQuan index={index} key={cq.id} cq={cq} />
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
