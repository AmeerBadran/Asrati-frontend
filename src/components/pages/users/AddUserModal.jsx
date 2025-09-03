// src/components/AddUserModal.jsx
import { useState } from "react";

export default function AddUserModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    UserId: Date.now().toString(),
    PhoneNumber: "",
    UserName: "",
    IsActive: true,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-4 text-right">إضافة مستخدم</h2>

        <input
          name="UserName"
          placeholder="اسم المستخدم"
          className="border p-2 rounded w-full mb-3 text-right"
          onChange={handleChange}
        />
        <input
          name="PhoneNumber"
          placeholder="رقم الهاتف"
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
