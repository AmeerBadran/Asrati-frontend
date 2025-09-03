import { motion as Motion } from "framer-motion";

const StatCard = ({ title, value, icon, bg, type, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
      className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md flex items-center gap-4 border border-gray-100"
    >
      <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${bg}`}>
        {icon}
      </div>

      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">
          {type === "price"
            ? typeof value === "number"
              ? `₪ ${value.toLocaleString("en-EG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : value
            : value}
        </p>
      </div>
    </Motion.div>
  );
};

export default StatCard;
