import InputLabelV1 from "@/Components/InputLabelV1";
import TextInputV1 from "@/Components/TextInputV1";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function SuaCoQuan({ coquan }) {
//   console.log(coquan);
  const { errors } = usePage().props;
  const [values, setValues] = useState({
    tencoquan: coquan.ten_co_quan,
    diachi: coquan.dia_chi,
    sodt: coquan.so_dt,
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
    formData.append("tencoquan", values.tencoquan);
    formData.append("diachi", values.diachi);
    formData.append("sodt", values.sodt);
    router.patch(`/cap-nhat-co-quan/${coquan.id}`, formData);
  };

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Quản lý</h2>}
    >
      <Head title="Sửa cơ quan" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>SỬa Cơ Quan</div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid gap-2">
              {/* Tên cơ quan */}
              <div>
                <InputLabelV1 className="mb-1" value={"Tên cơ quan"} />
                <TextInputV1 id="tencoquan" type="text" value={values.tencoquan} onChange={handleChange} />
                {errors && errors.tencoquan && (
                  <p className="text-sm italic text-red-500">{errors.tencoquan}</p>
                )}
              </div>
              {/* Địa chỉ */}
              <div>
                <InputLabelV1 className="mb-1" value={"Địa chỉ"} />
                <TextInputV1 id="diachi" type="text" value={values.diachi} onChange={handleChange} />
                {errors && errors.diachi && (
                  <p className="text-sm italic text-red-500">{errors.diachi}</p>
                )}
              </div>
            </div>
            <div>
              {/* Số điện thoại */}
              <InputLabelV1 className="mb-1" value={"Số điện thoại"} />
              <TextInputV1 id="sodt" type="text" value={values.sodt} onChange={handleChange} />
              {errors && errors.sodt && (
                <p className="text-sm italic text-red-500">{errors.sodt}</p>
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
