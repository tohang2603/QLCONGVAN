import InputLabelV1 from '@/Components/InputLabelV1';
import TextInputV1 from '@/Components/TextInputV1';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from '@/Components/Button';
import { Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ThemNguoiDung() {
	// Error
	const { errors } = usePage().props;
	// console.log(errors);
	const [values, setValues] = useState({
		name: '',
		email: '',
		address: '',
        phone: '',
        id_ma_quyen: '',
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
		formData.append('name', values.name);
		formData.append('email', values.email);
		formData.append('address', values.address);
        formData.append('phone', values.phone);
        formData.append('address', values.phanquyen.id_ma_quyen);
		router.post('/tao-co-quan', formData);
		// Log form data
		// console.log(selectedFile);
	};

	// Log
	return (
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý nhân sự</h2>}
		>
			<Head title='Thêm người dùng' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					{/* <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
            <div className='p-6 text-gray-900'>You're logged in!</div>
          </div> */}
					<div>Thêm Người Dùng</div>
					{/* Tên cơ quan */}
					<form onSubmit={handleSubmit}>
						<div className='gird gap-2'>
							{/* Tên cơ quan */}
							<div>
								<InputLabelV1 className='mb-1' value={'Họ và tên'} />
								<TextInputV1 id='name' type='text' value={values.name} onChange={handleChange} />
								{errors && errors.name && (
									<p className='text-sm italic text-red-500'>{errors.name}</p>
								)}
							</div>
							{/* Địa chỉ */}
							<div>
								<InputLabelV1 className='mb-1' value={'Email'} />
								<TextInputV1 id='email' type='text' value={values.email} onChange={handleChange} />
								{errors && errors.email && <p className='text-sm italic text-red-500'>{errors.email}</p>}
							</div>
							{/* Số điện thoại */}
							<div>
								<InputLabelV1 className='mb-1' value={'Địa chỉ'} />
								<TextInputV1 id='address' type='text' value={values.address} onChange={handleChange} />
								{errors && errors.address && <p className='text-sm italic text-red-500'>{errors.address}</p>}
							</div>
                            <div>
								<InputLabelV1 className='mb-1' value={'Số điện thoại'} />
								<TextInputV1 id='address' type='text' value={values.phone} onChange={handleChange} />
								{errors && errors.phone && <p className='text-sm italic text-red-500'>{errors.phone}</p>}
							</div>
                            <div>
								<InputLabelV1 className='mb-1' value={'Tên quyền'} />
								<TextInputV1 id='address' type='text' value={values.phone} onChange={handleChange} />
								{errors && errors.phone && <p className='text-sm italic text-red-500'>{errors.phone}</p>}
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
