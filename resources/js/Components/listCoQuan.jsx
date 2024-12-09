import DialogDlt from '@/Components/DialogDlt';
import ButtonIcon from './ButtonIcon';
import { router } from '@inertiajs/react';

export default function ListCoQuan({ className = '', cq, index }) {
	return (
		<div
			className={
				`${index % 2 === 0 ? 'bg-slate-200 ' : 'bg-slate-100'} grid grid-cols-4 content-center justify-items-center divide-orange-500 py-2` +
				className
			}
		>
			<div className='grid content-center justify-items-center'>
				<p>{cq.ten_co_quan}</p>
			</div>
			<div className='grid content-center justify-items-center'>
				<p>{cq.dia_chi}</p>
			</div>
			<div className='grid content-center justify-items-center'>
				<p>{cq.so_dt}</p>
			</div>
			<div className='grid grid-cols-3 content-center justify-items-center gap-2'>
				<ButtonIcon onClick={()=>router.get(`/sua-co-quan/${cq.id}`)} className='hover:bg-green-500'>
					<ion-icon name='create-outline'></ion-icon>
				</ButtonIcon>
				<ButtonIcon onClick={()=>{document.getElementById(`btn_delete_${index}`).showModal()}} className='hover:bg-red-500 '>
					<ion-icon name='trash-outline'></ion-icon>
				</ButtonIcon>
			</div>
			{/* Dialog Xoá */}
			<DialogDlt index={index} cq={cq} />
		</div>
	);
}
