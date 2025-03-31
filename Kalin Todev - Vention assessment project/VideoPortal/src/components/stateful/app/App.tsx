import { Card } from "../../stateless/generic/Card";
import { AppDispatch } from "../../../state/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies, loadMoviesByCategory } from "../../../state/thunks";
import { Genre } from "../../../state/interfaces";
import { Movies } from "../../stateless/domain-specific/Movies";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MovieDetailsContent } from "../../stateless/domain-specific/movieDetailsContent/MovieDetailsContent";
import {
  moviesSelector,
  selectedMovieDetailsSelector,
  statusMovieDetailsLoadingSelector,
  statusMoviesLoadingSelector,
} from "../../../state/selectors";
import { LoadingStatus } from "../../../commons/constants";
import { Header } from "../../stateless/domain-specific/header/Header";
import { MovieActions } from "../MovieActions";

// for demo purposes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MovieActionsDemoExample } from "../MovieActionsDemoExample";

export default function List() {
  const movies = useSelector(moviesSelector);
  const statusMoviesLoading = useSelector(statusMoviesLoadingSelector);
  const statusMovieDetailsLoading = useSelector(
    statusMovieDetailsLoadingSelector
  );
  const selectedMovieDetails = useSelector(selectedMovieDetailsSelector);

  const dispatch = useDispatch<AppDispatch>();

  const handleMovieCategory = (value: number): void => {
    dispatch(loadMoviesByCategory(Object.values(Genre)[value]));
  };

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  // This is used for Dropdown items labels. 
  // Ideally this should rely on translated strings mapped to Genre enum
  const genresNames = Object.keys(Genre);

  return (
    <div id="app">
      <div className="main-header">
        <Header
          title="Movie Library"
          statusMoviesLoading={statusMoviesLoading}
          statusMovieDetailsLoading={statusMovieDetailsLoading}
          genresNames={genresNames}
          onChange={handleMovieCategory}
        />
      </div>

      {statusMovieDetailsLoading === LoadingStatus.Loaded &&
        selectedMovieDetails && (
          <div className="movie-details">
            <Card cardTitle="Movie Details">
              <MovieDetailsContent content={selectedMovieDetails} />
            </Card>
          </div>
        )}

      {statusMoviesLoading === LoadingStatus.Loaded && (
        <div className="movie-list">
          <Movies movies={movies} Actions={MovieActions}/>
          {/* Comment the above, un-commentone of the bellows and try.  */}
          {/* In general programing, this is more known as "dependency injection" */}
          {/* <Movies movies={movies} /> */}
          {/* <Movies movies={movies} Actions={MovieActionsDemoExample}/> */}
        </div>
      )}
    </div>
  );
}
