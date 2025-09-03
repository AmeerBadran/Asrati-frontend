import { motion as Motion } from "framer-motion";

const DashboardHeader = ({ title }) => {
  const today = new Date();
  const arabicDate = today.toLocaleDateString("ar-EG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-gray-300 pb-4 mb-6 flex w-full justify-between"
    >
      <h1 className="text-2xl font-semibold text-secondary-100">{title}</h1>
      <div className="flex font-medium text-secondary-100">{arabicDate}</div>
    </Motion.div>
  );
};

export default DashboardHeader;
