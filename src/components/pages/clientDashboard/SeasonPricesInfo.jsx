import React from "react";

const SeasonPricesInfo = ({
  sellPrice,
  buyPrice,
  refundPercent,
  cashRefund,
  plasticCanPrice,
  ironCanPrice,
  onEdit,
}) => {
  const rows = [
    { label: "سعر بيع الزيت:", value: `${sellPrice} شيكل/كغم` },
    { label: "سعر شراء الزيت:", value: `${buyPrice} شيكل/كغم` },
    { label: "نسبة الرد:", value: `${refundPercent}%` },
    { label: "سعر الرد النقدي:", value: `${cashRefund} شيكل/كغم` },
    { label: "سعر التنكة البلاستيك:", value: `${plasticCanPrice} شيكل` },
    { label: "سعر التنكة الحديد:", value: `${ironCanPrice} شيكل` },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold text-secondary-100 mb-4 border-b pb-2">
        المعلومات الثابتة للموسم الحالي
      </h2>

      <div className="space-y-3">
        {rows.map((row, idx) => (
          <div key={idx} className="flex justify-between text-gray-700 border-b border-secondary-200/30 py-2 px-1 items-center">
            <span className="font-medium">{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button
          onClick={onEdit}
          className="text-green-600 font-medium hover:underline"
        >
          تعديل المعلومات
        </button>
      </div>
    </div>
  );
};

export default SeasonPricesInfo;
