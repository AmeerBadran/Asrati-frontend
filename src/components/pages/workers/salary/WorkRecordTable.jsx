import { formatDateTime, calculateHours } from "./utils";

export default function WorkRecordTable({ records }) {
  return (
    <div
       className="overflow-hidden rounded-t-2xl">
      <table className="w-full border-collapse text-right">
        <thead>
          <tr className="bg-secondary-100 text-white">
            <th className="p-4 font-semibold">#</th>
            <th className="p-4 font-semibold">بداية الدوام</th>
            <th className="p-4 font-semibold">نهاية الدوام</th>
            <th className="p-4 font-semibold">عدد الساعات</th>
            <th className="p-4 font-semibold">الأجر/ساعة</th>
            <th className="p-4 font-semibold">المستحق</th>
            <th className="p-4 font-semibold">تاريخ الإدخال</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {records.length > 0 ? (
            records.map((r, i) => (
              <tr
                key={r.salaryRecordID}
                className="border-b hover:bg-blue-50 transition duration-200"
              >
                <td className="p-4 text-gray-700 font-medium">{i + 1}</td>
                <td className="p-4 text-gray-600">
                  {formatDateTime(r.startTime)}
                </td>
                <td className="p-4 text-gray-600">
                  {formatDateTime(r.endTime)}
                </td>
                <td className="p-4 font-semibold text-indigo-600">
                  {calculateHours(r.startTime, r.endTime)} ساعة
                </td>
                <td className="p-4 font-semibold text-blue-600">
                  {r.ratePerHour.toFixed(2)} ILS
                </td>
                <td className="p-4 font-bold text-green-600">
                  {r.salary.toFixed(2)} ILS
                </td>
                <td className="p-4 text-gray-500">
                  {formatDateTime(r.createdAt)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="p-6 text-center text-gray-500 font-medium"
              >
                لا يوجد سجلات بعد
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
