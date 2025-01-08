import ButtonLink from '@/Components/ButtonLink';
import ButtonSearch from '@/Components/ButtonSearch';
import { Head, Link, usePage } from '@inertiajs/react';
import ListCongVan from '@/Components/ListCongVan';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';

//phan trang tren client
export default function Dashboard() {
    const { dscongvan, flash } = usePage().props;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const totalItems = dscongvan?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginatedData = dscongvan ? dscongvan.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    ) : [];

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if (flash?.error) {
            toast.error(flash.error, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [flash]);

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-normal text-black hover:text-blue-700">QUẢN LÝ CÔNG VĂN</h2>}
        >
            <Head title='Quản lý công văn' />
            <div className='py-12 w-full bg-gradient-to-r from-blue-400 to-blue-200'>
                <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'> 
                    <div className='overflow-hidden bg-white shadow-lg sm:rounded-lg'>
                        <div className='p-6 text-gray-900'>
                            <ButtonSearch />
                        </div>
                        <ButtonLink
                            className="ml-6 px-4 py-3 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                            href={route('them-cong-van')}
                        >
                            Thêm công văn
                        </ButtonLink>
                        <div className='overflow-hidden bg-white shadow-lg rounded-lg'> 
                            <div className='p-6'>
                                <div className='grid grid-cols-5 gap-8 content-center justify-items-center bg-blue-600 py-2 text-white font-medium rounded-t-lg'>
                                    <div><p>Số công văn</p></div>
                                    <div><p>Tiêu đề</p></div>
                                    <div><p>Mô tả</p></div>
                                    <div><p>Người tạo</p></div>
                                    <div><p>Thao tác</p></div>
                                </div>
                                {totalItems === 0 ? (
                                    <div className='text-center mt-4 text-gray-500'>Không có công văn nào</div>
                                ) : (
                                    paginatedData.map((cv) => (
                                        <ListCongVan key={cv.id} cv={cv} className='hover:bg-yellow-50' />
                                    ))
                                )}
                            </div>
                        </div>
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-4 mb-4">
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <button
                                        onClick={() => changePage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => changePage(page)}
                                            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === page ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'}`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => changePage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
