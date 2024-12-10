import InputLabelV1 from '@/Components/InputLabelV1';
import TextInputV1 from '@/Components/TextInputV1';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from '@/Components/Button';
import { Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ThemPhongBan() {
	// Errors
	const { errors } = usePage().props;

	// State for form values
	const [values, setValues] = useState({
		ten_phong_ban: '',
		mo_ta: '',
		nguoi_quan_ly: '',
		dia_chi: '',
		so_dt: '',
	});

	// Handle input changes
	const handleChange = (e) => {
		const key = e.target.id;
		const value = e.target.value;
		setValues((values) => ({
			...values,
			[key]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('ten_phong_ban', values.ten_phong_ban);
		formData.append('mo_ta', values.mo_ta);
		formData.append('nguoi_quan_ly', values.nguoi_quan_ly);
		formData.append('dia_chi', values.dia_chi);
		formData.append('so_dt', values.so_dt);
		router.post('/tao-phong-ban', formData);
	};

	// Render the form
	return (
		<AuthenticatedLayout
			header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Quản lý phòng ban</h2>}
		>
			<Head title="Thêm phòng ban" />

			<div className="py-12">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div>Thêm Phòng Ban</div>
					<form onSubmit={handleSubmit}>
						<div className="grid gap-2">
							{/* Tên phòng ban */}
							<div>
								<InputLabelV1 className="mb-1" value={'Tên phòng ban'} />
								<TextInputV1 id="ten_phong_ban" type="text" value={values.ten_phong_ban} onChange={handleChange} />
								{errors && errors.ten_phong_ban && (
									<p className="text-sm italic text-red-500">{errors.ten_phong_ban}</p>
								)}
							</div>
							{/* Mô tả */}
							<div>
								<InputLabelV1 className="mb-1" value={'Mô tả'} />
								<TextInputV1 id="mo_ta" type="text" value={values.mo_ta} onChange={handleChange} />
								{errors && errors.mo_ta && (
									<p className="text-sm italic text-red-500">{errors.mo_ta}</p>
								)}
							</div>
							{/* Người quản lý */}
							<div>
								<InputLabelV1 className="mb-1" value={'Người quản lý'} />
								<TextInputV1 id="nguoi_quan_ly" type="text" value={values.nguoi_quan_ly} onChange={handleChange} />
								{errors && errors.nguoi_quan_ly && (
									<p className="text-sm italic text-red-500">{errors.nguoi_quan_ly}</p>
								)}
							</div>
							{/* Địa chỉ */}
							<div>
								<InputLabelV1 className="mb-1" value={'Địa chỉ'} />
								<TextInputV1 id="dia_chi" type="text" value={values.dia_chi} onChange={handleChange} />
								{errors && errors.dia_chi && (
									<p className="text-sm italic text-red-500">{errors.dia_chi}</p>
								)}
							</div>
							{/* Số điện thoại */}
							<div>
								<InputLabelV1 className="mb-1" value={'Số điện thoại'} />
								<TextInputV1 id="so_dt" type="text" value={values.so_dt} onChange={handleChange} />
								{errors && errors.so_dt && (
									<p className="text-sm italic text-red-500">{errors.so_dt}</p>
								)}
							</div>
						</div>
						<Button className="mt-3" type="submit">
							Thêm
						</Button>
					</form>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
