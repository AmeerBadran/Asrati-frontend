import { FaMoneyBillWave, FaPercentage, FaOilCan, FaStore } from "react-icons/fa";
import { BsFillBucketFill } from "react-icons/bs";
import { GiOilDrum } from "react-icons/gi";
import { motion as Motion } from "framer-motion";

const DataSection = ({
  serviceCost,
  ridPercentage,
  plasticTankCost,
  steelTankCost,
  oilBuyingPrice,
  oilSellingPrice,
}) => {
  const data = [
    {
      label: "تكلفة الخدمة",
      value: serviceCost,
      icon: <FaMoneyBillWave className="text-green-500" />,
      bg: "bg-green-50",
    },
    {
      label: "نسبة الرد",
      value: ridPercentage,
      icon: <FaPercentage className="text-blue-500" />,
      bg: "bg-blue-50",
    },
    {
      label: "الخزان البلاستيكي",
      value: plasticTankCost,
      icon: <BsFillBucketFill className="text-pink-500" />,
      bg: "bg-pink-50",
    },
    {
      label: "الخزان الحديدي",
      value: steelTankCost,
      icon: <GiOilDrum className="text-gray-600" />,
      bg: "bg-gray-100",
    },
    {
      label: "سعر شراء الزيت",
      value: oilBuyingPrice,
      icon: <FaOilCan className="text-yellow-500" />,
      bg: "bg-yellow-50",
    },
    {
      label: "سعر بيع الزيت",
      value: oilSellingPrice,
      icon: <FaStore className="text-purple-500" />,
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-secondary-100 text-center">
        البيانات التفصيلية
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <Motion.div
            key={index}
            className={`flex items-center justify-between p-4 rounded-xl shadow-sm ${item.bg} hover:shadow-md transition`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2, // كل كارد يظهر بعد الآخر
              ease: "easeOut",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{item.icon}</div>
              <span className="text-gray-700 font-medium">{item.label}</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {item.value}
            </span>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default DataSection;
