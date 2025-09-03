import React from "react";

const DailyStats = ({
  queueCount,
  invoicesCount,
  totalOil,
  oilRefund,
  cashRefund,
  totalCustomers,
}) => {
  const rows = [
    { label: "عدد الزبائن في الطابور:", value: queueCount },
    { label: "عدد الفواتير المصدرة اليوم:", value: invoicesCount },
    { label: "إجمالي الزيت المعصور اليوم:", value: `${totalOil.toFixed(2)} كغم` },
    { label: "إجمالي الرد بالزيت:", value: `${oilRefund.toFixed(2)} كغم` },
    { label: "إجمالي الرد النقدي:", value: `${cashRefund.toFixed(2)} شيكل` },
    { label: "إجمالي عدد الزبائن:", value: totalCustomers },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold text-secondary-100 mb-4 border-b pb-2">
        إحصائيات اليوم
      </h2>

      <div className="space-y-3">
        {rows.map((row, idx) => (
          <div key={idx} className="flex justify-between text-gray-700 border-b border-secondary-200/30 py-2 px-1 items-center">
            <span className="font-medium">{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyStats;
