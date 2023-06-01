export const userColumns = [
  { 
    field: "id",
    headerClassName: "customHeader",
    headerAlign: 'center',
    headerName: "ID", 
    width: 70 
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    headerClassName: "customHeader",
    headerAlign: 'center',
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.firstName} {params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    headerClassName: "customHeader",
    headerAlign: 'center',
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
    headerClassName: "customHeader",
    headerAlign: 'center',
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "customHeader",
    headerAlign: 'center',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    firstName: "John",
    lastName: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    firstName: "Jamie",
    lastName: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    firstName: "Tyrion",
    lastName: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "tyrion@gmail.com",
    status: "active",
    age: 39,
  },
  {
    id: 4,
    firstName: "Arya",
    lastName: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "arya@gmail.com",
    status: "active",
    age: 18,
  },
  {
    id: 5,
    firstName: "Daenerys",
    lastName: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "daenerys@gmail.com",
    status: "passive",
    age: 25,
  },
  {
    id: 6,
    firstName: "Sansa",
    lastName: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sansa@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 7,
    firstName: "Cersei",
    lastName: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "cersei@gmail.com",
    status: "passive",
    age: 45,
  },
  {
    id: 8,
    firstName: "Robb",
    lastName: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "robb@gmail.com",
    status: "active",
    age: 29,
  },
  {
    id: 9,
    firstName: "Tormund",
    lastName: "Giantsbane",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "tormund@gmail.com",
    status: "active",
    age: 43,
  },
  {
    id: 10,
    firstName: "Brienne",
    lastName: "of Tarth",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "brienne@gmail.com",
    status: "passive",
    age: 36,
  },
  {
    id: 11,
    firstName: "Samwell",
    lastName: "Tarly",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "samwell@gmail.com",
    status: "active",
    age: 32,
  },
  // Add more objects as needed...
];
