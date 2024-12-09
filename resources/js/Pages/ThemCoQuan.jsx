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
		ten_co_quan: '',
		dia_chi: '',
		so_dt: '',
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
		formData.append('ten_co_quan', values.ten_co_quan);
		formData.append('dia_chi', values.dia_chi);
		formData.append('so_dt', values.so_dt);
		router.post('/tao-co-quan', formData);
		// Log form data
		// console.log(selectedFile);
	};

	// Log
	return (
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý cơ quan</h2>}
		>
			<Head title='Thêm cơ quan' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					{/* <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
            <div className='p-6 text-gray-900'>You're logged in!</div>
          </div> */}
					<div>Thêm Cơ Quan</div>
					{/* Tên cơ quan */}
					<form onSubmit={handleSubmit}>
						<div className='gird gap-2'>
							{/* Tên cơ quan */}
							<div>
								<InputLabelV1 className='mb-1' value={'Tên cơ quan'} />
								<TextInputV1 id='ten_co_quan' type='text' value={values.ten_co_quan} onChange={handleChange} />
								{errors && errors.ten_co_quan && (
									<p className='text-sm italic text-red-500'>{errors.ten_co_quan}</p>
								)}
							</div>
							{/* Địa chỉ */}
							<div>
								<InputLabelV1 className='mb-1' value={'Địa chỉ'} />
								<TextInputV1 id='dia_chi' type='text' value={values.dia_chi} onChange={handleChange} />
								{errors && errors.dia_chi && <p className='text-sm italic text-red-500'>{errors.dia_chi}</p>}
							</div>
							{/* Số điện thoại */}
							<div>
								<InputLabelV1 className='mb-1' value={'Số điện thoại'} />
								<TextInputV1 id='so_dt' type='text' value={values.so_dt} onChange={handleChange} />
								{errors && errors.so_dt && <p className='text-sm italic text-red-500'>{errors.so_dt}</p>}
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
