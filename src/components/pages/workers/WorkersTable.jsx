"use client";
import { motion as Motion } from "framer-motion";
import Button from "../../ui/button";
import { Link } from "react-router-dom";

const WorkersTable = ({ onEdit }) => {
  const workers = [
    {
      workerID: 1,
      workerName: "احمد خالد",
      workerPhone: "222222222222",
      workerType: "شفت",
      rate: 25,
      seasonName: "الموسم الأول",
    },
    {
      workerID: 2,
      workerName: "خالد",
      workerPhone: "0000000000",
      workerType: "بالساعة",
      rate: 15,
      seasonName: "الموسم الأول",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg bg-white p-4">
      <Motion.table
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full border-collapse"
      >
        <thead className="bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-t-2xl text-white">
          <tr className="">
            <th className="p-3 text-sm font-semibold text-center">الاسم</th>
            <th className="p-3 text-sm font-semibold text-center">
              رقم الهاتف
            </th>
            <th className="p-3 text-sm font-semibold text-center">نوع العمل</th>
            <th className="p-3 text-sm font-semibold text-center">
              سعر الوحدة
            </th>
            <th className="p-3 text-sm font-semibold text-center">الموسم</th>
            <th className="p-3 text-sm font-semibold text-center">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker, index) => (
            <Motion.tr
              key={worker.workerID}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
              className="border-b last:border-0 text-center transition-colors"
            >
              <td className="p-3 text-gray-800 font-medium">
                {worker.workerName}
              </td>
              <td className="p-3 text-gray-600">{worker.workerPhone}</td>
              <td className="p-3 text-gray-600">{worker.workerType}</td>
              <td className="p-3 text-gray-600">{worker.rate}</td>
              <td className="p-3 text-gray-600">{worker.seasonName}</td>
              <td className="p-3">
                <Motion.div whileTap={{ scale: 0.9 }} className="flex flex-col sm:flex-row justify-center items-center gap-2">
                  <Link
                    to={`${worker.workerID}/salary`}
                    className="border bg-white focus:ring-2 focus:ring-gray-200 px-4 py-2 rounded-xl text-sm font-medium transition-colors focus:outline-none border-secondary-100 text-secondary-100 hover:bg-indigo-50 "
                  >
                    سجل العمل والراتب
                  </Link>
                  <Button
                    variant="outline"
                    className="rounded-xl border-secondary-100 text-secondary-100 hover:bg-indigo-50"
                    onClick={() => onEdit(worker)}
                  >
                    تعديل
                  </Button>
                </Motion.div>
              </td>
            </Motion.tr>
          ))}
        </tbody>
      </Motion.table>
    </div>
  );
};

export default WorkersTable;
