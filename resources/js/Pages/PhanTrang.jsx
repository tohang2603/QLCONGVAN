import React from 'react';
import { InertiaLink } from '@inertiajs/react';
import Pagination from './Pagination'; // Đường dẫn tới component Pagination

function CongVanIndex({ dscongvan }) {
    return (
        <div>
            {/* ... Hiển thị danh sách công văn ... */}
            <table>
                {/* ... Tiêu đề bảng ... */}
                <tbody>
                    {dscongvan.data.map((congvan) => (
                        <tr key={congvan.so_cong_van}>
                            <td>{congvan.tieu_de}</td>
                            <td>{congvan.mo_ta}</td>
                            <td>{congvan.nguoi_tao}</td>
                            <td>{congvan.thao_tac}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Hiển thị phân trang */}
            <div className="mt-4 flex justify-center">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    {congvan.links.map((link, key) => (
                        <InertiaLink
                            key={key}
                            href={link.url || ''}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                link.active
                                    ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                            } ${key === 0 ? 'rounded-l-md' : ''} ${key === congVans.links.length - 1 ? 'rounded-r-md' : ''}`}
                        >
                            <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
                        </InertiaLink>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default CongVanIndex;