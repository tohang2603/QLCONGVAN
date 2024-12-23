import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import Select from 'react-select'

export default function ThemCongVan({ coquan, phongban }) {
	const { errors } = usePage().props;
	// Trạng thái select
	const [isClearable, setIsClearable] = useState(true);
	const [isSearchable, setIsSearchable] = useState(true);
	// -----------------------------------------------------
	const [values, setValues] = useState({
		socongvan: "",
		tieude: "",
		mota: "",
	});
	const [selectedFile, setSelectedFile] = useState(null);
	// Select
	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedOptionCQ, setSelectedOptionCQ] = useState([]);
	const [selectedOptionPB, setSelectedOptionPB] = useState([]);
	const handleChangeSelect = (selectedOption) => {
		setSelectedOption(selectedOption);
	};
	const handleChangeSelectCQ = (selectedOptionCQ) => {
		setSelectedOptionCQ(selectedOptionCQ);
	}
	const handleChangeSelectPB = (selectedOptionPB) => {
		setSelectedOptionPB(selectedOptionPB);
	}
	console.log(selectedOptionCQ);
	console.log(selectedOptionPB);
	// Options 
	const options = [
		{ value: '1', label: 'Gửi' },
		{ value: '2', label: 'Nhận' },
	]
	const optionsCQ = coquan.map(item => ({
		value: item.id.toString(),
		label: item.ten_co_quan
	}));
	const optionsPB = phongban.map(item => ({
		value: item.id.toString(),
		label: item.ten_phong_ban
	}));
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
		formData.append('socongvan', values.socongvan);
		formData.append('tieude', values.tieude);
		formData.append('mota', values.mota);
		formData.append('file', selectedFile);
		formData.append('trangthai', selectedOption.value);
		formData.append('coquan', JSON.stringify(selectedOptionCQ));
		formData.append('phongban', JSON.stringify(selectedOptionPB));
		router.post('/tao-cong-van', formData);
		// Log form data
		// console.log(selectedFile);
	};
	// Log
	return (
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-black'>Thêm công văn</h2>}
		>
			<Head title='Thêm công văn' />
			<div className='py-12 mx-auto px-4 max-w-7xl sm:px-6 lg:px-8'>
				<div>
					<form className="grid grid-cols-2 gap-3" onSubmit={handleSubmit} encType='multipart/form-data'>
						<div className="w-full">
							<div className='grid gap-6'>
								{/* Số công văn */}
								<div>
									<InputLabelV1 className='mb-1' value={'Số công văn'} />
									<TextInputV1
										id='socongvan'
										type='text'
										value={values.socongvan}
										onChange={handleChange}
										className='p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out'
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
										className='p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out'
									/>
									{errors && errors.tieude && (
										<p className='text-sm italic text-red-500'>{errors.tieude}</p>
									)}
								</div>
								{/*  */}
								{/* Mô tả */}
								<div>
									<InputLabelV1 className='mb-1' value={'Mô tả'} />
									<TextInputV1
										id='mota'
										type='text'
										value={values.mota}
										onChange={handleChange}
										className='p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out'
									/>
									{errors && errors.mota && <p className='text-sm italic text-red-500'>{errors.mota}</p>}
								</div>

								{/* Tệp */}
								<div>
									<InputLabelV1 className='mb-1' value={'Tệp'} />
									<input
										type='file'
										className='file-input file-input-bordered mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out'
										onChange={(e) => setSelectedFile(e.target.files[0])}
									/>
									{errors && errors.file && <p className='text-sm italic text-red-500'>{errors.file}</p>}
								</div>
							</div>
						</div>
						<div>
							<div className="mb-4">
								<InputLabelV1 className='mb-1' value={'Trạng thái'} />
								<Select
									onChange={handleChangeSelect}
									isClearable={isClearable}
									isSearchable={isSearchable}
									options={options} />
								{errors && errors.trangthai && (
									<p className='text-sm italic text-red-500'>{errors.trangthai}</p>
								)}
							</div>
							<div className="mb-4">
								<InputLabelV1 className='mb-1' value={'Cơ quan'} />
								<Select
									onChange={handleChangeSelectCQ}
									isClearable={isClearable}
									isSearchable={isSearchable}
									isMulti
									options={optionsCQ} />
							</div>
							<div className="mb-4">
								<InputLabelV1 className='mb-1' value={'Phòng ban'} />
								<Select
									onChange={handleChangeSelectPB}
									isClearable={isClearable}
									isSearchable={isSearchable}
									isMulti
									options={optionsPB} />
							</div>
						</div>
						<Button
							className='mt-3 py-2 px-4 justify-center bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition duration-150 ease-in-out'
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
