import "./flight.scss";
import { DataGrid } from "@mui/x-data-grid";
import { flightMarchandise } from "../../datatablesource";
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
  const [flightMR, setFlightMR] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem('token'));

    getFlightMR();
  }, []);
  const getFlightMR = () =>{
    fetch('/api/volMarchandises', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
    })
      .then(response => response.json())
      .then(data => {
        setFlightMR(data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }
  const deleteFlight = (flightNumber) => {
    fetch(`/api/volMarchandises/${flightNumber}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
    })
    .then(response => response.json())
    .then(data => {
      setFlightMR(data);

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
        const { numeroVol, aeroportDepart, aeroportDestination, dateDepart, dateArrivee,etat,typeMarchandise } = params.row;

        return (
          <div className="cellAction">
            <Link
              to={`/flights/${numeroVol}?from=${aeroportDepart}&to=${aeroportDestination}&depart=${dateDepart}&arrive=${dateArrivee}&duration=${etat}&type=${typeMarchandise}`}
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
        List Flights Marchandise
        <Link to="/flights/new" className="link">
          Add New
        </Link>
      </div>
      <StyledDataGrid
        rows={flightMR}
        columns={flightMarchandise.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
