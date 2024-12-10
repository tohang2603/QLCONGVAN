import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function SuaPhanQuyen({phanquyen}) {
  console.log(phanquyen);
  const { errors } = usePage().props;
  const [values, setValues] = useState({
    tenphanquyen: phanquyen.tenphanquyen,
    tenghitat: phanquyen.tenghitat,
    mota: phanquyen.mota,
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
    formData.append("tenphanquyen", values.tenphanquyen);
    formData.append("tenghitat", values.tenghitat);
    formData.append("mota", values.mota);

    router.patch(`/cap-nhat-phong-ban/${phongban.id}`, formData);
  };

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Quản lý</h2>}
    >
      <Head title="Sửa phòng ban" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>SỬa Phòng ban</div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid gap-2">
              <div>
                <InputLabelV1 className="mb-1" value={"Tên phòng ban"} />
                <TextInputV1 id="tenphongban" type="text" value={values.tenphongban} onChange={handleChange} />
                {errors && errors.tenphongban && (
                  <p className="text-sm italic text-red-500">{errors.tenphongban}</p>
                )}
              </div>
              <div>
                <InputLabelV1 className="mb-1" value={"Tên ghi tắt"} />
                <TextInputV1 id="tenghitat" type="text" value={values.tenghitat} onChange={handleChange} />
                {errors && errors.tenghitat && (
                  <p className="text-sm italic text-red-500">{errors.tenghitat}</p>
                )}
              </div>
            </div>
            <div>

              <InputLabelV1 className="mb-1" value={"Mô tả"} />
              <TextInputV1 id="sodt" type="text" value={values.mota} onChange={handleChange} />
              {errors && errors.mota && (
                <p className="text-sm italic text-red-500">{errors.mota}</p>
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