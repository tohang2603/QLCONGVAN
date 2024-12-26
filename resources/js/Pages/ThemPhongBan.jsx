import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import Select from 'react-select';

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
    const [selectedOptionCQ, setSelectedOptionCQ] = useState([]);
    const [selectedOptionPB, setSelectedOptionPB] = useState([]);

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
        formData.append('coquan', JSON.stringify(selectedOptionCQ));
        formData.append('phongban', JSON.stringify(selectedOptionPB));
        router.post('/tao-phong-ban', formData);
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-normal leading-4 text-black  hover:text-blue-700">THÊM PHÒNG BAN</h2>}
        >
            <Head title="Thêm phòng ban" />
            <div className='py-12 w-full bg-gradient-to-r from-blue-400 to-blue-200'>
                <div className="py-2 mx-auto px-4 max-w-4xl">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-6 text-gray-700">Nhập thông tin phòng ban</h3>
                        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <InputLabelV1 className="mb-1" value="Tên phòng ban" />
                                    <TextInputV1
                                        id="ten_phong_ban"
                                        type="text"
                                        value={values.ten_phong_ban}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors && errors.ten_phong_ban && (
                                        <p className="text-sm italic text-red-500">{errors.ten_phong_ban}</p>
                                    )}
                                </div>
                                <div>
                                    <InputLabelV1 className="mb-1" value="Mô tả" />
                                    <TextInputV1
                                        id="mo_ta"
                                        type="text"
                                        value={values.mo_ta}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors && errors.mo_ta && (
                                        <p className="text-sm italic text-red-500">{errors.mo_ta}</p>
                                    )}
                                </div>
                                <div>
                                    <InputLabelV1 className="mb-1" value="Người quản lý" />
                                    <TextInputV1
                                        id="nguoi_quan_ly"
                                        type="text"
                                        value={values.nguoi_quan_ly}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors && errors.nguoi_quan_ly && (
                                        <p className="text-sm italic text-red-500">{errors.nguoi_quan_ly}</p>
                                    )}
                                </div>
                                <div>
                                    <InputLabelV1 className="mb-1" value="Địa chỉ" />
                                    <TextInputV1
                                        id="dia_chi"
                                        type="text"
                                        value={values.dia_chi}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors && errors.dia_chi && (
                                        <p className="text-sm italic text-red-500">{errors.dia_chi}</p>
                                    )}
                                </div>
                                <div>
                                    <InputLabelV1 className="mb-1" value="Số điện thoại" />
                                    <TextInputV1
                                        id="so_dt"
                                        type="text"
                                        value={values.so_dt}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors && errors.so_dt && (
                                        <p className="text-sm italic text-red-500">{errors.so_dt}</p>
                                    )}
                                </div>
                                {/* Additional Select Components if needed */}
                            </div>
                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    className="ml-6 px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                >
                                    Thêm phòng ban
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
