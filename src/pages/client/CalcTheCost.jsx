import { useState } from "react";
import DashboardHeader from "../../components/ui/DashboardHeader";
import InvoiceForm from "../../components/pages/calcTheCost/InvoiceForm";
import InvoicePreview from "../../components/pages/calcTheCost/InvoicePreview";
import DataSection from "../../components/pages/calcTheCost/DataSection";

const CalcTheCost = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  const handleFormSubmit = (values) => {
    // هنا تعمل حساباتك (مثلاً حسب كمية الزيت وعدد التنكات)
    const refund = values.oilQuantity * 1.5; // مثال فقط
    const tanksPrice = values.plasticTanks * 10 + values.ironTanks * 20; // مثال
    const total = refund + tanksPrice;

    setInvoiceData({
      ...values,
      refund,
      tanksPrice,
      total,
    });
  };

  return (
    <div>
      <DashboardHeader title="حساب الرد" />
      <DataSection
        serviceCost={10}
        ridPercentage={0.12}
        plasticTankCost={10}
        steelTankCost={20}
        oilBuyingPrice={15}
        oilSellingPrice={18}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InvoiceForm onSubmitData={handleFormSubmit} />

        <InvoicePreview
          customer={invoiceData?.customer || ""}
          paymentMethod={invoiceData?.paymentMethod || ""}
          oilQuantity={invoiceData?.oilQuantity || 0}
          plasticTanks={invoiceData?.plasticTanks || 0}
          ironTanks={invoiceData?.ironTanks || 0}
          notes={invoiceData?.notes || ""}
          refund={invoiceData?.refund || 0}
          tanksPrice={invoiceData?.tanksPrice || 0}
          total={invoiceData?.total || 0}
        />
      </div>
    </div>
  );
};

export default CalcTheCost;
