import React, { useState, useMemo } from "react";
import { motion as Motion } from "framer-motion";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FaMoneyBillWave,
  FaOilCan,
  FaBoxOpen,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import DashboardHeader from "../../components/ui/DashboardHeader";

// بيانات تجريبية
const mockData = [
  {
    id: 1,
    personName: "عميل ١",
    phone: "0599000000",
    itemsCount: 10,
    notes: "—",
    cash: 260,
    oilQty: 0,
    createdAt: "2025-05-29T15:06:27Z",
  },
  {
    id: 2,
    personName: "عميل ٢",
    phone: "0523456789",
    itemsCount: 3,
    notes: "ملاحظات",
    cash: 230,
    oilQty: 8.4,
    createdAt: "2025-05-29T15:06:51Z",
  },
  {
    id: 3,
    personName: "عميل ٣",
    phone: "0522222222",
    itemsCount: 5,
    notes: "—",
    cash: 150,
    oilQty: 0.7,
    createdAt: "2025-08-24T08:22:13Z",
  },
  {
    id: 4,
    personName: "عميل ٤",
    phone: "0599777777",
    itemsCount: 1,
    notes: "—",
    cash: 0,
    oilQty: 160,
    createdAt: "2025-08-28T10:41:00Z",
  },
];

// دوال مساعدة
const formatNumber = (n) =>
  new Intl.NumberFormat("ar-EG", { maximumFractionDigits: 2 }).format(n);

export default function SeasonStatistics() {
  const [range, setRange] = useState("day");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    if (!query.trim()) return mockData;
    return mockData.filter((r) =>
      [r.personName, r.phone, r.notes]
        .filter(Boolean)
        .some((v) => v.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  const totals = useMemo(() => {
    return rows.reduce(
      (acc, r) => {
        acc.cash += r.cash || 0;
        acc.oil += r.oilQty || 0;
        acc.items += r.itemsCount || 0;
        return acc;
      },
      { cash: 0, oil: 0, items: 0 }
    );
  }, [rows]);

  const chartData = useMemo(() => {
    const map = {};
    mockData.forEach((r) => {
      const date = new Date(r.createdAt).toISOString().split("T")[0];
      if (!map[date]) map[date] = { label: date, cash: 0, oil: 0 };
      map[date].cash += r.cash;
      map[date].oil += r.oilQty;
    });
    return Object.values(map);
  }, []);

  return (
    <div dir="rtl" className="">
      <div className="space-y-6">
        {/* العنوان */}

        <DashboardHeader title="إحصائيات الموسم" />

        {/* الفلاتر */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between bg-white p-4 rounded-xl shadow">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="day">يومي</option>
            <option value="week">أسبوعي</option>
            <option value="month">شهري</option>
          </select>

          <input
            type="text"
            placeholder="ابحث بالاسم أو الهاتف..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full md:w-80"
          />
        </div>

        {/* بطاقات الإحصائيات */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
            <FaMoneyBillWave className="text-4xl" />
            <div>
              <h3 className="font-semibold">إجمالي النقد</h3>
              <p className="text-3xl font-bold">{formatNumber(totals.cash)}</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
            <FaOilCan className="text-4xl" />
            <div>
              <h3 className="font-semibold">إجمالي الزيت</h3>
              <p className="text-3xl font-bold">{formatNumber(totals.oil)}</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-4">
            <FaBoxOpen className="text-4xl" />
            <div>
              <h3 className="font-semibold">عدد العناصر</h3>
              <p className="text-3xl font-bold">{formatNumber(totals.items)}</p>
            </div>
          </div>
        </div>

        {/* الرسم البياني */}
        <div className="bg-white p-6 rounded-xl shadow h-[550px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="cash"
                fill="#22c55e"
                name="النقد"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="oil"
                fill="#f59e0b"
                name="الزيت"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* الجدول */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-5">
          <table className="w-full text-sm text-right">
            <thead className="bg-secondary-100 text-white">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">الاسم</th>
                <th className="p-3">الهاتف</th>
                <th className="p-3">عدد العناصر</th>
                <th className="p-3">ملاحظات</th>
                <th className="p-3">النقد</th>
                <th className="p-3">الزيت</th>
                <th className="p-3">التاريخ</th>
                <th className="p-3">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.id}
                  className="border-b hover:bg-secondary-100/10 transition"
                >
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{r.personName}</td>
                  <td className="p-3">{r.phone}</td>
                  <td className="p-3">{r.itemsCount}</td>
                  <td className="p-3">{r.notes}</td>
                  <td className="p-3 font-semibold text-green-600">
                    {formatNumber(r.cash)}
                  </td>
                  <td className="p-3 font-semibold text-yellow-600">
                    {formatNumber(r.oilQty)}
                  </td>
                  <td className="p-3">
                    {new Date(r.createdAt).toLocaleDateString("ar-EG")}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition">
                      <FaEye /> تفاصيل
                    </button>
                    <button className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition">
                      <FaEdit /> تعديل
                    </button>
                    <button className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition">
                      <FaTrash /> حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
