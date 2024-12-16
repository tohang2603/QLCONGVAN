import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function NhanSu({ nhanSu }) {
	const chuaKichHoat = nhanSu.chuaKichHoat;
	const nhanSuAll = nhanSu.tatCa;
	console.log(nhanSu)
	return <>
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý nhân sự</h2>}
		>
			<Head title='Quản lí nhân sự' />
			<div className='py-6'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div>
						<h3>Tài khoản cần kích hoạt</h3>
						<div>
							<div>
								<div className='grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] content-center justify-items-center bg-sky-400 py-1 text-white'>
									<div>
										ID
									</div>
									<div>
										Họ và tên
									</div>
									<div>
										Email
									</div>
									<div>
										Chức vụ
									</div>
									<div>
										Điện thoại
									</div>
									<div>
										Hành động
									</div>
								</div>
							</div>
							{chuaKichHoat.map((item, index) => (
								<div key={index} className='grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] content-center justify-items-center bg-sky-400 py-1 text-white'>
									<div>
										<p>{item.id}</p>
									</div>
									<div>
										<p>{item.name}</p>
									</div>
									<div>
										<p>{item.email}</p>
									</div>
									<div>
										<p>{item.phan_quyen.ten_quyen}</p>
									</div>
									<div>
										<p>{item.phone}</p>
									</div>
									<div>
										<p>{item.phone}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<h3 className="mt-5">Tài khoản đã kích hoạt</h3>
					<div>
						{nhanSuAll.map((item, index) => (
							<div key={index} className='grid grid-cols-5 content-center justify-items-center bg-sky-400 py-1 text-white'>
								<div>
									<p>{item.id}</p>
								</div>
								<div>
									<p>{item.name}</p>
								</div>
								<div>
									<p>{item.email}</p>
								</div>
								<div>
									<p>{item.phan_quyen.ten_quyen}</p>
								</div>
								<div>
									<p>{item.phone}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	</>
}