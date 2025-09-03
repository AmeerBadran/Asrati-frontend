// src/components/AddCompanyModal.jsx
import { useState } from "react";

export default function AddCompanyModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    Name: "",
    Address: "",
    OwnerId: "",
    OwnerName: "",
    IsActive: true,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave({ ...form, Id: Date.now(), CreatedAt: new Date().toISOString() });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-4 text-right">إضافة شركة</h2>

        <input
          name="Name"
          placeholder="اسم الشركة"
          className="border p-2 rounded w-full mb-3 text-right"
          onChange={handleChange}
        />
        <input
          name="Address"
          placeholder="العنوان"
          className="border p-2 rounded w-full mb-3 text-right"
          onChange={handleChange}
        />
        <input
          name="OwnerName"
          placeholder="اسم المالك"
          className="border p-2 rounded w-full mb-3 text-right"
          onChange={handleChange}
        />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200">
            إلغاء
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-500 text-white"
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
