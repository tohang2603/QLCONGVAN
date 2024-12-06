import Button from '@/Components/Button';
import ListCongVan from '@/Components/ListCongVan';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ dscongvan }) {
	// console.log(dscongvan);
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
						<Button className='mb-4 bg-green-500'>
							<Link href={route('them-cong-van')}>Thêm công văn</Link>
						</Button>
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
							{dscongvan.map((cv, index) => (
								<ListCongVan index={index} key={cv.id} cv={cv} />
							))}
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
