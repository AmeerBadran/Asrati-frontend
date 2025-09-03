import dashboardImage from "../../../assets/dashboardImage.png";
import { motion as Motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaUserTie,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const formatDateTime = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);

  return date.toLocaleDateString("ar-EG", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const CompanyInfo = ({
  name,
  address,
  ownerName,
  isActive,
  createdAt,
  updatedAt,
  onEdit,
  onDelete,
}) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 rounded-2xl shadow-xl flex items-center justify-between gap-8 mb-8 border border-gray-200"
    >
      {/* النصوص */}
      <div className="flex flex-col justify-between items-start h-full flex-1 space-y-3">
        <h2 className="text-3xl font-bold text-secondary tracking-wide">
          {name || "اسم الشركة"}
        </h2>

        <div className="space-y-3 text-base">
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>{address || "عنوان الشركة"}</span>
          </p>

          <p className="text-gray-600 flex items-center gap-2">
            <FaUserTie className="text-purple-500" />
            <span>{ownerName || "المالك"}</span>
          </p>

          <p className="text-gray-600 flex items-center gap-2">
            {isActive ? (
              <FaCheckCircle className="text-green-600" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
            <span>
              حالة الحساب:{" "}
              <span
                className={`${
                  isActive ? "text-green-700" : "text-red-600"
                } font-semibold`}
              >
                {isActive ? "نشط" : "غير نشط"}
              </span>
            </span>
          </p>

          <p className="text-gray-600 flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>
              تاريخ الإنشاء: {formatDateTime(createdAt) || "غير محدد"}
            </span>
          </p>

          <p className="text-gray-600 flex items-center gap-2">
            <FaClock className="text-rose-500" />
            <span>
              آخر تعديل: {formatDateTime(updatedAt) || "غير محدد"}
            </span>
          </p>
        </div>

        {/* الأزرار */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={onEdit}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaEdit /> تعديل
          </button>

          <button
            onClick={onDelete}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
          >
            <FaTrash /> حذف
          </button>
        </div>
      </div>

      {/* الصورة */}
      <div className="relative h-68 flex-shrink-0">
        <Motion.img
          src={dashboardImage}
          alt="Company"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full h-full object-cover"
        />
      </div>
    </Motion.div>
  );
};

export default CompanyInfo;
