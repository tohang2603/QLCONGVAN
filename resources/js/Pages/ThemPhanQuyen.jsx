import InputLabelV1 from '@/Components/InputLabelV1';
import TextInputV1 from '@/Components/TextInputV1';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from '@/Components/Button';
import { Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ThemCoQuan() {
	// Error
	const { errors } = usePage().props;
	// console.log(errors);
	const [values, setValues] = useState({
		ten_quyen: '',
		ten_ghi_tat: '',
		mo_ta: '',
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

	// Handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('ten_quyen', values.ten_co_quan);
		formData.append('ten_ghi_tat', values.dia_chi);
		formData.append('mo_ta', values.so_dt);
		router.post('/tao-phan-quyen', formData);
		// Log form data
		// console.log(selectedFile);
	};

	// Log
	return (
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý phân quyền</h2>}
		>
			<Head title='Thêm phân quyền' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					{/* <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
            <div className='p-6 text-gray-900'>You're logged in!</div>
          </div> */}
					<div>Thêm phân quyền</div>
					{/* Tên cơ quan */}
					<form onSubmit={handleSubmit}>
						<div className='gird gap-2'>
							<div>
								<InputLabelV1 className='mb-1' value={'Tên quyền'} />
								<TextInputV1 id='ten_quyen' type='text' value={values.ten_quyen} onChange={handleChange} />
								{errors && errors.ten_quyen && (
									<p className='text-sm italic text-red-500'>{errors.ten_quyen}</p>
								)}
							</div>
							{/* Địa chỉ */}
							<div>
								<InputLabelV1 className='mb-1' value={'Tên ghi tắt'} />
								<TextInputV1 id='ten_ghi_tat' type='text' value={values.ten_ghi_tat} onChange={handleChange} />
								{errors && errors.ten_ghi_tat && <p className='text-sm italic text-red-500'>{errors.ten_ghi_tat}</p>}
							</div>
							<div>
								<InputLabelV1 className='mb-1' value={'Mô tả'} />
								<TextInputV1 id='mo_ta' type='text' value={values.mo_ta} onChange={handleChange} />
								{errors && errors.mo_ta && <p className='text-sm italic text-red-500'>{errors.mo_ta}</p>}
							</div>
					
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
