import { FaUsers } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdWork, MdOutlineQueue, MdDashboard } from "react-icons/md";
import { BsCashStack } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { GiOlive } from "react-icons/gi";
import { IoMdCalculator } from "react-icons/io";

const sidebarItems = [
  {
    type: "link",
    data: {
      href: "/client",
      icon: MdDashboard,
      label: "لوحة التحكم",
    },
  },
  {
    type: "dropdown",
    Icon: GiOlive,
    label: "الموسم",
    data: [
      {
        href: "/client/season/queue",
        label: "طابور الموسم",
        icon: MdOutlineQueue,
      },
      {
        href: "/client/season/calc-cost",
        label: "حساب الرد",
        icon: IoMdCalculator,
      },
    ],
  },
  {
    type: "link",
    data: {
      href: "/client/statistics",
      icon: BsCashStack,
      label: "إحصائيات الموسم",
    },
  },
  {
    type: "link",
    data: {
      href: "/client/customers",
      icon: FaUsers,
      label: "سجل الزبائن",
    },
  },
  {
    type: "link",
    data: {
      href: "/client/workers",
      icon: MdWork,
      label: "إدارة العمال",
    },
  },
  {
    type: "link",
    data: {
      href: "/client/settings",
      icon: FiSettings,
      label: "الإعدادات",
    },
  },
];

export default sidebarItems;
