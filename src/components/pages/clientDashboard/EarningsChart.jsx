import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion as Motion } from "framer-motion";
import { mockEarningsData } from "../../../constants/fakeData/mockEarningsData";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const EarningsChart = () => {
  const [showCash, setShowCash] = useState(true);
  const [showOil, setShowOil] = useState(true);

  return (
    <Motion.div
      className="p-6 bg-white mt-6 rounded-2xl shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      dir="rtl"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        نظرة عامة على الأرباح
      </h2>

      {/* أزرار التحكم */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        <Motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowCash(!showCash)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-md transition ${
            showCash
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {showCash ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          {showCash ? "إخفاء النقد" : "إظهار النقد"}
        </Motion.button>

        <Motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowOil(!showOil)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-md transition ${
            showOil
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {showOil ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          {showOil ? "إخفاء النفط" : "إظهار النفط"}
        </Motion.button>
      </div>

      {/* المخطط */}
      <ResponsiveContainer width="100%" height={420}>
        <LineChart data={mockEarningsData}>
          <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value, name) =>
              name === "cash"
                ? [`${value} $`, "الأرباح النقدية"]
                : [`${value} $`, "أرباح النفط"]
            }
            labelStyle={{ fontWeight: "bold", color: "#374151" }}
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <Legend
            formatter={(value) =>
              value === "cash" ? "الأرباح النقدية" : "أرباح النفط"
            }
          />

          {showCash && (
            <Line
              type="monotone"
              dataKey="cash"
              stroke="#3b82f6"
              strokeWidth={4}
              dot={{ r: 5, strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              name="cash"
              animationDuration={800}
            />
          )}

          {showOil && (
            <Line
              type="monotone"
              dataKey="oil"
              stroke="#10b981"
              strokeWidth={4}
              dot={{ r: 5, strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              name="oil"
              animationDuration={800}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Motion.div>
  );
};

export default EarningsChart;
