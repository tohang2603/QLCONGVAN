import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import Select from 'react-select';

export default function ThemCongVan({ coquan, phongban }) {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        socongvan: "",
        tieude: "",
        mota: "",
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionCQ, setSelectedOptionCQ] = useState([]);
    const [selectedOptionPB, setSelectedOptionPB] = useState([]);

    const options = [
        { value: '1', label: 'Gửi' },
        { value: '2', label: 'Nhận' },
    ];

    const optionsCQ = coquan.map(item => ({
        value: item.id.toString(),
        label: item.ten_co_quan
    }));

    const optionsPB = phongban.map(item => ({
        value: item.id.toString(),
        label: item.ten_phong_ban
    }));

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

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
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-normal leading-4 text-black  hover:text-blue-700">THÊM CÔNG VĂN</h2>}
        >
            <Head title="Thêm công văn" />
		<div className='py-12 w-full bg-gradient-to-r from-blue-400 to-blue-200'>
            <div className="py-2 mx-auto px-4 max-w-4xl">
                <div className="bg-white shadow-md rounded-lg p-6">
				<h3 className="text-lg font-semibold mb-6 text-gray-700">
                            Nhập thông tin công văn
                        </h3>
                    <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <InputLabelV1 className="mb-1" value="Số công văn" />
                                <TextInputV1
                                    id="socongvan"
                                    type="text"
                                    value={values.socongvan}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                />
                                {errors && errors.socongvan && (
                                    <p className="text-sm italic text-red-500">{errors.socongvan}</p>
                                )}
                            </div>
                            <div>
                                <InputLabelV1 className="mb-1" value="Tiêu đề" />
                                <TextInputV1
                                    id="tieude"
                                    type="text"
                                    value={values.tieude}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                />
                                {errors && errors.tieude && (
                                    <p className="text-sm italic text-red-500">{errors.tieude}</p>
                                )}
                            </div>
                            <div>
                                <InputLabelV1 className="mb-1" value="Mô tả" />
                                <TextInputV1
                                    id="mota"
                                    type="text"
                                    value={values.mota}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                />
                                {errors && errors.mota && (
                                    <p className="text-sm italic text-red-500">{errors.mota}</p>
                                )}
                            </div>
                            <div>
                                <InputLabelV1 className="mb-1" value="Tệp" />
                                <input
                                    type="file"
                                    className="w-full file-input mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                />
                                {errors && errors.file && (
                                    <p className="text-sm italic text-red-500">{errors.file}</p>
                                )}
                            </div>
                            <div>
                                <InputLabelV1 className="mb-1" value="Trạng thái" />
                                <Select
                                    onChange={setSelectedOption}
                                    options={options}
                                    isClearable
                                    className="rounded-lg focus:ring-2 focus:ring-blue-600"
                                />
                                {errors && errors.trangthai && (
                                    <p className="text-sm italic text-red-500">{errors.trangthai}</p>
                                )}
                            </div>
                            <div>
                                <InputLabelV1 className="mb-1" value="Cơ quan" />
                                <Select
                                    onChange={setSelectedOptionCQ}
                                    options={optionsCQ}
                                    isMulti
                                    className="rounded-lg focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <InputLabelV1 className="mb-1" value="Phòng ban" />
                                <Select
                                    onChange={setSelectedOptionPB}
                                    options={optionsPB}
                                    isMulti
                                    className="rounded-lg focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                className="ml-6 px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                            >
                                Thêm công văn
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
		</div>
        </AuthenticatedLayout>
    );
}
