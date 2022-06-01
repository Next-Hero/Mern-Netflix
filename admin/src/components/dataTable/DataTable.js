import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const DataTable = ({ title, movies, columns }) => {
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        {title}
        <Link to="/movies/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={movies}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default DataTable;
