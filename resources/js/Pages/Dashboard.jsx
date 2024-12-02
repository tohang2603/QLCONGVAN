import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
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
						{/* <NavLink href={route('cong-van')} active={route().current('cong-van')}>
							Công văn
						</NavLink>
						<NavLink href={route('danh-sach-co-quan')} active={route().current('dashboard')}>
							Danh sách cơ quan
						</NavLink>
						<NavLink href={route('danh-sach-phong-ban')} active={route().current('dashboard')}>
							Danh sách phòng ban
						</NavLink>
						<NavLink href={route('danh-sach-nhan-vien')} active={route().current('dashboard')}>
							Danh sách nhân viên
						</NavLink>
						<NavLink href={route('lich-su-chinh-sua')} active={route().current('dashboard')}>
							Lịch sử chỉnh sửa
						</NavLink>
						<NavLink href={route('tim-kiem-nang-cao')} active={route().current('dashboard')}>
							Tìm kiếm nâng cao
						</NavLink> */}
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
