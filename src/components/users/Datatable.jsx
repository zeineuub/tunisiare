import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource_users";
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
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      headerClassName: "customHeader",
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        List Users
      </div>
      <StyledDataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
