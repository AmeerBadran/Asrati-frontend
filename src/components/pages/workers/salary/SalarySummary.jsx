import { motion as Motion } from "framer-motion";

export default function SalarySummary({ totalSalary, totalPaid, remaining }) {
  const percentage = totalSalary > 0 ? (totalPaid / totalSalary) * 100 : 0;

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
        ملخص الراتب
      </h2>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="px-5 py-2 bg-green-100 rounded-lg font-medium text-green-700 shadow-sm">
          إجمالي الراتب: {totalSalary.toFixed(2)} ILS
        </span>
        <span className="px-5 py-2 bg-blue-100 rounded-lg font-medium text-blue-700 shadow-sm">
          المدفوع: {totalPaid.toFixed(2)} ILS
        </span>
        <span className="px-5 py-2 bg-yellow-100 rounded-lg font-medium text-yellow-700 shadow-sm">
          المتبقي: {remaining.toFixed(2)} ILS
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
        <Motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full"
        />
      </div>

      <p className="text-sm text-gray-600 mt-3">
        تم دفع <span className="font-semibold text-green-700">{totalPaid} </span> 
        من أصل <span className="font-semibold text-blue-700">{totalSalary} </span> 
        (النسبة: {percentage.toFixed(0)}%) 
      </p>
    </Motion.div>
  );
}
