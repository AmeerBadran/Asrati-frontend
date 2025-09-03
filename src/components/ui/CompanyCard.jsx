// src/components/CompanyCard.jsx
import { motion as Motion } from "framer-motion";

export default function CompanyCard({ company, onEdit }) {
  return (
    <Motion.div
      className="bg-white shadow-md rounded-2xl p-5 w-full sm:w-[300px] cursor-pointer hover:shadow-lg transition"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-xl font-semibold text-gray-800">{company.Name}</h2>
      <p className="text-gray-600">{company.Address}</p>
      <p className="text-gray-500 text-sm">Owner: {company.OwnerName || "N/A"}</p>
      <p
        className={`mt-2 px-3 py-1 rounded-full text-sm w-fit ${
          company.IsActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {company.IsActive ? "Active" : "Inactive"}
      </p>
      <p className="text-gray-400 text-xs mt-2">
        Created: {new Date(company.CreatedAt).toLocaleDateString()}
      </p>

      <button
        onClick={() => onEdit(company)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Edit
      </button>
    </Motion.div>
  );
}
