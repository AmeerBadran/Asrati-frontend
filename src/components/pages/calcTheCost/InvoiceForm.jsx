import { useFormik } from "formik";
import * as Yup from "yup";
import { motion as Motion } from "framer-motion";
import {
  FaFlask,
  FaMoneyBill,
  FaSave,
  FaStickyNote,
  FaUser,
} from "react-icons/fa";
import { FaFlaskVial } from "react-icons/fa6";
import { MdOilBarrel } from "react-icons/md";

const InvoiceForm = ({ onSubmitData }) => {
  const formik = useFormik({
    initialValues: {
      customer: "",
      oilQuantity: "",
      paymentMethod: "",
      plasticTanks: "",
      ironTanks: "",
      notes: "",
    },
    validationSchema: Yup.object({
      customer: Yup.string().required("الرجاء اختيار الزبون"),
      oilQuantity: Yup.number().required("أدخل كمية الزيت").positive(),
      paymentMethod: Yup.string().required("اختر طريقة الدفع"),
      plasticTanks: Yup.number().required("أدخل عدد التنكات البلاستيك").min(0),
      ironTanks: Yup.number().required("أدخل عدد تنكات الحديد").min(0),
      notes: Yup.string(),
    }),
    onSubmit: (values) => {
      onSubmitData(values);
    },
  });

  return (
    <Motion.form
      onSubmit={formik.handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-green-800">
        🧾 معلومات الفاتورة
      </h2>

      {/* اختيار الزبون */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-gray-700">
          <FaUser /> اختر الزبون
        </label>
        <select
          name="customer"
          value={formik.values.customer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
        >
          <option value="">اختر الزبون...</option>
          <option value="زبون1">زبون 1</option>
          <option value="زبون2">زبون 2</option>
        </select>
        {formik.touched.customer && formik.errors.customer && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.customer}</p>
        )}
      </div>

      {/* كمية الزيت */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-gray-700">
          <MdOilBarrel /> كمية الزيت المنتجة (كغم)
        </label>
        <input
          type="number"
          name="oilQuantity"
          value={formik.values.oilQuantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
        />
        {formik.touched.oilQuantity && formik.errors.oilQuantity && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.oilQuantity}
          </p>
        )}
      </div>

      {/* طريقة الدفع */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-gray-700">
          <FaMoneyBill /> طريقة الدفع
        </label>
        <select
          name="paymentMethod"
          value={formik.values.paymentMethod}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
        >
          <option value="">اختر...</option>
          <option value="oil">دفع بالزيت</option>
          <option value="cash">دفع نقدي</option>
          <option value="mixed">دفع مختلط (زيت + نقدي)</option>
        </select>
        {formik.touched.paymentMethod && formik.errors.paymentMethod && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.paymentMethod}
          </p>
        )}
      </div>

      {/* التنكات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <FaFlask /> عدد التنكات البلاستيك
          </label>
          <input
            type="number"
            name="plasticTanks"
            value={formik.values.plasticTanks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
          />
          {formik.touched.plasticTanks && formik.errors.plasticTanks && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.plasticTanks}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <FaFlaskVial /> عدد تنكات الحديد
          </label>
          <input
            type="number"
            name="ironTanks"
            value={formik.values.ironTanks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
          />
          {formik.touched.ironTanks && formik.errors.ironTanks && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.ironTanks}
            </p>
          )}
        </div>
      </div>

      {/* ملاحظات */}
      <div>
        <label className="flex items-center gap-2 font-semibold text-gray-700">
          <FaStickyNote /> ملاحظات (اختياري)
        </label>
        <textarea
          name="notes"
          value={formik.values.notes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          rows={3}
          className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* زر */}
      <Motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
        className="w-full flex justify-center gap-2 items-center bg-secondary-100 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-secondary-200 transition"
      >
        <FaSave className="w-5 h-5" /> حساب الفاتورة
      </Motion.button>
    </Motion.form>
  );
};

export default InvoiceForm;
