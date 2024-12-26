import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export default function SuaPhongBan({ phongban }) {
    const { data, setData, patch, errors } = useForm({
        ten_phong_ban: phongban.ten_phong_ban,
        mo_ta: phongban.mo_ta,
        nguoi_quan_ly: phongban.nguoi_quan_ly,
        dia_chi: phongban.dia_chi,
        so_dt: phongban.so_dt,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/cap-nhat-phong-ban/${phongban.id}`);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-normal  hover:text-blue-700 text-black">
                    SỬA PHÒNG BAN
                </h2>
            }
        >
            <Head title="Sửa phòng ban" />
            <div className="py-12 bg-gradient-to-r from-blue-400 to-blue-200">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-md rounded-lg p-6"
                    >
                        <h3 className="text-lg font-semibold mb-6 text-gray-700">
                            Chỉnh sửa thông tin phòng ban
                        </h3>

                        {/* Tên phòng ban */}
                        <div className="mb-6">
                            <InputLabelV1
                                className="mb-2 text-gray-600 font-medium"
                                value="Tên phòng ban"
                            />
                            <TextInputV1
                                id="ten_phong_ban"
                                type="text"
                                value={data.ten_phong_ban}
                                onChange={(e) =>
                                    setData("ten_phong_ban", e.target.value)
                                }
                                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                placeholder="Nhập tên phòng ban"
                            />
                            {errors.ten_phong_ban && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.ten_phong_ban}
                                </p>
                            )}
                        </div>

                        {/* Mô tả */}
                        <div className="mb-6">
                            <InputLabelV1
                                className="mb-2 text-gray-600 font-medium"
                                value="Mô tả"
                            />
                            <textarea
                                id="mo_ta"
                                value={data.mo_ta}
                                onChange={(e) =>
                                    setData("mo_ta", e.target.value)
                                }
                                className="block w-full p-3 h-30 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 resize-none"
                                placeholder="Nhập mô tả chi tiết"
                            />
                            {errors.mo_ta && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.mo_ta}
                                </p>
                            )}
                        </div>

                        {/* Người quản lý */}
                        <div className="mb-6">
                            <InputLabelV1
                                className="mb-2 text-gray-600 font-medium"
                                value="Người quản lý"
                            />
                            <TextInputV1
                                id="nguoi_quan_ly"
                                type="text"
                                value={data.nguoi_quan_ly}
                                onChange={(e) =>
                                    setData("nguoi_quan_ly", e.target.value)
                                }
                                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                placeholder="Nhập tên người quản lý"
                            />
                            {errors.nguoi_quan_ly && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.nguoi_quan_ly}
                                </p>
                            )}
                        </div>

                        {/* Địa chỉ */}
                        <div className="mb-6">
                            <InputLabelV1
                                className="mb-2 text-gray-600 font-medium"
                                value="Địa chỉ"
                            />
                            <TextInputV1
                                id="dia_chi"
                                type="text"
                                value={data.dia_chi}
                                onChange={(e) =>
                                    setData("dia_chi", e.target.value)
                                }
                                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                placeholder="Nhập địa chỉ"
                            />
                            {errors.dia_chi && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.dia_chi}
                                </p>
                            )}
                        </div>

                        {/* Số điện thoại */}
                        <div className="mb-6">
                            <InputLabelV1
                                className="mb-2 text-gray-600 font-medium"
                                value="Số điện thoại"
                            />
                            <TextInputV1
                                id="so_dt"
                                type="text"
                                value={data.so_dt}
                                onChange={(e) =>
                                    setData("so_dt", e.target.value)
                                }
                                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                placeholder="Nhập số điện thoại"
                            />
                            {errors.so_dt && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.so_dt}
                                </p>
                            )}
                        </div>

                        {/* Nút cập nhật */}
                        <div className="flex justify-end">
                            <Button
                                className="ml-6 px-4 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-teal-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
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
