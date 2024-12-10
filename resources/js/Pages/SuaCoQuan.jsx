import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import { usePage, useForm } from "@inertiajs/react";

export default function SuaCoQuan({ coquan }) {
//   console.log(coquan); 
  const { data, setData, patch, errors } = useForm({
    ten_co_quan: coquan.ten_co_quan,
    dia_chi: coquan.dia_chi,
    so_dt: coquan.so_dt,
})
  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    patch(`/cap-nhat-co-quan/${coquan.id}`);
  };

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Quản lý</h2>}
    >
      <Head title="Sửa cơ quan" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>SỬa Cơ Quan</div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
              {/* Tên cơ quan */}
              <div>
                <InputLabelV1 className="mb-1" value={"Tên cơ quan"} />
                <TextInputV1 id="tencoquan" type="text" value={data.ten_co_quan} onChange={e => setData('ten_co_quan', e.target.value)} />
                {errors && errors.ten_co_quan && (
                  <p className="text-sm italic text-red-500">{errors.ten_co_quan}</p>
                )}
              </div>
              {/* Địa chỉ */}
              <div>
                <InputLabelV1 className="mb-1" value={"Địa chỉ"} />
                <TextInputV1 id="diachi" type="text" value={data.dia_chi} onChange={e => setData('dia_chi', e.target.value)} />
                {errors && errors.dia_chi && (
                  <p className="text-sm italic text-red-500">{errors.dia_chi}</p>
                )}
              </div>
            </div>
            <div>
              {/* Số điện thoại */}
              <InputLabelV1 className="mb-1" value={"Số điện thoại"} />
              <TextInputV1 id="sodt" type="text" value={data.so_dt} onChange={e => setData('so_dt', e.target.value)} />
              {errors && errors.so_dt && (
                <p className="text-sm italic text-red-500">{errors.so_dt}</p>
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
