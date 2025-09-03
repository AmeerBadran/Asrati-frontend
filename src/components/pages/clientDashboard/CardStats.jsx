import { FaMoneyBillWave, FaDollarSign } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import StatCard from "../../ui/StatCard";

const CardStats = ({ workerNumber, earningsCash, earningsOil }) => {
  const stats = [
    {
      title: "عدد العمال",
      value: workerNumber || 0,
      icon: <GrUserWorker className="text-2xl text-indigo-800" />,
      bg: "bg-indigo-100",
      type: "notPrice",
    },
    {
      title: "الأرباح النقدية (سنويًا)",
      value: earningsCash || 0,
      icon: <FaMoneyBillWave className="text-2xl text-green-600" />,
      bg: "bg-green-100",
      type: "price",
    },
    {
      title: "أرباح الزيت (سنويًا)",
      value: earningsOil || 0,
      icon: <FaDollarSign className="text-2xl text-amber-600" />,
      bg: "bg-amber-100",
      type: "price",
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

export default CardStats;
