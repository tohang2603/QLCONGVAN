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
			<>
            <AuthenticatedLayout
                        header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Tìm kiếm công văn</h2>}
                    >
			<Head title="Tìm kiếm công văn" />
        <div className="p-6 max-w-4xl mx-auto">
            {/* Form tìm kiếm */}
            <form onSubmit={handleSearch} className="mb-6">
                <input
                    type="text"
                    value={searchKw}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Nhập từ khóa tìm kiếm..."
                    className="p-2 border rounded-lg w-full mb-4"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Tìm kiếm
                </button>
            </form>

            {/* Kết quả tìm kiếm */}
            <h2 className="text-2xl font-semibold mb-4">Kết quả tìm kiếm</h2>
            {cv.length > 0 ? (
                <ul className="space-y-4">
                    {cv.map(item => (
                        <li key={item.id} className="p-4 border rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-2">{item.tieu_de}</h2>
                            <p className="text-gray-700 mb-4">{item.mo_ta}</p>
                            <span className="block text-sm text-gray-500">Số công văn: {item.so_cong_van}</span>
                            <span className="block text-sm text-gray-500">Ngày tạo: {new Date(item.created_at).toLocaleDateString()}</span>
														<ButtonIcon onClick={()=>{const fileUrl = item.file; window.open(fileUrl, '_blank')}} className='hover:bg-slate-300'>
																<ion-icon name="eye-outline"></ion-icon>					
														</ButtonIcon>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">Không tìm thấy kết quả nào.</p>
            )}
        </div>
    </AuthenticatedLayout>
			</>
    );
};

export default TimKiem;
