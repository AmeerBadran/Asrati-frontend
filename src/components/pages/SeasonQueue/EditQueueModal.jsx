import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditQueueModal = ({ isOpen, onClose, initialData, onSave }) => {
  if (!isOpen) return null;

  const validationSchema = Yup.object({
    personName: Yup.string().required("اسم الشخص مطلوب"),
    personPhone: Yup.string()
      .matches(/^[0-9]{10}$/, "رقم الهاتف يجب أن يكون 10 أرقام")
      .required("رقم الهاتف مطلوب"),
    numberOfItems: Yup.number().min(1, "يجب أن يكون العدد 1 على الأقل"),
    notes: Yup.string().max(255, "الملاحظات لا يجب أن تتجاوز 255 حرف"),
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">
        <h2 className="text-lg font-semibold mb-4">تعديل الزبون</h2>
        <Formik
          initialValues={initialData}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSave(values);
            onClose();
          }}
        >
          <Form className="space-y-4">
            {/* الاسم */}
            <div>
              <label className="block text-sm font-medium">اسم الشخص</label>
              <Field
                type="text"
                name="personName"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="personName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* الهاتف */}
            <div>
              <label className="block text-sm font-medium">رقم الهاتف</label>
              <Field
                type="text"
                name="personPhone"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="personPhone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* عدد العناصر */}
            <div>
              <label className="block text-sm font-medium">عدد العناصر</label>
              <Field
                type="number"
                name="numberOfItems"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="numberOfItems"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* الملاحظات */}
            <div>
              <label className="block text-sm font-medium">الملاحظات</label>
              <Field
                as="textarea"
                name="notes"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="notes"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-secondary-100 text-white rounded hover:bg-secondary-200"
              >
                حفظ التعديلات
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditQueueModal;
