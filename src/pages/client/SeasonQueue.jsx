import { useState } from "react";
import DashboardHeader from "../../components/ui/DashboardHeader";
import SeasonQueueStats from "../../components/pages/SeasonQueue/SeasonQueueStats";
import QueueList from "../../components/pages/SeasonQueue/QueueList";
import fakeQueueData from "../../constants/fakeData/queueData";
import AddToQueueForm from "../../components/pages/SeasonQueue/AddToQueueForm";
import EditQueueModal from "../../components/pages/SeasonQueue/EditQueueModal";

const SeasonQueue = () => {
  const [customers, setCustomers] = useState(fakeQueueData);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleEdit = (cust) => {
    setSelectedCustomer({
      personName: cust.PersonName,
      personPhone: cust.PersonPhone,
      numberOfItems: cust.NumberOfItems,
      notes: cust.Notes,
    });
    setEditModalOpen(true);
  };

  const handleSaveEdit = (updated) => {
    setCustomers((prev) =>
      prev.map((c) =>
        c.PersonPhone === updated.personPhone ? { ...c, ...updated } : c
      )
    );
  };

  return (
    <div>
      <DashboardHeader title="طابور الموسم" />
      <SeasonQueueStats
        queueCount={15}
        completedCount={120}
        canceledCount={8}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-6 gap-y-6 mt-6">
        <AddToQueueForm />
        <QueueList
          customers={customers}
          onEdit={handleEdit}
          onDelete={(cust) =>
            setCustomers((prev) =>
              prev.filter((c) => c.PersonPhone !== cust.PersonPhone)
            )
          }
          onToggleStatus={(cust) =>
            setCustomers((prev) =>
              prev.map((c) =>
                c.PersonPhone === cust.PersonPhone
                  ? { ...c, IsProcessed: !c.IsProcessed }
                  : c
              )
            )
          }
        />
      </div>

      <EditQueueModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        initialData={selectedCustomer}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default SeasonQueue;
