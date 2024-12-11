import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import { usePage, useForm } from "@inertiajs/react";

export default function SuaPhongBan({ phongban }) {
  console.log(phongban);
  const { data, setData, patch, errors } = useForm({
    //day len du lieu cua giao dien 
    ten_phong_ban: phongban.ten_phong_ban,
    mo_ta: phongban.mo_ta,
    nguoi_quan_ly: phongban.nguoi_quan_ly,
    dia_chi: phongban.dia_chi,
    so_dt: phongban.so_dt,
  });
    // Handle submit
    const handleSubmit = (e) => {
      e.preventDefault();
      patch(`/cap-nhat-phong-ban/${phongban.id}`);
    };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Quản lý phòng ban
        </h2>
      }
    >
      <Head title="Sửa phòng ban" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>Sửa Phòng Ban</div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
              {/* Tên phòng ban */}
              <div>
                <InputLabelV1 className="mb-1" value={"Tên phòng ban"} />
                <TextInputV1
                  id="tenphongban"
                  type="text"
                  value={data.ten_phong_ban}
                  onChange={e => setData('ten_phong_ban', e.target.value)}/>
                {errors && errors.ten_phong_ban && (
                  <p className="text-sm italic text-red-500">
                    {errors.ten_phong_ban}
                  </p>
                )}
              </div>
              {/* Mô tả */}
              <div>
                <InputLabelV1 className="mb-1" value={"Mô tả"} />
                <TextInputV1
                  id="mota"
                  type="text"
                  value={data.mo_ta}
                  onChange={e => setData('mo_ta', e.target.value)}/>
                {errors && errors.mo_ta && (
                  <p className="text-sm italic text-red-500">{errors.mo_ta}</p>
                )}
              </div>
              {/* Người quản lý */}
              <div>
                <InputLabelV1 className="mb-1" value={"Người quản lý"} />
                <TextInputV1
                  id="nguoiquanly"
                  type="text"
                  value={data.nguoi_quan_ly}
                  onChange={e => setData('nguoi_quan_ly', e.target.value)}
                />
                {errors && errors.nguoi_quan_ly && (
                  <p className="text-sm italic text-red-500">
                    {errors.nguoi_quan_ly}
                  </p>
                )}
              </div>
              {/* Địa chỉ */}
              <div>
                <InputLabelV1 className="mb-1" value={"Địa chỉ"} />
                <TextInputV1
                  id="diachi"
                  type="text"
                  value={data.dia_chi}
                  onChange={e => setData('dia_chi', e.target.value)}
                />
                {errors && errors.dia_chi && (
                  <p className="text-sm italic text-red-500">{errors.dia_chi}</p>
                )}
              </div>
              {/* Số điện thoại */}
              <div>
                <InputLabelV1 className="mb-1" value={"Số điện thoại"} />
                <TextInputV1
                  id="sodt"
                  type="text"
                  value={data.so_dt}
                  onChange={e => setData('so_dt', e.target.value)}
                />
                {errors && errors.so_dt && (
                  <p className="text-sm italic text-red-500">
                    {errors.so_dt}
                  </p>
                )}
              </div>
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
