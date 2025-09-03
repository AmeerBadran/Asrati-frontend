import { MdDashboard } from "react-icons/md";
import { FaBuilding, FaUsers } from "react-icons/fa";

const sidebarItems = [
  {
    type: "link",
    data: {
      href: "/admin",
      icon: MdDashboard,
      label: "لوحة التحكم",
    },
  },
  {
    type: "link",
    data: {
      href: "/admin/companies",
      icon: FaBuilding,
      label: "الشركات",
    },
  },
  {
    type: "link",
    data: {
      href: "/admin/users",
      icon: FaUsers,
      label: "المستخدمين",
    },
  },
];

export default sidebarItems;
