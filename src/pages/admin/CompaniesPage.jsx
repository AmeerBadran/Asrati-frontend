// src/pages/CompaniesPage.jsx
import { useState } from "react";
import { mockCompanies } from "../../constants/fakeData/mockCompanies";
import AddCompanyModal from "../../components/pages/companys/AddCompanyModal";
import EditCompanyModal from "../../components/pages/companys/EditCompanyModal";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardHeader from "../../components/ui/DashboardHeader";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState(mockCompanies);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editCompany, setEditCompany] = useState(null);

  const handleAddCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
  };

  const handleUpdateCompany = (updated) => {
    setCompanies(companies.map((c) => (c.Id === updated.Id ? updated : c)));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <DashboardHeader title="الشركات" />
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-secondary-100 text-white px-4 py-2 rounded-lg hover:bg-secondary-200 transition"
        >
          + إضافة شركة
        </button>
      </div>

      <div className="overflow-x-auto p-4 bg-white rounded-2xl shadow-lg">
        <Motion.table
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full border-collapse bg-white rounded-2xl overflow-hidden"
        >
          <thead>
            <tr className="bg-secondary-100 text-white">
              <th className="px-4 py-4 text-right">#</th>
              <th className="px-4 py-4 text-right">اسم الشركة</th>
              <th className="px-4 py-4 text-right">العنوان</th>
              <th className="px-4 py-4 text-right">المالك</th>
              <th className="px-4 py-4 text-right">الحالة</th>
              <th className="px-4 py-4 text-right">تاريخ الإنشاء</th>
              <th className="px-4 py-4 text-right">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {companies.map((company, idx) => (
                <Motion.tr
                  key={company.Id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="border-b last:border-none hover:bg-secondary-400 transition"
                >
                  <td className="px-4 py-3">{idx + 1}</td>
                  <td className="px-4 py-3 font-medium">{company.Name}</td>
                  <td className="px-4 py-3 text-gray-600">{company.Address}</td>
                  <td className="px-4 py-3">{company.OwnerName || "—"}</td>
                  <td className="px-4 py-3">
                    {company.IsActive ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        نشطة
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        غير نشطة
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-sm">
                    {new Date(company.CreatedAt).toLocaleDateString("ar-EG")}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setEditCompany(company)}
                      className="px-3 py-1 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition"
                    >
                      تعديل
                    </button>
                    <Link
                      to={`/cleint`}
                      className="mr-2 px-3 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                    >
                      التفاصيل
                    </Link>
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

      {showAddModal && (
        <AddCompanyModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddCompany}
        />
      )}

      {editCompany && (
        <EditCompanyModal
          company={editCompany}
          onClose={() => setEditCompany(null)}
          onUpdate={handleUpdateCompany}
        />
      )}
    </div>
  );
}
