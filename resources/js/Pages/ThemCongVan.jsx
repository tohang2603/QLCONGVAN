import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';

export default function ThemCongVan() {
	const { data, setData, post, progress, errors } = useForm({
		socongvan:'',
		tieude:'',
		mota:'',
		file: null,
	});

	function submit(e) {
		e.preventDefault();
		post('/tao-cong-van');
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
						<input type='text' value={data.socongvan} onChange={(e) => setData('socongvan', e.target.value)} />
						<input type='text' value={data.tieude} onChange={(e) => setData('tieude', e.target.value)} />
						<input type='text' value={data.mota} onChange={(e) => setData('mota', e.target.value)} />
						{/* <input type='file' value={data.file} onChange={(e) => setData('file', e.target.files[0])} />  */}
						{progress && (
							<progress value={progress.percentage} max='100'>
								{progress.percentage}%
							</progress>
						)}
						<button type='submit'>Tải tệp lên</button>
					</form>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
