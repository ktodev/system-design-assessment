import { Movie, MovieActionsProps } from "../../../state/interfaces";
import { MovieCard } from "./movieCard/MovieCard";
import { ComponentType } from "react";

interface MoviesProps {
  title?: string;
  movies: Array<Movie>;
  Actions?: ComponentType<MovieActionsProps>;
}

export const Movies = ({ title, movies, Actions }: MoviesProps) => {
  return (
    // Use below class to style this compnent from its parent according to specific needs
    <div className="movies">
      {title && <h2>{title}</h2>}
      <ul>
        {movies?.map((movie: Movie) => (
          <li className="movie" key={movie.id}>
            <MovieCard movie={movie}>
              {Actions && <Actions id={movie.id} favorite={movie.favorite} />}
            </MovieCard>
          </li>
        ))}
      </ul>
    </div>
  );
};
