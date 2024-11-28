import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';

export default function ThemCongVan() {
	const { maCongVan, maPhongBan, post, progress } = useForm({
		name: null,
		avatar: null,
	});

	function submit(e) {
		e.preventDefault();
		post('/users');
	}
	return (
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý</h2>}
		>
			<Head title='Thêm công văn' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					{/* <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
            <div className='p-6 text-gray-900'>You're logged in!</div>
          </div> */}
					<div>Thêm Công Văn</div>
					{/*  */}
					<form onSubmit={submit}>
						<input type='text' value={data.name} onChange={(e) => setData('name', e.target.value)} />
						<input type='file' value={data.avatar} onChange={(e) => setData('avatar', e.target.files[0])} />
						{progress && (
							<progress value={progress.percentage} max='100'>
								{progress.percentage}%
							</progress>
						)}
						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
