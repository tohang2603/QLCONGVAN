import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function SuaCongVan({ cv }) {
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        socongvan: cv.so_cong_van,
        tieude: cv.tieu_de,
        mota: cv.mo_ta,
    });
    const [selectedFile, setSelectedFile] = useState(null);

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
        formData.append("socongvan", values.socongvan);
        formData.append("tieude", values.tieude);
        formData.append("mota", values.mota);
        if (selectedFile) {
            formData.append("file", selectedFile);
        }
        router.post(`/cap-nhat-cong-van/${cv.id}`, formData);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-normal text-black  hover:text-blue-700">SỬA CÔNG VĂN</h2>
            }
        >
            <Head title="Sửa công văn" />
            <div className="py-12 bg-gradient-to-r from-blue-400 to-blue-200">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                        className="bg-white shadow-md rounded-lg p-6"
                    >
                        <h3 className="text-lg font-semibold mb-6 text-gray-700">
                            Chỉnh sửa thông tin công văn
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Số công văn */}
                            <div>
                                <InputLabelV1
                                    className="mb-2 text-gray-600 font-medium"
                                    value={"Số công văn"}
                                />
                                <TextInputV1
                                    id="socongvan"
                                    type="text"
                                    value={values.socongvan}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập số công văn"
                                />
                                {errors && errors.socongvan && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.socongvan}
                                    </p>
                                )}
                            </div>

                            {/* Tiêu đề */}
                            <div>
                                <InputLabelV1
                                    className="mb-2 text-gray-600 font-medium"
                                    value={"Tiêu đề"}
                                />
                                <TextInputV1
                                    id="tieude"
                                    type="text"
                                    value={values.tieude}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập tiêu đề"
                                />
                                {errors && errors.tieude && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.tieude}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Mô tả */}
                        <div className="mb-6">
                            <InputLabelV1
                                className="mb-2 text-gray-600 font-medium"
                                value={"Mô tả"}
                            />
                            <textarea
                                id="mota"
                                value={values.mota}
                                onChange={handleChange}
                                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Nhập mô tả chi tiết"
                                rows="4"
                            />
                            {errors && errors.mota && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.mota}
                                </p>
                            )}
                        </div>

                        {/* Tệp đính kèm */}
                        <div className="mb-6">
                            <InputLabelV1
                                className="mb-1"
                                value={"Tệp đính kèm"}
                            />
                            <input
                                type="file"
                                className="w-full file-input mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                            />
                            {errors && errors.file && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.file}
                                </p>
                            )}
                        </div>

                        {/* Nút cập nhật */}
                        <div className="flex justify-end">
                            <Button
                                className="ml-6 px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                type="submit"
                            >
                                Cập nhật
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
