import ButtonLink from '@/Components/ButtonLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import ListCoQuan from '@/Components/ListCoQuan';

export default function CoQuan({ dscoquan }) {
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
			header={<h2 className='text-xl font-normal leading-4 text-black'>QUẢN LÝ CƠ QUAN</h2>}
		>
			<Head title='Quản lý cơ quan' />
			<div className='py-12 w-full bg-gradient-to-r from-blue-400 to-blue-200'>
				<div className=' mx-auto max-w-7x1 sm:px-6 lg:px-8'>
					<div className=' overflow-hidden bg-white shadow-lg sm:rounded-lg'>
					<div>
						<ButtonLink className=' mt-6 ml-6 px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600' 
						href={route('them-co-quan')}>
							Thêm cơ quan
						</ButtonLink>
						<div className='p-6'>
							<div className='grid grid-cols-4 content-center justify-items-center  bg-blue-600 py-2 text-white font-medium rounded-t-lg'>
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
								<div className='text-center mt-3'>Không có cơ quan nào.</div>
							) : (
								dscoquan.map((cq, index) => (
									<ListCoQuan index={index} key={cq.id} cq={cq} />
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