import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
	return (
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý</h2>}
		>
			<Head title='Dashboard' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					{/* <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
						<div className='p-6 text-gray-900'>You're logged in!</div>
					</div> */}
					<div>
						<NavLink href={route('them-cong-van')} active={route().current('dashboard')}>
							Thêm công văn
						</NavLink>
						<NavLink href={route('loai-cong-van')} active={route().current('loai-cong-van')}>
							Thêm công văn
						</NavLink>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
