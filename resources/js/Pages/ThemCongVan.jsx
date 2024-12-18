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
			header={<h2 className='text-xl font-semibold leading-tight text-black'>Thêm công văn</h2>}
		>
			<div className='py-12'>
	<div className='max-w-7xl sm:px-6 lg:px-8'>
		<form onSubmit={handleSubmit} encType='multipart/form-data'>
			<div className='grid gap-6 mb-6'>
				{/* Số công văn */}
				<div>
					<InputLabelV1 className='mb-1' value={'Số công văn'} />
					<TextInputV1
						id='socongvan'
						type='text'
						value={values.socongvan}
						onChange={handleChange}
						className='p-2 border border-gray-300 rounded-lg w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out'
					/>
					{errors && errors.socongvan && (
						<p className='text-sm italic text-red-500'>{errors.socongvan}</p>
					)}
				</div>
				{/* Tiêu đề */}
				<div>
					<InputLabelV1 className='mb-1' value={'Tiêu đề'} />
					<TextInputV1
						id='tieude'
						type='text'
						value={values.tieude}
						onChange={handleChange}
						className='p-2 border border-gray-300 rounded-lg w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out'
					/>
					{errors && errors.tieude && (
						<p className='text-sm italic text-red-500'>{errors.tieude}</p>
					)}
				</div>
			</div>

			{/* Mô tả */}
			<div className='mb-4'>
				<InputLabelV1 className='mb-1' value={'Mô tả'} />
				<TextInputV1
					id='mota'
					type='text'
					value={values.mota}
					onChange={handleChange}
					className='p-2 border border-gray-300 rounded-lg w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out'
				/>
				{errors && errors.mota && <p className='text-sm italic text-red-500'>{errors.mota}</p>}
			</div>

			{/* Tệp */}
			<div className='mb-4 rounded w-1/4'>
				<InputLabelV1 className='mb-2' value={'Tệp'} />
				<input
					type='file'
					className='file-input file-input-bordered mt-1 w-full max-w-xs p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out'
					onChange={(e) => setSelectedFile(e.target.files[0])}
				/>
				{errors && errors.file && <p className='text-sm italic text-red-500'>{errors.file}</p>}
			</div>

			<Button
				className='mt-3 py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition duration-150 ease-in-out'
				type='submit'
			>
				Thêm công văn
			</Button>
		</form>
	</div>
	</div>
		</AuthenticatedLayout>
	);
}
