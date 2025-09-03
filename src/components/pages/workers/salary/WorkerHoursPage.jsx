import { useState } from "react";
import WorkRecordTable from "./WorkRecordTable";
import SalarySummary from "./SalarySummary";
import AddRecordModal from "./AddRecordModal";
import DashboardHeader from "../../../ui/DashboardHeader";
import { motion as Motion } from "framer-motion";

export default function WorkerHoursPage({ workerName }) {
  const [records, setRecords] = useState([
    {
      salaryRecordID: 1,
      startTime: "2025-05-29T08:00:00",
      endTime: "2025-05-29T12:00:00",
      ratePerHour: 10,
      salary: 40,
      createdAt: "2025-05-29T12:05:00",
    },
    {
      salaryRecordID: 2,
      startTime: "2025-05-30T09:00:00",
      endTime: "2025-05-30T14:00:00",
      ratePerHour: 10,
      salary: 50,
      createdAt: "2025-05-30T14:10:00",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddRecord = (newRecord) => {
    setRecords([
      ...records,
      { ...newRecord, salaryRecordID: records.length + 1 },
    ]);
  };

  const totalSalary = records.reduce((sum, r) => sum + r.salary, 0);
  const totalPaid = 40; // مثال ثابت مؤقت
  const remaining = totalSalary - totalPaid;

  return (
    <div className="">
      <DashboardHeader title={`سجل ساعات العمل ${workerName}`} />

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-secondary-100 text-white mb-6 px-6 py-2 rounded-xl shadow hover:bg-secondary-200 transition"
      >
        اضافة سجل جديد
      </button>
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow rounded-2xl p-6 mb-6"
      >
        <WorkRecordTable records={records} />
      </Motion.div>

      <div className="bg-gray-50 shadow rounded-2xl p-6 mb-6">
        <SalarySummary
          totalSalary={totalSalary}
          totalPaid={totalPaid}
          remaining={remaining}
        />
      </div>

      {isModalOpen && (
        <AddRecordModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddRecord}
        />
      )}
    </div>
  );
}
