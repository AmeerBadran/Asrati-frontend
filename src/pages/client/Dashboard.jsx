import DashboardHeader from "../../components/ui/DashboardHeader";
import DashboardStats from "../../components/pages/clientDashboard/CardStats";
import CompanyInfo from "../../components/pages/clientDashboard/CompanyInfo";
import fackCompanyData from "../../constants/fakeData/companyData";
import { useEffect, useState } from "react";
import SeasonTitle from "../../components/pages/clientDashboard/SeasonTitle";
import { Link } from "react-router-dom";
import { FaRegCalendarTimes } from "react-icons/fa";
import EarningsChart from "../../components/pages/clientDashboard/EarningsChart";
import CompanyEditFormModal from "../../components/features/CompanyEditFormModal";
import SeasonPricesInfo from "../../components/pages/clientDashboard/SeasonPricesInfo";
import DailyStats from "../../components/pages/clientDashboard/DailyStats";

const Dashboard = () => {
  const [companyData, setCompanyData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching data from an API
    setCompanyData(fackCompanyData);
  }, []);

  return (
    <div>
      <DashboardHeader title="لوحة التحكم" />
      <CompanyInfo
        name={companyData?.name}
        address={companyData?.address}
        ownerName={companyData?.ownerName}
        isActive={companyData?.isActive}
        createdAt={companyData?.createdAt}
        updatedAt={companyData?.updatedAt}
        onEdit={() => setIsOpen(true)}
        onDelete={() => {
          console.log("حذف الشركة");
        }}
      />
      <CompanyEditFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        name={companyData?.name}
        address={companyData?.address}
      />
      {companyData?.season ? (
        <>
          <SeasonTitle
            seasonName={companyData?.season?.name}
            startDate={companyData?.season?.startDate}
            endDate={companyData?.season?.endDate}
            isActive={companyData?.season?.isActive}
          />
          <DashboardStats
            earningsCash={
              companyData?.seasonBalances?.find(
                (balance) => balance.balanceType === "رصيد نقدي"
              )?.amount | 0
            }
            earningsOil={
              companyData?.seasonBalances?.find(
                (balance) => balance.balanceType === "رصيد زيت"
              )?.amount | 0
            }
            workerNumber={companyData?.seasonWorkersCount | 0}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            <SeasonPricesInfo
              sellPrice={25}
              buyPrice={23}
              refundPercent={6}
              cashRefund={1.5}
              plasticCanPrice={10}
              ironCanPrice={15}
              onEdit={() => console.log("Edit clicked")}
            />
            <DailyStats
              queueCount={3}
              invoicesCount={0}
              totalOil={0}
              oilRefund={0}
              cashRefund={0}
              totalCustomers={3}
            />
          </div>

          <EarningsChart />
        </>
      ) : (
        <div className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl shadow-md border border-gray-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 text-amber-600 w-12 h-12 flex items-center justify-center rounded-full shadow-sm">
              <FaRegCalendarTimes className="text-2xl" />
            </div>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              لا يوجد موسم نشط حاليًا. يرجى إنشاء موسم جديد لبدء تتبع الأرباح
              والعمال.
            </p>
          </div>
          <Link
            to="/client/seasons"
            className="px-5 py-2 bg-secondary text-white rounded-xl shadow hover:bg-secondary-100 transition font-medium"
          >
            إدارة المواسم
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
