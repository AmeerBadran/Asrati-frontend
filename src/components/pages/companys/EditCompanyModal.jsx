// src/components/EditCompanyModal.jsx
import { useState } from "react";

export default function EditCompanyModal({ company, onClose, onUpdate }) {
  const [form, setForm] = useState(company);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdate(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-4 text-right">تعديل الشركة</h2>

        <input
          name="Name"
          value={form.Name}
          placeholder="اسم الشركة"
          className="border p-2 rounded w-full mb-3 text-right"
          onChange={handleChange}
        />
        <input
          name="Address"
          value={form.Address}
          placeholder="العنوان"
          className="border p-2 rounded w-full mb-3 text-right"
          onChange={handleChange}
        />
        <input
          name="OwnerName"
          value={form.OwnerName || ""}
          placeholder="اسم المالك"
          className="border p-2 rounded w-full mb-3 text-right"
          onChange={handleChange}
        />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200">
            إلغاء
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 rounded bg-green-500 text-white"
          >
            تحديث
          </button>
        </div>
      </div>
    </div>
  );
}
