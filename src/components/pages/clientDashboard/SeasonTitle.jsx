import { motion as Motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const formatDateTime = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);

  return date.toLocaleDateString("ar-EG", {
    day: "2-digit",
    month: "long", // شهر بالكلمات أجمل
    year: "numeric",
  });
};

const SeasonTitle = ({ seasonName, startDate, endDate, isActive }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center mb-6 py-4 px-6 
                 bg-gradient-to-r from-white to-gray-50 
                 rounded-2xl shadow-md hover:shadow-xl border border-gray-200"
    >
      {/* القسم الأول: اسم الموسم وحالته */}
      <div className="flex items-center gap-3">
        <FaCalendarAlt className="text-blue-500 text-xl" />
        <h3 className="text-2xl font-semibold text-secondary-100">
          {seasonName}
        </h3>
        <p
          className={`text-sm px-2 py-1 rounded-lg ${
            isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {isActive ? "نشط" : "غير نشط"}
        </p>
      </div>

      {/* القسم الثاني: التاريخ */}
      <div className="flex gap-2 items-center text-gray-700 font-medium">
        <p>{formatDateTime(startDate)}</p>
        <span>-</span>
        <p>{endDate ? formatDateTime(endDate) : "غير محدد"}</p>
      </div>
    </Motion.div>
  );
};

export default SeasonTitle;
