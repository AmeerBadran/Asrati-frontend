import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion as Motion } from "framer-motion";
import DashboardHeader from "../../components/ui/DashboardHeader";

// ✅ التحقق من الحقول
const SeasonSchema = Yup.object().shape({
  RidPercentage: Yup.number().required("هذا الحقل مطلوب"),
  PlasticTankCost: Yup.number().required("هذا الحقل مطلوب"),
  SteelTankCost: Yup.number().required("هذا الحقل مطلوب"),
  ServiceCostPerKg: Yup.number().required("هذا الحقل مطلوب"),
  OilSellingCost: Yup.number().required("هذا الحقل مطلوب"),
  OilBuyingCost: Yup.number().required("هذا الحقل مطلوب"),
  IsActiveSeason: Yup.boolean().required("هذا الحقل مطلوب"),
});

const SeasonDetailsPage = () => {
  const [season, setSeason] = useState({
    SeasonID: 1,
    CompanyID: 101,
    RidPercentage: 12.5,
    PlasticTankCost: 50,
    SteelTankCost: 100,
    ServiceCostPerKg: 2,
    OilSellingCost: 20,
    OilBuyingCost: 18,
    IsActiveSeason: true,
    CreatedAt: "2025-01-10",
    UpdatedAt: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (values) => {
    setSeason({ ...season, ...values, UpdatedAt: new Date().toISOString() });
    setIsModalOpen(false);
  };

  // ✅ التسميات بالعربية
  const labels = {
    RidPercentage: "نسبة الرِّيد",
    PlasticTankCost: "تكلفة الخزان البلاستيكي",
    SteelTankCost: "تكلفة الخزان الحديدي",
    ServiceCostPerKg: "تكلفة الخدمة لكل كغم",
    OilSellingCost: "سعر بيع زيت الزيتون",
    OilBuyingCost: "سعر شراء زيت الزيتون",
    IsActiveSeason: "هل الموسم فعال؟",
    SeasonID: "رقم الموسم",
    CompanyID: "رقم الشركة",
    CreatedAt: "تاريخ الإنشاء",
    UpdatedAt: "آخر تعديل",
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <DashboardHeader title="تفاصيل الموسم" />   

        {/* ✅ عرض البيانات */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(season).map(([key, value]) => (
            <Motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-sm p-4"
            >
              <h3 className="text-gray-500 text-lg font-semibold mb-1">
                {labels[key] || key}
              </h3>
              <p className="font-semibold text-gray-800">
                {value?.toString() || "—"}
              </p>
            </Motion.div>
          ))}
        </div>

        {/* ✅ زر التعديل */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-secondary-100 text-white rounded-xl shadow hover:opacity-90 transition"
          >
            تعديل
          </button>
        </div>
      </Motion.div>

      {/* ✅ المودال */}
      {isModalOpen && (
        <Motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg"
          >
            <h2 className="text-xl font-bold text-secondary-100 mb-4">
              تعديل بيانات الموسم
            </h2>

            <Formik
              initialValues={season}
              validationSchema={SeasonSchema}
              onSubmit={handleSave}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  {[
                    "RidPercentage",
                    "PlasticTankCost",
                    "SteelTankCost",
                    "ServiceCostPerKg",
                    "OilSellingCost",
                    "OilBuyingCost",
                  ].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700">
                        {labels[field]}
                      </label>
                      <Field
                        name={field}
                        type="number"
                        className="w-full p-2 border rounded-lg mt-1"
                      />
                      <ErrorMessage
                        name={field}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  ))}

                  {/* Boolean */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {labels.IsActiveSeason}
                    </label>
                    <Field
                      as="select"
                      name="IsActiveSeason"
                      className="w-full p-2 border rounded-lg mt-1"
                    >
                      <option value={true}>نعم</option>
                      <option value={false}>لا</option>
                    </Field>
                    <ErrorMessage
                      name="IsActiveSeason"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {/* أزرار */}
                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                    >
                      إلغاء
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 rounded-lg bg-secondary-100 text-white hover:opacity-90"
                    >
                      حفظ
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </Motion.div>
        </Motion.div>
      )}
    </div>
  );
};

export default SeasonDetailsPage;
