// app/workersDashboard/page.tsx (في حال كنت تستخدم Next.js App Router)
"use client";

import { useState } from "react";
import WorkersTable from "../../components/pages/workers/WorkersTable";
import WorkerModal from "../../components/pages/workers/WorkerModal";
import Button from "../../components/ui/button";
import DashboardHeader from "../../components/ui/DashboardHeader";

export default function WorkersDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);

  const handleAdd = () => {
    setSelectedWorker(null); // null يعني إضافة جديدة
    setIsModalOpen(true);
  };

  const handleEdit = (worker) => {
    setSelectedWorker(worker);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <DashboardHeader title="إدارة العمال" />
      <div className="flex justify-between items-center mb-4">
        <Button onClick={handleAdd}>إضافة عامل</Button>
      </div>

      <WorkersTable onEdit={handleEdit} />

      <WorkerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        worker={selectedWorker}
      />
    </div>
  );
}
