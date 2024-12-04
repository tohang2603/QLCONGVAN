import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({dscongvan}) {
	// console.log(dscongvan)
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
					<Link href={route('them-cong-van')}>
					Thêm công văn
					</Link>
					<div>
						{
							dscongvan.map((cv)=>(
								<div key={cv.id} className='grid gap-2'>
									<div><p>{cv.so_cong_van}</p></div>
									<div><p>{cv.tieu_de}</p></div>
									<div><p>{cv.mo_ta}</p></div>
									<div><p>{cv.tieu_de}</p></div>
									<div><p>{cv.nguoidung.name}</p></div>
								</div>								
							))
						}
					</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
