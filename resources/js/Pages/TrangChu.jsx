import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, usePage } from '@inertiajs/react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'; // Import các icon

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
                    className="py-10 px-4 flex flex-wrap justify-center items-center min-h-screen bg-cover bg-center relative"
                    style={{ backgroundImage: `url('/images/hinhnen.jpg')` }}>
                    <div className="w-full md:w-1/2 p-10 relative z-10 text-white">
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
                        <Link href={route('dashboard')} className="mt-3 inline-block px-6 py-3 text-white border-2 border-white rounded-lg hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 uppercase">
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
                <footer className="bg-blue-950 py-4 text-white"> {/* w-full để footer trải dài toàn chiều rộng */}
            <div className="container mx-auto px-4 flex justify-between items-center"> {/* flex ở đây */}
                <div className="text-center md:text-left">
                    <p className="text-sm">&copy; {new Date().getFullYear()} QUY NHON UNIVERSITY</p>
                </div>

                <div className="flex flex-col items-end text-right"> {/* items-end và text-right */}
                    <div className="border-b border-gray-600 mb-2">
                        <h6 className="font-sans mr-44 mb-2">THÔNG TIN LIÊN HỆ</h6>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                            <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-300" />
                            <a href="mailto:phcth@qnu.edu.vn" className="text-sm hover:underline">
                                phcth@qnu.edu.vn
                            </a>
                        </div>
                        <div className="flex items-center">
                            <PhoneIcon className="h-5 w-5 mr-2 text-gray-300 rotate-90" />
                            <span className="text-sm">(84-256) 3846156</span>
                        </div>
                        <div className="flex items-center">
                            <MapPinIcon className="h-5 w-5 mr-2 text-gray-300" />
                            <span className="text-sm">170 An Dương Vương, TP.Quy Nhơn, Bình Định</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
            </div>
        </AuthenticatedLayout>
    );
}