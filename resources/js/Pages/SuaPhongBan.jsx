import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function SuaPhongBan({ phongban }) {
  const { errors } = usePage().props;
  const [values, setValues] = useState({
    tenphongban: phongban.ten_phong_ban,
    mota: phongban.mo_ta,
    nguoiquanly: phongban.nguoi_quan_ly,
    diachi: phongban.dia_chi,
    sodt: phongban.so_dt,
  });

  // Handle change input
  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tenphongban", values.tenphongban);
    formData.append("mota", values.mota);
    formData.append("nguoiquanly", values.nguoiquanly);
    formData.append("diachi", values.diachi);
    formData.append("sodt", values.sodt);
    router.patch(`/cap-nhat-phong-ban/${phongban.id}`, formData);
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
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid gap-2">
              {/* Tên phòng ban */}
              <div>
                <InputLabelV1 className="mb-1" value={"Tên phòng ban"} />
                <TextInputV1
                  id="tenphongban"
                  type="text"
                  value={values.tenphongban}
                  onChange={handleChange}
                />
                {errors && errors.tenphongban && (
                  <p className="text-sm italic text-red-500">
                    {errors.tenphongban}
                  </p>
                )}
              </div>
              {/* Mô tả */}
              <div>
                <InputLabelV1 className="mb-1" value={"Mô tả"} />
                <TextInputV1
                  id="mota"
                  type="text"
                  value={values.mota}
                  onChange={handleChange}
                />
                {errors && errors.mota && (
                  <p className="text-sm italic text-red-500">{errors.mota}</p>
                )}
              </div>
              {/* Người quản lý */}
              <div>
                <InputLabelV1 className="mb-1" value={"Người quản lý"} />
                <TextInputV1
                  id="nguoiquanly"
                  type="text"
                  value={values.nguoiquanly}
                  onChange={handleChange}
                />
                {errors && errors.nguoiquanly && (
                  <p className="text-sm italic text-red-500">
                    {errors.nguoiquanly}
                  </p>
                )}
              </div>
              {/* Địa chỉ */}
              <div>
                <InputLabelV1 className="mb-1" value={"Địa chỉ"} />
                <TextInputV1
                  id="diachi"
                  type="text"
                  value={values.diachi}
                  onChange={handleChange}
                />
                {errors && errors.diachi && (
                  <p className="text-sm italic text-red-500">{errors.diachi}</p>
                )}
              </div>
              {/* Số điện thoại */}
              <div>
                <InputLabelV1 className="mb-1" value={"Số điện thoại"} />
                <TextInputV1
                  id="sodt"
                  type="text"
                  value={values.sodt}
                  onChange={handleChange}
                />
                {errors && errors.sodt && (
                  <p className="text-sm italic text-red-500">
                    {errors.sodt}
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
