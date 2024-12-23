import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Actived() {
	return (
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý công văn</h2>}
		>
			<Head title='Kích hoạt tài khoản' />

			<div>
				Tài khoản của bạn chưa được kích hoạt!
			</div>
		</AuthenticatedLayout>
	);
}
