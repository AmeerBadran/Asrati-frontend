import { motion as Motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaUsers, FaBox, FaDollarSign, FaChartLine, FaBell, FaEnvelope } from "react-icons/fa";

export default function Dashboard() {
  const stats = [
    {
      title: "Users",
      value: "1,250",
      icon: <FaUsers />,
      color: "bg-secondary-100",
    },
    {
      title: "Orders",
      value: "320",
      icon: <FaBox />,
      color: "bg-secondary-100",
    },
    {
      title: "Revenue",
      value: "$12,400",
      icon: <FaDollarSign />,
      color: "bg-secondary-100",
    },
    {
      title: "Growth",
      value: "+24%",
      icon: <FaChartLine />,
      color: "bg-secondary-100",
    },
  ];

  const dataLine = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 700 },
    { name: "May", value: 600 },
  ];

  const dataPie = [
    { name: "Products", value: 400 },
    { name: "Services", value: 300 },
    { name: "Others", value: 200 },
  ];

  const COLORS = ["#2E8BFF", "#56C596", "#FF9F40"];

  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Ali Ahmad", email: "ali@example.com", role: "User" },
  ];

  const notifications = [
{ id: 1, message: "New user registered", time: "2m ago" },
{ id: 2, message: "Order #1234 has been placed", time: "15m ago" },
{ id: 3, message: "Server backup completed", time: "1h ago" },
];


const messages = [
{ id: 1, sender: "Support", subject: "Ticket #543 update", time: "10m ago" },
{ id: 2, sender: "Marketing", subject: "Campaign results", time: "1h ago" },
{ id: 3, sender: "Client X", subject: "Project feedback", time: "3h ago" },
];

  return (
    <div className="flex min-h-screen ">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((s, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow p-5 flex items-center space-x-4"
            >
              <div className={`p-4 rounded-full text-white ${s.color}`}>
                {s.icon}
              </div>
              <div>
                <h3 className="text-gray-500">{s.title}</h3>
                <p className="text-xl font-bold">{s.value}</p>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dataLine}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2E8BFF"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h2 className="text-lg font-semibold mb-4">
              Categories Distribution
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={dataPie}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label
                >
                  {dataPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <FaBell /> <span>Notifications</span>
            </h2>
            <ul className="space-y-3">
              {notifications.map((n) => (
                <li key={n.id} className="border-b pb-2">
                  <p className="font-medium">{n.message}</p>
                  <span className="text-gray-500 text-sm">{n.time}</span>
                </li>
              ))}
            </ul>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <FaEnvelope /> <span>Messages</span>
            </h2>
            <ul className="space-y-3">
              {messages.map((m) => (
                <li key={m.id} className="border-b pb-2">
                  <p className="font-medium">{m.subject}</p>
                  <span className="text-gray-500 text-sm">
                    From {m.sender} - {m.time}
                  </span>
                </li>
              ))}
            </ul>
          </Motion.div>
        </div>
        {/* Table */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <h2 className="text-lg font-semibold mb-4">Users List</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary-100 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Motion.div>
      </div>
    </div>
  );
}
