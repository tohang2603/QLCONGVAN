import { router } from "@inertiajs/react";
export default function DialogDltCQ({ className, cq, index, ...props }) {
  return (
    			<dialog {...props} id={`btn_delete_${index}`} className="modal">
  					<div className="modal-box">
							<h3 className="font-bold text-lg text-red-500">Thông báo!</h3>
							<p className="text-red-500	 py-4">Bạn có chắc chắn muốn xoá cơ quan? '{cq.ten_co_quan}' ?</p>
							<div className="modal-action">
								<form method="dialog">
									{/* if there is a button in form, it will close the modal */}
									<div className="grid gap-1 grid-cols-2">
									<button onClick={() => {
																router.delete(`xoa-co-quan/${cq.id}`);
															}} className="btn bg-red-400 hover:bg-red-500 text-white">Xoá</button>
									<button className="btn">Không</button>
									</div>
								</form>
							</div>
						</div>
					</dialog>
  )
}
