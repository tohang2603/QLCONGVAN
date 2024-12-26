import InputLabelV1 from '@/Components/InputLabelV1';
import TextInputV1 from '@/Components/TextInputV1';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from '@/Components/Button';
import { Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ThemCoQuan() {
	// Error
	const { errors } = usePage().props;
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
	};

	// Log
	return (
		<AuthenticatedLayout
			header={<h2 className='text-xl font-normal text-black  hover:text-blue-700'>THÊM CƠ QUAN</h2>}
		>
			<Head title='Thêm cơ quan' />

			<div className='py-12 w-full bg-gradient-to-r from-blue-500 to-blue-300'>
				<div className='mx-auto max-w-4xl sm:px-6 lg:px-8'>
					<div className='bg-white p-8 rounded-lg shadow-md'>
						<h3 className='text-lg font-semibold mb-4'>Nhập thông tin cơ quan</h3>
						{/* Tên cơ quan */}
						<form onSubmit={handleSubmit}>
							<div className='grid gap-8 mb-6'>
								{/* Tên cơ quan */}
								<div>
									<InputLabelV1 className='mb-2' value={'Tên cơ quan'} />
									<TextInputV1 id='ten_co_quan' type='text'
										value={values.ten_co_quan} onChange={handleChange}
										className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
										placeholder="Nhập tên cơ quan" />
									{errors && errors.ten_co_quan && (
										<p className='text-sm italic text-red-500'>{errors.ten_co_quan}</p>
									)}
								</div>
								{/* Địa chỉ */}
								<div>
									<InputLabelV1 className='mb-2' value={'Địa chỉ'} />
									<TextInputV1 id='dia_chi' type='text' value={values.dia_chi} onChange={handleChange}
										className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
										placeholder="Nhập địa chỉ" />
									{errors && errors.dia_chi && <p className='text-sm italic text-red-500'>{errors.dia_chi}</p>}
								</div>
								{/* Số điện thoại */}
								<div>
									<InputLabelV1 className='mb-2' value={'Số điện thoại'} />
									<TextInputV1 id='so_dt' type='text' value={values.so_dt} onChange={handleChange}
										className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
										placeholder="Nhập số điện thoại" />
									{errors && errors.so_dt && <p className='text-sm italic text-red-500'>{errors.so_dt}</p>}
								</div>
							</div>
							<div className='flex justify-end'>
								<Button className='px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600'>
									Thêm
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
