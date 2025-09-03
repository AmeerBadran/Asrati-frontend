import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaClipboardList,
  FaStickyNote,
  FaTrash,
  FaEdit,
  FaSync,
} from "react-icons/fa";

const QueueList = ({ customers, onEdit, onDelete, onToggleStatus }) => {
  const [filter, setFilter] = useState("all");

  if (!customers || customers.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-6">
        لا يوجد زبائن في الطابور حاليًا
      </p>
    );
  }

  const filteredCustomers = customers.filter((cust) => {
    if (filter === "all") return true;
    if (filter === "waiting") return !cust.IsProcessed && !cust.IsCanceled;
    if (filter === "done") return cust.IsProcessed;
    if (filter === "canceled") return cust.IsCanceled;
    return true;
  });

  return (
    <div className="flex flex-col gap-2 col-span-2">
      {/* Filter Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-white p-4 rounded-2xl shadow-md">
        <button
          className={`px-3 py-1 rounded-lg ${
            filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setFilter("all")}
        >
          الكل
        </button>
        <button
          className={`px-3 py-1 rounded-lg ${
            filter === "waiting" ? "bg-yellow-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => setFilter("waiting")}
        >
          قيد الانتظار ⌛
        </button>
        <button
          className={`px-3 py-1 rounded-lg ${
            filter === "done" ? "bg-green-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setFilter("done")}
        >
          تمت المعالجة ✅
        </button>
        <button
          className={`px-3 py-1 rounded-lg ${
            filter === "canceled" ? "bg-red-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setFilter("canceled")}
        >
          ملغاة ❌
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4 max-h-[500px] overflow-y-scroll scroll-my-3 pr-2 bg-white p-4 rounded-2xl shadow-md">
        {filteredCustomers.map((cust, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-md border border-secondary-200 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-lg transition"
          >
            {/* البيانات */}
            <div className="flex flex-col gap-1 text-sm text-gray-700">
              <div className="flex items-center gap-2 font-bold text-lg text-gray-900">
                <FaUser className="text-indigo-500" /> {cust.PersonName}
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-green-500" /> {cust.PersonPhone}
              </div>
              <div className="flex items-center gap-2">
                <FaClipboardList className="text-blue-500" />{" "}
                {cust.NumberOfItems} عناصر
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaStickyNote className="text-yellow-500" /> {cust.Notes || "—"}
              </div>
            </div>

            {/* الحالة + أزرار */}
            <div className="flex flex-col gap-3 items-center md:items-end">
              <span
                className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${
                  cust.IsCanceled
                    ? "bg-red-100 text-red-700"
                    : cust.IsProcessed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {cust.IsCanceled
                  ? "ملغاة ❌"
                  : cust.IsProcessed
                  ? "تمت المعالجة ✅"
                  : "قيد الانتظار ⌛"}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => onEdit?.(cust)}
                  className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete?.(cust)}
                  className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                >
                  <FaTrash />
                </button>
                <button
                  onClick={() => onToggleStatus?.(cust)}
                  className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200"
                >
                  <FaSync />
                </button>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default QueueList;
