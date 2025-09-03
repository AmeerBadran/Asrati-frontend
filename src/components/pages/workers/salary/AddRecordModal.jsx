import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { calculateHours } from "./utils";

export default function AddRecordModal({ onClose, onSave }) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [rate, setRate] = useState(10);

  const handleSave = () => {
    const salary = calculateHours(startTime, endTime) * rate;
    onSave({
      startTime,
      endTime,
      ratePerHour: rate,
      salary,
      createdAt: new Date().toISOString(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <Motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-secondary-100 mb-6 border-b pb-2">
          إضافة سجل عمل جديد
        </h2>

        <label className="block mb-4">
          <span className="text-gray-700 font-medium">وقت البداية</span>
          <input
            type="datetime-local"
            className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-medium">وقت الانتهاء</span>
          <input
            type="datetime-local"
            className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-medium">الأجر بالساعة (ILS)</span>
          <input
            type="number"
            className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          />
        </label>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-medium"
          >
            إلغاء
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-secondary-100 text-white rounded-lg hover:bg-secondary-200 transition font-medium shadow-md"
          >
            حفظ
          </button>
        </div>
      </Motion.div>
    </div>
  );
}
