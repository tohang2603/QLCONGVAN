import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import { usePage, useForm } from "@inertiajs/react";

export default function SuaCoQuan({ coquan }) {
    const { data, setData, patch, errors } = useForm({
        ten_co_quan: coquan.ten_co_quan,
        dia_chi: coquan.dia_chi,
        so_dt: coquan.so_dt,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/cap-nhat-co-quan/${coquan.id}`);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-normal text-black  hover:text-blue-700">SỬA CƠ QUAN</h2>
            }
        >
            <Head title="Sửa cơ quan" />
            <div className="py-12 bg-gradient-to-r from-blue-400 to-blue-200">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-md rounded-lg p-6"
                    >
                        <h3 className="text-lg font-semibold mb-6 text-gray-700">
                            Chỉnh sửa thông tin cơ quan
                        </h3>

                        <div className="grid gap-4 mb-4">
                            {/* Tên cơ quan */}
                            <div>
                                <InputLabelV1
                                    className="mb-2 text-gray-600 font-medium"
                                    value={"Tên cơ quan"}
                                />
                                <TextInputV1
                                    id="ten_co_quan"
                                    type="text"
                                    value={data.ten_co_quan}
                                    onChange={(e) => setData("ten_co_quan", e.target.value)}
                                    className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập tên cơ quan"
                                />
                                {errors && errors.ten_co_quan && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.ten_co_quan}
                                    </p>
                                )}
                            </div>

                            {/* Địa chỉ */}
                            <div>
                                <InputLabelV1
                                    className="mb-2 text-gray-600 font-medium"
                                    value={"Địa chỉ"}
                                />
                                <TextInputV1
                                    id="dia_chi"
                                    type="text"
                                    value={data.dia_chi}
                                    onChange={(e) => setData("dia_chi", e.target.value)}
                                    className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập địa chỉ"
                                />
                                {errors && errors.dia_chi && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.dia_chi}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Số điện thoại */}
                        <div className="mb-6">
                            <InputLabelV1
                                className="mb-2 text-gray-600 font-medium"
                                value={"Số điện thoại"}
                            />
                            <TextInputV1
                                id="so_dt"
                                type="text"
                                value={data.so_dt}
                                onChange={(e) => setData("so_dt", e.target.value)}
                                className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Nhập số điện thoại"
                            />
                            {errors && errors.so_dt && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.so_dt}
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
