import "./flight.scss";
import { DataGrid } from "@mui/x-data-grid";
import { flightTrip } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [flightTR, setFlightTR] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem('token'));

    getFlightTR();
  }, []);
  const getFlightTR = () =>{
    fetch('/api/volvoyageurs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
    })
      .then(response => response.json())
      .then(data => {
        setFlightTR(data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }
  const deleteFlight = (flightNumber) => {
    fetch(`/api/volvoyageurs/${flightNumber}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
    })
    .then(response => response.json())
    .then(data => {
      setFlightTR(data);

    })
    .catch(error => {
      console.error('Error deleting flight:', error);
    });
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      headerClassName: "customHeader",
      headerAlign: 'center',
      renderCell: (params) => {
        const { numeroVol, aeroportDepart, aeroportDestination, dateDepart, dateArrivee,etat,type } = params.row;

        return (
          <div className="cellAction">
            <Link
              to={`/flights/${numeroVol}?from=${aeroportDepart}&to=${aeroportDestination}&depart=${dateDepart}&arrive=${dateArrivee}&duration=${etat}&type=${type}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deleteFlight(params.row.numeroVol)}
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
        List Flights Trip
        <Link to="/flights/new" className="link">
          Add New
        </Link>
      </div>
      <StyledDataGrid
        rows={flightTR}
        columns={flightTrip.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
