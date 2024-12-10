import DialogDltPQ from '@/Components/DialogDltPQ';
import ButtonIcon from './ButtonIcon';
import { router } from '@inertiajs/react';

export default function ListPhanQuyen({ className = '', pq, index }) {
	return (
		<div
			className={
				`${index % 2 === 0 ? 'bg-slate-200 ' : 'bg-slate-100'} grid grid-cols-4 content-center justify-items-center divide-orange-500 py-2` +
				className
			}
		>
			<div className='grid content-center justify-items-center'>
				<p>{pq.ten_quyen}</p>
			</div>
			<div className='grid content-center justify-items-center'>
				<p>{pq.ten_ghi_tat}</p>
			</div>
			<div className='grid content-center justify-items-center'>
				<p>{pq.mo_ta}</p>
			</div>
			<div className='grid grid-cols-2 content-center justify-items-center gap-2'>
				<ButtonIcon onClick={()=>router.get(`/sua-phan-quyen/${pq.id}`)} className='hover:bg-green-500'>
					<ion-icon name='create-outline'></ion-icon>
				</ButtonIcon>
				<ButtonIcon onClick={()=>{document.getElementById(`btn_delete_${index}`).showModal()}} className='hover:bg-red-500 '>
					<ion-icon name='trash-outline'></ion-icon>
				</ButtonIcon>
			</div>
			{/* Dialog Xoá */}
			<DialogDltPQ index={index} pq={pq} />
		</div>
	);
}
