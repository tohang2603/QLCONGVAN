import DialogDlt from '@/Components/DialogDlt';
import ButtonIcon from './ButtonIcon';
import { router, Link, usePage } from '@inertiajs/react';

export default function ListCongVan({ className = '', cv, index }) {
	// Get user
	const user = usePage().props.auth.user;
	const { role } = usePage().props;	
	return (
		<div
			className={
				`${index % 2 === 0 ? 'bg-white': 'bg-white '} grid grid-cols-5 content-center border-b border-gray-300 justify-items-center divide-orange-500 py-2` +
				className
			}
		>
			<div className='grid content-center justify-items-center'>
				<p>{cv.so_cong_van}</p>
			</div>
			<div className='grid content-center justify-items-center'>
				<Link href={`/chi-tiet-cong-van/${cv.id}`} className='hover:text-red-500 text-green-500'>{cv.tieu_de}</Link>
			</div>
			<div className='grid content-center justify-items-center'>
				<p>{cv.mo_ta}</p>
			</div>
			<div className='grid content-center justify-items-center'>
				<p>{cv.nguoidung.name}</p>
			</div>
			<div className={`grid grid-cols-2 content-center justify-items-center gap-2 ${role ? 'grid-cols-3' : ''}`}>
				<ButtonIcon onClick={() => router.get(`/sua-cong-van/${cv.id}`)} className='hover:bg-green-500'>
					<ion-icon name='create-outline'></ion-icon>
				</ButtonIcon>
				<ButtonIcon onClick={() => { const fileUrl = cv.file; window.open(fileUrl, '_blank') }} className='hover:bg-slate-300'>
					<ion-icon name="eye-outline"></ion-icon>
				</ButtonIcon>
				{role && (
					<ButtonIcon onClick={() => { document.getElementById(`btn_delete_${index}`).showModal() }} className='hover:bg-red-500 '>
						<ion-icon name='trash-outline'></ion-icon>
					</ButtonIcon>
				)}
			</div>
			{/* Dialog Xoá*/}
			<DialogDlt index={index} cv={cv} />
		</div>
	);
}
