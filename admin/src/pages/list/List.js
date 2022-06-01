import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import {
  getMovies,
  deleteMovie,
} from "../../context/movieContext/MovieApiCalls";
import { Link } from "react-router-dom";

const List = () => {
  const { movies, dispatch } = useContext(MovieContext);
  console.log(movies);
  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const movieColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "movie",
      headerName: "Movie",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={
                params.row.img
                // ? params.row.img
                // : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="avatar"
            />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "genre",
      headerName: "genre",
      width: 120,
    },
    {
      field: "year",
      headerName: "Year",
      width: 120,
    },
    {
      field: "limit",
      headerName: "Limit",
      width: 120,
    },

    {
      field: "isSeries",
      headerName: "isSeries",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={{
                pathname: `/movies/${params.row._id}`,
                // movie: params.row,
              }}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable title="Movie List" movies={movies} columns={movieColumns} />
      </div>
    </div>
  );
};

export default List;
