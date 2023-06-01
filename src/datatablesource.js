import logo from "./assets/images/logo-tab.png"
export const userColumns = [
  {
    field: "company",
    headerName: "Company",
    headerClassName: "customHeader",
    headerAlign: 'center',
    width: 100,
    renderCell: () => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={logo} alt="avatar" />
        </div>
      );
    },
  },
  { 
    field: "flightNumber", 
    headerClassName: "customHeader",
    headerName: "ID", 
    width: 70 ,
    headerAlign: 'center'
  },

  {
    field: "from",
    headerName: "From",
    width: 120,
    headerClassName: "customHeader",
    headerAlign: 'center',
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.from}
        </div>
      );
    },
  },

  {
    field: "to",
    headerName: "To",
    width: 120,
    headerClassName: "customHeader",
    headerAlign: 'center',
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.to}
        </div>
      );
    },
  },
  {
    field: "depart",
    headerName: "Depart",
    width: 200,
    headerAlign: 'center',
    headerClassName: "customHeader",
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.depart}
        </div>
      );
    },
  },
  {
    field: "arrive",
    headerName: "Arrive",
    width: 200,
    headerAlign: 'center',
    headerClassName: "customHeader",
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.arrive}
        </div>
      );
    },
  },
  {
    field: "duration",
    headerName: "Duration",
    width: 100,
    headerAlign: 'center',
    headerClassName: "customHeader",
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.duration}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    headerClassName: "customHeader",
    headerAlign: 'center',
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const flightRows = [
  {
    id: 1,
    flightNumber: "BA123",
    status: "active",
    from: "London",
    to: "New York",
    depart: "2023-06-01 10:00 AM",
    arrive: "2023-06-01 04:30 PM",
    duration: "5h 30m",
  },
  {
    id: 2,
    flightNumber: "LH456",
    status: "passive",
    from: "New York",
    to: "London",
    depart: "2023-06-02 08:00 AM",
    arrive: "2023-06-02 02:45 PM",
    duration: "2h 45m",
  },
  {
    id: 3,
    flightNumber: "AF789",
    status: "pending",
    from: "Paris",
    to: "London",
    depart: "2023-06-03 09:30 AM",
    arrive: "2023-06-03 12:45 PM",
    duration: "3h 15m",
  },
  {
    id: 4,
    flightNumber: "EK012",
    status: "active",
    from: "Dubai",
    to: "New York",
    depart: "2023-06-04 03:00 PM",
    arrive: "2023-06-04 11:20 PM",
    duration: "8h 20m",
  },
  {
    id: 5,
    flightNumber: "SQ345",
    status: "passive",
    from: "Singapore",
    to: "London",
    depart: "2023-06-05 01:20 AM",
    arrive: "2023-06-05 12:00 PM",
    duration: "10h 40m",
  },
];
