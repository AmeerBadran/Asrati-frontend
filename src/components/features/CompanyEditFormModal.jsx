import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

const CompanyEditFormModal = ({ isOpen, onClose, name, address }) => {
  const companyEdirSchema = Yup.object({
    name: Yup.string()
      .min(2, "الاسم قصير جدًا")
      .max(100, "الاسم طويل جدًا")
      .required("مطلوب"),
    address: Yup.string()
      .min(5, "العنوان قصير جدًا")
      .max(200, "العنوان طويل جدًا")
      .required("مطلوب"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const toastId = toast.loading("جاري تحديث بيانات الشركة...");
    try {
      const res = await fetch("/api/company/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Update failed");

      toast.success("تم تحديث بيانات الشركة بنجاح!", { id: toastId });
    } catch (err) {
      console.error("Update error:", err);
      toast.error("فشل تحديث بيانات الشركة. حاول مرة أخرى.", { id: toastId });
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-120 w-full p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          تعديل بيانات الشركة
        </h2>
        <Formik
          initialValues={{ name: name || "", address: address || "" }}
          validationSchema={companyEdirSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  اسم الشركة
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  عنوان الشركة
                </label>
                <Field
                  as="textarea"
                  name="address"
                  id="address"
                  rows="3"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 resize-none"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  onClick={onClose}
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-100 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "جاري الحفظ..." : "حفظ التغييرات"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CompanyEditFormModal;
