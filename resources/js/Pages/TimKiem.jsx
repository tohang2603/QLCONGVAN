import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const TimKiem = ({ congvan }) => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.post("/tim-kiem-cong-van", { search });
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Tìm kiếm công văn</h1>

            {/* Form tìm kiếm */}
            <form onSubmit={handleSearch} className="mb-6">
                <input
                    type="text"
                    value={search}
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
            {congvan.length > 0 ? (
                <ul className="space-y-4">
                    {congvan.map(item => (
                        <li key={item.id} className="p-4 border rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-2">{item.tieu_de}</h2>
                            <p className="text-gray-700 mb-4">{item.mo_ta}</p>
                            <span className="block text-sm text-gray-500">Số công văn: {item.so_cong_van}</span>
                            <span className="block text-sm text-gray-500">Created At: {new Date(item.created_at).toLocaleDateString()}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">Không tìm thấy kết quả nào.</p>
            )}
        </div>
    );
};

export default TimKiem;
