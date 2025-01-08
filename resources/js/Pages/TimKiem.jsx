import React, { useState, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import ButtonIcon from '@/Components/ButtonIcon';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { format } from 'date-fns'; // Import date-fns

const TimKiem = ({ cv: initialcv, search, startDate: initialStartDate, endDate: initialEndDate }) => {
    const [searchKw, setSearchKw] = useState(search || '');
    const [startDate, setStartDate] = useState(initialStartDate ? new Date(initialStartDate) : null);
    const [endDate, setEndDate] = useState(initialEndDate ? new Date(initialEndDate) : null);
    const [cv, setcv] = useState(initialcv);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const handleSearch = (e) => {
        e.preventDefault();

        const queryParams = new URLSearchParams();

        if (searchKw) {
            queryParams.append('search', searchKw);
        }

        if (startDate) {
            queryParams.append('startDate', format(startDate, 'yyyy-MM-dd')); // Định dạng ngày theo YYYY-MM-DD
        }

        if (endDate) {
            queryParams.append('endDate', format(endDate, 'yyyy-MM-dd')); // Định dạng ngày theo YYYY-MM-DD
        }


        router.get(`/tim-kiem-cong-van?${queryParams.toString()}`).then(response => {
            setcv(response.data);
            setCurrentPage(1);
        }).catch(error => {
            console.error("Lỗi khi tìm kiếm:", error); // Xử lý lỗi
            // Hiển thị thông báo lỗi cho người dùng nếu cần
            alert("Đã có lỗi xảy ra trong quá trình tìm kiếm. Vui lòng thử lại sau.");
        });
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [cv]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cv.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(cv.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <AuthenticatedLayout
            header={<h2 className='text-xl font-normal leading-tight text-black'>TÌM KIẾM CÔNG VĂN</h2>}
        >
            <Head title="Tìm kiếm công văn" />
            <div className="py-12 bg-gradient-to-r from-blue-400 to-blue-200">
            <div className="p-8 max-w-7xl mx-auto bg-white mt-0 rounded-lg shadow-lg flex flex-col h-full"> {/* flex flex-col h-full */}
                <form onSubmit={handleSearch} className="flex flex-wrap items-center gap-6">
                    <div>
                    <label htmlFor="searchKw" className="block text-sm font-medium text-gray-700 mb-1">Thông tin tìm kiếm:
                    </label>
                    <div className="flex-grow w-full mr-80 "> {/* Để input chiếm hết không gian còn lại */}
                        <input
                            type="text"
                            value={searchKw}
                            onChange={(e) => setSearchKw(e.target.value)}
                            placeholder="Nhập từ khóa tìm kiếm..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    </div>
                    <div> {/* Bao bọc DatePicker trong div riêng */}
                        <label htmlFor="startDate" className="block text-sm w-full font-medium text-gray-700 mb-1">Từ ngày:</label>
                        <DatePicker
                            id="startDate"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="w-full mr-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholderText="Chọn ngày bắt đầu"
                        />
                    </div>
                    <div> {/* Bao bọc DatePicker trong div riêng */}
                        <label htmlFor="endDate" className="block text-sm w-full font-medium text-gray-700 mb-1">Đến ngày:</label>
                        <DatePicker
                            id="endDate"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="w-full mr-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholderText="Chọn ngày kết thúc"
                        />
                    </div>
                    <div> {/* Bao bọc nút Tìm kiếm trong div riêng */}
                      <button
                        type="submit"
                        className="mt-6 px-8 py-3 mr-3 bg-gradient-to-r w-full from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                      >
                        TÌM KIẾM
                      </button>
                    </div>
                </form>
                <h2 className="text-2xl font-normal mt-8">Kết quả tìm kiếm</h2>
                    {cv.length > 0 ? (
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8"> {/* Sử dụng Grid */}
                            {currentItems.map(item => (
                                <div key={item.id} className=" overflow-hidden p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition"> {/* Div bao bọc item */}
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{item.tieu_de}</h3>
                                    <p className="text-gray-600 mb-4 truncate">{item.mo_ta}</p> {/* Cắt bớt mô tả nếu quá dài */}
                                    <span className="block text-sm text-gray-500 mb-2">Số công văn: {item.so_cong_van}</span>
                                    <span className="block text-sm text-gray-500">Ngày tạo: {new Date(item.created_at).toLocaleDateString()}</span>
                                    <div className="mt-4 flex justify-end"> {/* Để nút ở góc dưới bên phải */}
                                      <ButtonIcon onClick={() => { const fileUrl = item.file; window.open(fileUrl, '_blank'); }} className='hover:bg-gray-200 p-2 rounded-full'>
                                          <ion-icon name="eye-outline" className="text-xl text-gray-700"></ion-icon>
                                      </ButtonIcon>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">Không tìm thấy kết quả nào.</p>
                    )}
            </div>
            {cv.length > itemsPerPage && (
                        <nav className="mt-8 flex justify-center">
                        <ul className="flex items-center space-x-1"> {/* Thêm items-center để căn giữa dọc */}
                            <li>
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1} // Vô hiệu hóa nút khi ở trang đầu
                                    className={`px-3 py-2 rounded-l-md border border-gray-300 ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                            {pageNumbers.map(number => (
                                <li key={number}>
                                    <button
                                        onClick={() => paginate(number)}
                                        className={`px-4 py-2 border border-gray-300 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        {number}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === pageNumbers.length} // Vô hiệu hóa nút khi ở trang cuối
                                    className={`px-3 py-2 rounded-r-md border border-gray-300 ${currentPage === pageNumbers.length ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    )}
        </div>
        </AuthenticatedLayout>
    );
};

export default TimKiem;
