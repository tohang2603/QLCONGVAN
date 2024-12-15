import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function NhanSu({ nhanSu }) {
	console.log(nhanSu)
	return <>
		<AuthenticatedLayout
			header={<h2 className='text-xl font-semibold leading-tight text-gray-800'>Quản lý nhân sự</h2>}
		>
			<Head title='Quản lí nhân sự' />

			<div className='py-12'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					{nhanSu.map((item, index) => (
						<div key={index} className='grid grid-cols-5 content-center justify-items-center rounded-t-lg bg-sky-400 py-1 text-white'>
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
								<p>{item.sdt}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</AuthenticatedLayout>
	</>
}