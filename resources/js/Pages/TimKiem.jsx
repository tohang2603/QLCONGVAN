import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import ButtonIcon from '@/Components/ButtonIcon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const TimKiem = ({ cv, search }) => {
    const [searchKw, setSearch] = useState(search);

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(`/tim-kiem-cong-van?search=${searchKw}`);
    };

    return (
        <AuthenticatedLayout
            header={<h2 className='text-xl font-normal leading-tight text-black'>TÌM KIẾM CÔNG VĂN</h2>}
        >
            <Head title="Tìm kiếm công văn" />
            <div className="p-8 max-w-4xl mx-auto bg-white mt-6 rounded-lg shadow-lg">
                {/* Form tìm kiếm */}
                <form onSubmit={handleSearch} className="flex items-center space-x-4 mb-8">
                    <input
                        type="text"
                        value={searchKw}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Nhập từ khóa tìm kiếm..."
                        className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="ml-6 px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                    >
                        Tìm kiếm
                    </button>
                </form>

                {/* Kết quả tìm kiếm */}
                <h2 className="text-2xl font-normal mb-4">Kết quả tìm kiếm</h2>
                {cv.length > 0 ? (
                    <ul className="space-y-6">
                        {cv.map(item => (
                            <li key={item.id} className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.tieu_de}</h3>
                                <p className="text-gray-600 mb-4">{item.mo_ta}</p>
                                <span className="block text-sm text-gray-500 mb-2">Số công văn: {item.so_cong_van}</span>
                                <span className="block text-sm text-gray-500">Ngày tạo: {new Date(item.created_at).toLocaleDateString()}</span>
                                <ButtonIcon onClick={() => { const fileUrl = item.file; window.open(fileUrl, '_blank'); }} className='hover:bg-gray-200 p-2 rounded-full'>
                                    <ion-icon name="eye-outline" className="text-xl text-gray-700"></ion-icon>
                                </ButtonIcon>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">Không tìm thấy kết quả nào.</p>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default TimKiem;
