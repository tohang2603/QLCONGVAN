import InputLabelV1 from '@/Components/InputLabelV1';
import TextInputV1 from '@/Components/TextInputV1';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from '@/Components/Button';
import { Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ThemCongVan() {
	// Error
	const { errors } = usePage().props;
	// console.log(errors);
	const [values, setValues] = useState({
		socongvan: '',
		tieude: '',
		mota: '',
	});

	// Handle change input
	const handleChange = (e) => {
		const key = e.target.id;
		const value = e.target.value;
		setValues((values) => ({
			...values,
			[key]: value,
		}));
	};
	const [selectedFile, setSelectedFile] = useState(null);
	// Handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('socongvan', values.socongvan);
		formData.append('tieude', values.tieude);
		formData.append('mota', values.mota);
		formData.append('file', selectedFile);
		router.post('/tao-cong-van', formData);
		// Log form data
		// console.log(selectedFile);
	};
	// Log
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
					{/* Số công văn */}
					<form onSubmit={handleSubmit} encType='multipart/form-data'>
						<div className='gird gap-2'>
							{/* Số công văn */}
							<div>
								<InputLabelV1 className='mb-1' value={'Số công văn'} />
								<TextInputV1 id='socongvan' type='text' value={values.socongvan} onChange={handleChange} />
								{errors && errors.socongvan && (
									<p className='text-sm italic text-red-500'>{errors.socongvan}</p>
								)}
							</div>
							{/* Tiêu đề */}
							<div>
								<InputLabelV1 className='mb-1' value={'Tiêu đề'} />
								<TextInputV1 id='tieude' type='text' value={values.tieude} onChange={handleChange} />
								{errors && errors.tieude && <p className='text-sm italic text-red-500'>{errors.tieude}</p>}
							</div>
						</div>
						<div>
							{/* Mô tả */}
							<InputLabelV1 className='mb-1' value={'Mô tả'} />
							<TextInputV1 id='mota' type='text' value={values.mota} onChange={handleChange} />
							{errors && errors.mota && <p className='text-sm italic text-red-500'>{errors.mota}</p>}
						</div>
						{/* Tệp */}
						<div>
							<InputLabelV1 className='mb-1' value={'Tệp'} />
							<input
								type='file'
								className='file-input file-input-bordered mt-1 w-full max-w-xs'
								onChange={(e) => setSelectedFile(e.target.files[0])}
							/>
							{errors && errors.file && <p className='text-sm italic text-red-500'>{errors.file}</p>}
						</div>
						<Button className='mt-3' type='submit'>
							Thêm
						</Button>
					</form>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
