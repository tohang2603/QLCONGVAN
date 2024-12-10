import ButtonLink from '@/Components/ButtonLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import ListPhanQuyen from '@/Components/ListPhanQuyen';

export default function CoQuan({ dsphanquyen }) {
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
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý phân quyền</h2>}
		>
			<Head title='Manage Organizations' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div>
						<ButtonLink className='mb-4 bg-green-500' href={route('them-co-quan')}>
							Thêm phân quyền
						</ButtonLink>
						<div>
							<div className='grid grid-cols-4 content-center justify-items-center rounded-t-lg bg-sky-400 py-1 text-white'>
								<div>
									<p>Tên quyền</p>
								</div>
								<div>
									<p>Tên ghi tắt</p>
								</div>
								<div>
									<p>Mô tả</p>
								</div>
								<div>
									<p>Thao tác</p>
								</div>
							</div>
							{dsphanquyen.length === 0 ? (
								<div className='text-center mt-3'>Không có cơ quan nào.</div>
							) : (
								dscoquan.map((pq, index) => (
									<ListPhanQuyen index={index} key={pq.id} cq={pq} />
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}