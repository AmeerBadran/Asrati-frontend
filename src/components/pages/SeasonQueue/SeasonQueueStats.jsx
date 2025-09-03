import { GrUserWorker } from "react-icons/gr";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import StatCard from "../../ui/StatCard";

const SeasonQueueStats = ({ queueCount, completedCount, canceledCount }) => {
  const stats = [
    {
      title: "في الانتظار",
      value: queueCount || 0,
      icon: <GrUserWorker className="text-2xl text-indigo-800" />,
      bg: "bg-indigo-100",
      type: "notPrice",
    },
    {
      title: "الطلبات المنجزة",
      value: completedCount || 0,
      icon: <FaCheckCircle className="text-2xl text-green-600" />,
      bg: "bg-green-100",
      type: "notPrice",
    },
    {
      title: "الطلبات الملغاة",
      value: canceledCount || 0,
      icon: <FaTimesCircle className="text-2xl text-red-600" />,
      bg: "bg-red-100",
      type: "notPrice",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((item, i) => (
        <StatCard
          key={i}
          index={i}
          title={item.title}
          value={item.value}
          icon={item.icon}
          bg={item.bg}
          type={item.type}
        />
      ))}
    </section>
  );
};

export default SeasonQueueStats;
