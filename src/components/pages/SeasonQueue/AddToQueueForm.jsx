import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const AddToQueueForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    personName: "",
    personPhone: "",
    numberOfItems: "",
    notes: "",
  };

  const validationSchema = Yup.object({
    personName: Yup.string()
      .min(3, "الاسم يجب أن يحتوي على 3 أحرف على الأقل")
      .max(100, "الاسم لا يجب أن يتجاوز 100 حرف")
      .required("اسم الشخص مطلوب"),
    personPhone: Yup.string()
      .matches(/^[0-9]{10}$/, "رقم الهاتف يجب أن يكون 10 أرقام")
      .required("رقم الهاتف مطلوب"),
    numberOfItems: Yup.number()
      .typeError("يجب إدخال رقم")
      .min(1, "يجب أن يكون العدد 1 على الأقل")
      .required("عدد العناصر مطلوب"),
    notes: Yup.string().max(255, "الملاحظات لا يجب أن تتجاوز 255 حرف"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      console.log("🚀 البيانات المرسلة:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("تم الحفظ بنجاح ✅");
      resetForm();
    } catch (error) {
      console.error(error);
      alert("حدث خطأ ما ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full ">
      <h2 className="text-xl font-semibold mb-4">إضافة إلى الطابور</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-7">
          {/* الاسم */}
          <div>
            <label
              htmlFor="personName"
              className="block text-sm font-medium text-gray-700"
            >
              اسم الشخص
            </label>
            <Field
              type="text"
              name="personName"
              id="personName"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <ErrorMessage
              name="personName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* الهاتف */}
          <div>
            <label
              htmlFor="personPhone"
              className="block text-sm font-medium text-gray-700"
            >
              رقم الهاتف
            </label>
            <Field
              type="text"
              name="personPhone"
              id="personPhone"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <ErrorMessage
              name="personPhone"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* عدد العناصر */}
          <div>
            <label
              htmlFor="numberOfItems"
              className="block text-sm font-medium text-gray-700"
            >
              عدد العناصر
            </label>
            <Field
              type="number"
              name="numberOfItems"
              id="numberOfItems"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <ErrorMessage
              name="numberOfItems"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* الملاحظات */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700"
            >
              الملاحظات
            </label>
            <Field
              as="textarea"
              name="notes"
              id="notes"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <ErrorMessage
              name="notes"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-secondary-100 text-white rounded hover:bg-secondary-200 disabled:bg-gray-400"
          >
            {loading ? "جاري الحفظ..." : "حفظ"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddToQueueForm;
