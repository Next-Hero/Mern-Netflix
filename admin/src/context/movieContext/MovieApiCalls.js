import axios from "axios";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieAction";

// get movie
const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("http://localhost:5000/api/movies", {
      headers: {
        // token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,

        token:
          " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmNkZjBmOWY5ODQ1MjU5MzZiZGM4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzgyMjQyNCwiZXhwIjoxNjU0MjU0NDI0fQ.pucaFFpe2YjTMFYM4KGOb0QB_0O3aW-rcUXmKFY0rmI",
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

// create movie
const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post(`http://localhost:5000/api/movies`, movie, {
      // method: "POST",
      headers: {
        // token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
        token:
          " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmNkZjBmOWY5ODQ1MjU5MzZiZGM4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzgyMjQyNCwiZXhwIjoxNjU0MjU0NDI0fQ.pucaFFpe2YjTMFYM4KGOb0QB_0O3aW-rcUXmKFY0rmI",
      },
    });
    dispatch(createMovieSuccess(res.data));
    console.log("created");
  } catch (error) {
    dispatch(createMovieFailure());
  }
};

// get movie by id
const getMovie = async (id, dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get(`http://localhost:5000/api/movies/${id}`, {
      headers: {
        // token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,

        token:
          " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmNkZjBmOWY5ODQ1MjU5MzZiZGM4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzgyMjQyNCwiZXhwIjoxNjU0MjU0NDI0fQ.pucaFFpe2YjTMFYM4KGOb0QB_0O3aW-rcUXmKFY0rmI",
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

// delete movie
const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete(`http://localhost:5000/api/movies/${id}`, {
      headers: {
        // token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,

        token:
          " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmNkZjBmOWY5ODQ1MjU5MzZiZGM4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzgyMjQyNCwiZXhwIjoxNjU0MjU0NDI0fQ.pucaFFpe2YjTMFYM4KGOb0QB_0O3aW-rcUXmKFY0rmI",
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};

export { getMovies, getMovie, createMovie, deleteMovie };
