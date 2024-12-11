import DialogDltPB from '@/Components/DialogDltPB';
import ButtonIcon from './ButtonIcon';
import { router } from '@inertiajs/react';

export default function ListPhongBan({ className = '', pb, index }) {
  return (
    <div
      className={
        `${index % 2 === 0 ? 'bg-slate-200 ' : 'bg-slate-100'} grid grid-cols-6 content-center justify-items-center divide-orange-500 py-2` +
        className
      }
    >
      {/* Tên phòng ban */}
      <div className='grid content-center justify-items-center'>
        <p>{pb.ten_phong_ban}</p>
      </div>
      {/* Mô tả */}
      <div className='grid content-center justify-items-center'>
        <p>{pb.mo_ta}</p>
      </div>
      {/* Người quản lý */}
      <div className='grid content-center justify-items-center'>
        <p>{pb.nguoi_quan_ly}</p>
      </div>
      {/* Địa chỉ */}
      <div className='grid content-center justify-items-center'>
        <p>{pb.dia_chi}</p>
      </div>
      <div className='grid content-center justify-items-center'>
        <p>{pb.so_dt}</p>
      </div>
      <div className='grid grid-cols-2 content-center justify-items-center gap-2'>
        <ButtonIcon onClick={() => router.get(`/sua-phong-ban/${pb.id}`)} className='hover:bg-green-500'>
          <ion-icon name='create-outline'></ion-icon>
        </ButtonIcon>
        <ButtonIcon onClick={() => {document.getElementById(`btn_delete_${index}`).showModal();}}className='hover:bg-red-500 '>
          <ion-icon name='trash-outline'></ion-icon>
        </ButtonIcon>
      </div>
      {/* Dialog Xoá */}
      <DialogDltPB index={index} pb={pb} />
    </div>
  );
}
