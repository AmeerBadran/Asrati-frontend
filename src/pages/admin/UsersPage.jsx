// src/pages/UsersPage.jsx
import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import DashboardHeader from "../../components/ui/DashboardHeader";
import { mockUsers } from "../../constants/fakeData/mockUsers";
import AddUserModal from "../../components/pages/users/AddUserModal";
import EditUserModal from "../../components/pages/users/EditUserModal";

export default function UsersPage() {
  const [users, setUsers] = useState(mockUsers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = (updated) => {
    setUsers(users.map((u) => (u.UserId === updated.UserId ? updated : u)));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* العنوان + زر إضافة */}
      <div className="mb-6">
        <DashboardHeader title="المستخدمون" />
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-secondary-100 text-white px-4 py-2 rounded-lg shadow hover:bg-secondary-200 transition"
        >
          + إضافة مستخدم
        </button>
      </div>

      {/* الجدول */}
      <div className="overflow-x-auto bg-white p-4 rounded-2xl shadow-lg">
        <Motion.table
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full border-collapse bg-white rounded-2xl overflow-hidden"
        >
          <thead>
            <tr className="bg-secondary-100 text-white">
              <th className="px-4 py-3 text-right">#</th>
              <th className="px-4 py-3 text-right">اسم المستخدم</th>
              <th className="px-4 py-3 text-right">رقم الهاتف</th>
              <th className="px-4 py-3 text-right">الحالة</th>
              <th className="px-4 py-3 text-right">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {users.map((user, idx) => (
                <Motion.tr
                  key={user.UserId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="border-b last:border-none hover:bg-blue-50 transition"
                >
                  <td className="px-4 py-3">{idx + 1}</td>
                  <td className="px-4 py-3 font-medium">{user.UserName}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {user.PhoneNumber}
                  </td>
                  <td className="px-4 py-3">
                    {user.IsActive ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        نشط
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        غير نشط
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setEditUser(user)}
                      className="px-3 py-1 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500 transition"
                    >
                      تعديل
                    </button>
                    <button className="mr-2 px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                      حذف
                    </button>
                  </td>
                </Motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </Motion.table>
      </div>

      {/* المودالات */}
      {showAddModal && (
        <AddUserModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddUser}
        />
      )}
      {editUser && (
        <EditUserModal
          user={editUser}
          onClose={() => setEditUser(null)}
          onUpdate={handleUpdateUser}
        />
      )}
    </div>
  );
}
