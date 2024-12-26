import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ButtonLink from '@/Components/ButtonLink';
import { Link } from '@inertiajs/react'; // Import Link

export default function TrangChu({ auth }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <div className="bg-gray-100 font-sans min-h-screen">
                {/* Header */}
                <header className="bg-white py-4">
                    <div className="flex justify-between items-center px-4">
                        <div>
                            <h1 className="text-xl font-normal transition duration-300 hover:text-blue-700">TRƯỜNG ĐẠI HỌC QUY NHƠN - QUY NHON UNIVERSITY</h1>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main
                    className="py-10 px-4 flex flex-wrap justify-center items-center min-h-screen bg-cover bg-center relative" // Thêm relative
                    style={{ backgroundImage: `url('/images/hinhnen3.jpg')` }}> 
                    <div className="w-full md:w-1/2 p-10 relative z-10 text-white ">
                    <h1 className="text-3xl font-normal text-white mb-6">
                        GIỚI THIỆU
                    </h1>
                        <p className="text-white font-normal mb-6 transition duration-300 bg-opacity-70">
                            Trường Đại học Quy Nhơn, tiền thân là Trường Đại học Sư phạm Quy Nhơn (thành lập từ năm 1977),
                            tọa lạc tại trung tâm thành phố Quy Nhơn, gần bờ biển, đã vươn lên trở thành một trong những
                            cơ sở giáo dục đại học lớn tại khu vực miền Trung Tây Nguyên và cả nước. Với sứ mệnh đào tạo
                            và nghiên cứu ứng dụng, trường đóng vai trò quan trọng trong việc triển khai các tiến bộ khoa
                            học và công nghệ mới, cung cấp nguồn nhân lực có trình độ cao đáp ứng nhu cầu phát triển
                            bền vững của đất nước. Trường Đại học Quy Nhơn cũng nổi bật với nhiều thành tựu đáng kể,
                            bao gồm các chương trình đào tạo chất lượng cao, hợp tác quốc tế và các dự án nghiên cứu ứng dụng,
                            đặc biệt là các công văn hướng dẫn, công bố chính sách, nhằm nâng cao hiệu quả quản lý và
                            giảng dạy tại trường. Những công văn này đóng góp quan trọng vào việc duy trì và phát triển uy
                            tín và chất lượng giáo dục của trường.
                        </p>

                        <Link href={route('dashboard')} className="mt-3 inline-block px-6 py-3 text-white border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 uppercase"> {/* Sử dụng route('dashboard') */}
                            Xem thông tin công văn
                        </Link>
                    </div>

                    <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                        <div className="rounded-lg shadow-md max-w-full h-auto transition-transform duration-300 hover:scale-95">
                            <img
                                src="/images/QNU.jpg"
                                alt="Quy Nhon University"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </main>

                {/* Container for Latest Documents */}
                <div className="mt-10 mb-6 bg-white p-8 rounded-lg shadow-md mx-4">
                    <h2 className="text-xl font-semibold mb-4 transition duration-300 hover:text-blue-700">Công văn mới nhất</h2>
                    <ul className="list-disc pl-5">
                        <li><a href="/your-page-url" className="text-gray-700 transition duration-300 hover:text-blue-700">1945 TB Về thời gian nghỉ lễ Ngày Giải phóng miền Nam 30-4 và Ngày Quốc tế Lao động 1-5 của sinh viên</a></li>
                        <li><a href="/your-page-url" className="text-gray-700 transition duration-300 hover:text-blue-700">Công văn hướng dẫn tuyển sinh năm 2024</a></li>
                        <li><a href="/your-page-url" className="text-gray-700 transition duration-300 hover:text-blue-700">Thông báo điều chỉnh lịch học kỳ 1 năm 2024</a></li>
                    </ul>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800 py-4 text-center text-white">
                    <div className="px-4">
                        <p>&copy; 2024 QUY NHON UNIVERSITY</p>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
