// src/components/EditUserModal.jsx
import { useState } from "react";

export default function EditUserModal({ user, onClose, onUpdate }) {
  const [form, setForm] = useState(user);

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
        <h2 className="text-lg font-semibold mb-4 text-right">تعديل المستخدم</h2>

        <input
          name="UserName"
          value={form.UserName}
          placeholder="اسم المستخدم"
          className="border p-2 rounded w-full mb-3 text-right"
          onChange={handleChange}
        />
        <input
          name="PhoneNumber"
          value={form.PhoneNumber}
          placeholder="رقم الهاتف"
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
