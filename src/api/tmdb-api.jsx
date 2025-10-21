export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then(async (response) => {
    const data = await response.json();
    if (!response.ok) throw new Error(data.status_message || "Something went wrong");
    return data;
  });
};

export const getMovie = ({ queryKey }) => {
  const [, { id }] = queryKey;
  if (!id) throw new Error("Invalid or missing movie ID");
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  ).then(async (response) => {
    const data = await response.json();
    if (!response.ok) throw new Error(data.status_message || "Something went wrong");
    return data;
  });
};

export const getGenres = () => {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  ).then(async (response) => {
    const data = await response.json();
    if (!response.ok) throw new Error(data.status_message || "Something went wrong");
    return data;
  });
};

export const getMovieImages = ({ queryKey }) => {
  const [, { id }] = queryKey;
  if (!id) throw new Error("Invalid or missing movie ID");
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then(async (response) => {
    const data = await response.json();
    if (!response.ok) throw new Error(data.status_message || "Something went wrong");
    return data;
  });
};

export const getMovieReviews = ({ queryKey }) => {
  const [, { id }] = queryKey;
  if (!id) throw new Error("Invalid or missing movie ID");
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  ).then(async (response) => {
    const data = await response.json();
    if (!response.ok) throw new Error(data.status_message || "Something went wrong");
    return data;
  });
};

export const getTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then(async (response) => {
    const data = await response.json();
    if (!response.ok) throw new Error(data.status_message || "Something went wrong");
    return data;
  });
};
