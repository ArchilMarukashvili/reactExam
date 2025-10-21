import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery, useQueries } from "@tanstack/react-query";
import { getTrendingMovies, getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const TrendingMoviesPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trendingMoviesList"],
    queryFn: getTrendingMovies,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const trendingIds = (data.results || [])
    .map((m) => m?.id)
    .filter((id) => !!id);

  const trendingMovieQueries = useQueries({
    queries: trendingIds.map((id) => ({
      queryKey: ["movie", { id }],
      queryFn: getMovie,
      enabled: !!id,
    })),
  });

  const isPending = trendingMovieQueries.find((q) => q.isLoading);
  if (isPending) return <Spinner />;

  const movies = trendingMovieQueries
    .map((q) => {
      if (!q.data) return null;
      q.data.genre_ids = q.data.genres?.map((g) => g.id) || [];
      return q.data;
    })
    .filter(Boolean);

  return <PageTemplate title="Trending Movies" movies={movies} />;
};

export default TrendingMoviesPage;
