import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import { usePage, useForm } from "@inertiajs/react";

export default function SuaPhanQuyen({phanquyen}) {
    const { data, setData, patch, errors } = useForm({
    ten_quyen: phanquyen.ten_quyen,
    ten_ghi_tat: phanquyen.ten_ghi_tat,
    mo_ta: phanquyen.mo_ta,
  });

    // Handle submit
    const handleSubmit = (e) => {
      e.preventDefault();
      patch(`/cap-nhat-phan-quyen/${phanquyen.id}`);
    };

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Quản lý</h2>}
    >
      <Head title="Sửa phân quyền" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>Sửa Phân Quyền</div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <div>
                <InputLabelV1 className="mb-1" value={"Tên phân quyền"} />
                <TextInputV1 id="tenquyen" type="text" value={data.ten_quyen} 
                onChange={e => setData('ten_phong_ban', e.target.value)} />
                {errors && errors.ten_quyen && (
                  <p className="text-sm italic text-red-500">{errors.ten_quyen}</p>
                )}
              </div>
              <div>
                <InputLabelV1 className="mb-1" value={"Tên ghi tắt"} />
                <TextInputV1 id="tenghitat" type="text" value={data.ten_ghi_tat}
                onChange={e => setData('ten_ghi_tat', e.target.value)} />
                {errors && errors.ten_ghi_tat && (
                  <p className="text-sm italic text-red-500">{errors.ten_ghi_tat}</p>
                )}
              </div>
            </div>
            <div>

              <InputLabelV1 className="mb-1" value={"Mô tả"} />
              <TextInputV1 id="sodt" type="text" value={data.mo_ta} 
              onChange={e => setData('mo_ta', e.target.value)} />
              {errors && errors.mo_ta && (
                <p className="text-sm italic text-red-500">{errors.mo_ta}</p>
              )}
            </div>
            <Button className="mt-3" type="submit">
              Cập nhật
            </Button>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}