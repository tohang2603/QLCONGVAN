import ButtonLink from '@/Components/ButtonLink';
import ButtonSearch from '@/Components/ButtonSearch';
import { Head, Link, usePage } from '@inertiajs/react';
import ListCongVan from '@/Components/ListCongVan';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function Dashboard({ dscongvan }) {
	const { errors, flash } = usePage().props;

	// Toast thông báo thành công và lỗi
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
   			header={<h2 className="text-xl font-normal text-black  hover:text-blue-700">QUẢN LÝ CÔNG VĂN</h2>}
			>
			<Head title='Quản lý công văn' />
			<div className='py-12 w-full bg-gradient-to-r from-blue-400 to-blue-200'>
				<div className='mx-auto max-w-7x1 sm:px-6 lg:px-8'>
					<div className='overflow-hidden bg-white shadow-lg sm:rounded-lg'>
						<div className='p-6 text-gray-900'>
							<ButtonSearch />
						</div>
						<ButtonLink
							className=" ml-6 px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
							href={route('them-cong-van')}
						>
							Thêm công văn
						</ButtonLink>
						<div className='overflow-hidden bg-white shadow-lg rounded-lg'>
							<div className='p-6'>
								<div className='grid grid-cols-5 gap-4 content-center justify-items-center bg-blue-600 py-2 text-white font-medium rounded-t-lg'> 
									<div>
										<p>Số công văn</p>
									</div>
									<div>
										<p>Tiêu đề</p>
									</div>
									<div>
										<p>Mô tả</p>
									</div>
									<div>
										<p>Người tạo</p>
									</div>
									<div>
										<p>Thao tác</p>
									</div>
								</div>
								{dscongvan.length === 0 ? (
									<div className='text-center mt-4 text-gray-500'>Không có công văn nào</div>
								) : (
									dscongvan.map((cv, index) => (
										<ListCongVan
											index={index}
											key={cv.id}
											cv={cv}
											className='hover:bg-yellow-50'
										/>
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
