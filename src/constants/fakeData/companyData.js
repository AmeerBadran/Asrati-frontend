const companyData = {
  id: 1,
  name: "شركة أسرتي للزيتون",
  address: "طريق المعاصر، رام الله، فلسطين",
  ownerId: "u12345",
  ownerName: "محمد أحمد",
  isActive: true,
  createdAt: "2022-01-15T09:30:00Z",
  updatedAt: "2023-11-20T14:15:00Z",
  season: {
    id: 3,
    name: "موسم الزيتون 2023",
    startDate: "2023-09-01T00:00:00Z",
    endDate: "2023-12-31T00:00:00Z",
    isActive: true,
  },
  seasonBalances: [
    {
      id: 1,
      seasonId: 3,
      balanceType: "رصيد زيت",
      amount: 1200.5,
      unit: "لتر",
      createdAt: "2023-09-15T10:00:00Z",
    },
    {
      id: 2,
      seasonId: 3,
      balanceType: "رصيد نقدي",
      amount: 8500,
      unit: "شيكل",
      createdAt: "2023-10-10T12:30:00Z",
    },{
    id: 1,
    seasonId: 3,
    currentBalance: 7500.25,
    oilQuantityKg: 1200.5,
    createdAt: "2023-09-15T10:00:00Z",
    orderQueue: {
      tickedID: 101,
      personName: "أحمد يوسف",
      personPhone: "0599001122",
      numberOfItems: 5,
      notes: "تسليم الزيت خلال الأسبوع",
      companyID: 1,
      companyName: "شركة أسرتي للزيتون",
      seasonID: 3,
      seasonName: "موسم الزيتون 2023",
      enterDateTime: "2023-09-15T09:30:00Z"
    }
  },
  {
    id: 2,
    seasonId: 3,
    currentBalance: 4200,
    oilQuantityKg: 800,
    createdAt: "2023-10-10T12:30:00Z",
    orderQueue: {
      tickedID: 102,
      personName: "ليلى محمود",
      personPhone: "0567334455",
      numberOfItems: 3,
      notes: "طلب معصرة صغير",
      companyID: 1,
      companyName: "شركة أسرتي للزيتون",
      seasonID: 3,
      seasonName: "موسم الزيتون 2023",
      enterDateTime: "2023-10-09T15:45:00Z"
    }
  }
  ],
  seasonWorkersCount: 25,
};

export default companyData;
