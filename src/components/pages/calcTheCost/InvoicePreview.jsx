import { motion as Motion } from "framer-motion";
import { FaFileInvoiceDollar } from "react-icons/fa";

const InvoicePreview = ({
  customer,
  paymentMethod,
  oilQuantity,
  plasticTanks,
  ironTanks,
  notes,
  refund,
  tanksPrice,
  total,
}) => {
  if (!customer) {
    return (
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl w-full shadow-lg p-8 flex items-center justify-center text-gray-400 font-semibold"
      >
        لم يتم إدخال بيانات بعد
      </Motion.div>
    );
  }

  return (
    <Motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden w-full"
    >
      {/* Header */}
      <div className="bg-secondary-100 text-white p-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">فاتورة معصرة الزيتون</h2>
          <p className="text-sm text-green-100">
            {new Date().toLocaleDateString("ar-EG")}
          </p>
        </div>
        <FaFileInvoiceDollar className="text-5xl opacity-80" />
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        {/* Customer Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500">اسم الزبون:</p>
            <p className="font-semibold">{customer}</p>
          </div>
          <div>
            <p className="text-gray-500">طريقة الدفع:</p>
            <p className="font-semibold">
              {paymentMethod === "oil"
                ? "دفع بالزيت"
                : paymentMethod === "cash"
                ? "دفع نقداً"
                : "دفع مختلط (زيت + نقدي)"}
            </p>
          </div>
          <div>
            <p className="text-gray-500">إجمالي الزيت المنتج:</p>
            <p className="font-semibold">{oilQuantity} كغم</p>
          </div>
          <div>
            <p className="text-gray-500">عدد التنكات:</p>
            <p className="font-semibold">
              {plasticTanks} بلاستيك + {ironTanks} حديد
            </p>
          </div>
        </div>

        <hr className="my-4" />

        {/* Financial Section */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3 border">
          <div className="flex justify-between">
            <span className="text-gray-600">الرد (نقداً):</span>
            <span className="font-semibold">{refund.toFixed(2)} شيكل</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ثمن التنكات:</span>
            <span className="font-semibold">{tanksPrice.toFixed(2)} شيكل</span>
          </div>
          <div className="flex justify-between text-lg border-t pt-3">
            <span className="font-bold text-green-700">الإجمالي:</span>
            <span className="font-bold text-green-700">
              {total.toFixed(2)} شيكل
            </span>
          </div>
        </div>

        {/* Notes */}
        {notes && (
          <div className="mt-4">
            <p className="text-gray-500 mb-1">ملاحظات:</p>
            <p className="bg-gray-100 p-3 rounded-lg text-sm border border-black/20">{notes}</p>
          </div>
        )}
      </div>
    </Motion.div>
  );
};

export default InvoicePreview;
