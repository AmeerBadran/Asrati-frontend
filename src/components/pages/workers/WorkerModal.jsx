import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../ui/Button";


const WorkerModal = ({ isOpen, onClose, worker }) => {
  const formik = useFormik({
    initialValues: {
      workerName: worker?.workerName || "",
      workerPhone: worker?.workerPhone || "",
      workerType: worker?.workerType || "شفت",
      rate: worker?.rate || 0,
      seasonID: worker?.seasonID || 1,
    },
    validationSchema: Yup.object({
      workerName: Yup.string().required("الاسم مطلوب"),
      workerPhone: Yup.string().required("رقم الهاتف مطلوب"),
      workerType: Yup.string().required("نوع العمل مطلوب"),
      rate: Yup.number().positive("يجب أن يكون رقم موجب").required("السعر مطلوب"),
      seasonID: Yup.number().required("الموسم مطلوب"),
    }),
    onSubmit: (values) => {
      if (worker) {
        console.log("تعديل عامل", values);
      } else {
        console.log("إضافة عامل", values);
      }
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-lg font-bold mb-4">
          {worker ? "تعديل عامل" : "إضافة عامل"}
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <input
            type="text"
            name="workerName"
            placeholder="اسم العامل"
            className="w-full border p-2 rounded"
            value={formik.values.workerName}
            onChange={formik.handleChange}
          />
          {formik.errors.workerName && (
            <div className="text-red-500 text-sm">{formik.errors.workerName}</div>
          )}

          <input
            type="text"
            name="workerPhone"
            placeholder="رقم الهاتف"
            className="w-full border p-2 rounded"
            value={formik.values.workerPhone}
            onChange={formik.handleChange}
          />
          {formik.errors.workerPhone && (
            <div className="text-red-500 text-sm">{formik.errors.workerPhone}</div>
          )}

          <select
            name="workerType"
            className="w-full border p-2 rounded"
            value={formik.values.workerType}
            onChange={formik.handleChange}
          >
            <option value="شفت">شفت</option>
            <option value="بالساعة">بالساعة</option>
          </select>

          <input
            type="number"
            name="rate"
            placeholder="سعر الوحدة"
            className="w-full border p-2 rounded"
            value={formik.values.rate}
            onChange={formik.handleChange}
          />
          {formik.errors.rate && (
            <div className="text-red-500 text-sm">{formik.errors.rate}</div>
          )}

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              إلغاء
            </Button>
            <Button type="submit">{worker ? "تحديث" : "إضافة"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkerModal;
