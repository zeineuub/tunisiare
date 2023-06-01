import "./flight.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, flightRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const StyledDataGrid = styled(DataGrid)`
  && {
    .MuiDataGrid-root {
      border-radius: 8px;
      overflow: hidden;
    }

    .MuiDataGrid-row {
      cursor: pointer;
    }

    .MuiDataGrid-row.Mui-selected {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .MuiDataGrid-cell {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
`;

const Datatable = () => {
  const [data, setData] = useState(flightRows);

  const handleDelete = (flightNumber) => {
    setData(data.filter((item) => item.flightNumber !== flightNumber));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      headerClassName: "customHeader",
      headerAlign: 'center',
      renderCell: (params) => {
        const { flightNumber, from, to, depart, arrive, duration } = params.row;

        return (
          <div className="cellAction">
            <Link
              to={`/flights/${flightNumber}?from=${from}&to=${to}&depart=${depart}&arrive=${arrive}&duration=${duration}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.flightNumber)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flight">
      <div className="flightTitle">
        List Flights
        <Link to="/flights/new" className="link">
          Add New
        </Link>
      </div>
      <StyledDataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
