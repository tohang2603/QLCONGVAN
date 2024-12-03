import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({dscongvan}) {
	console.log(dscongvan)
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
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
