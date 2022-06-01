export const getMoviesStart = () => ({
  type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});

export const getMoviesFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

// create movie action
export const createMovieStart = () => ({
  type: "create_MOVIE_START",
});

export const createMovieSuccess = (id) => ({
  type: "create_MOVIE_SUCCESS",
  payload: id,
});

export const createMovieFailure = () => ({
  type: "create_MOVIE_FAILURE",
});

// delete movie action
export const deleteMovieStart = () => ({
  type: "DELETE_MOVIE_START",
});

export const deleteMovieSuccess = (id) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});
