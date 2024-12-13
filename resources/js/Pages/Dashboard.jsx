import ButtonLink from '@/Components/ButtonLink';
import ButtonSearch from '@/Components/ButtonSearch';
import { Head, Link, usePage } from '@inertiajs/react';
import ListCongVan from '@/Components/ListCongVan';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function Dashboard({ dscongvan }) {
	const { errors, flash } = usePage().props;
	//	Toast thông báo thành công và lỗi
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

	//Hàm xử lý tìm kiếm
    const handleSearch = (searchKeyword) => {
        router.get(route('tim-kiem-tat-ca', { search: searchKeyword }));
    };

	return (
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý công văn</h2>}
		>
			<Head title='Dashboard' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					{/* <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
						<div className='p-6 text-gray-900'>You're logged in!</div>
					</div> */}
					<div>
						<ButtonLink className='mb-4 bg-green-500' href={route('them-cong-van')}>
							Thêm công văn
						</ButtonLink>
						<ButtonSearch onSearch={handleSearch} />
						<div>
							<div className='grid grid-cols-5 content-center justify-items-center rounded-t-lg bg-sky-400 py-1 text-white'>
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
								<div className='text-center mt-3'>Không có công văn nào</div>
							) : (
								dscongvan.map((cv, index) => (
									<ListCongVan index={index} key={cv.id} cv={cv} />
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
