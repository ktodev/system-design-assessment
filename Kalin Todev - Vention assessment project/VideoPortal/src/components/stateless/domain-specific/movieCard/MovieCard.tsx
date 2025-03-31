import { Movie } from "../../../../state/interfaces";
import Rating from "../../generic/Rating";
import "./movieCard.css";

interface MovieCardProps {
  movie: Movie;
  children?: React.ReactNode;
}

export const MovieCard = ({ movie, children }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <h4>
        {movie.name}
        {
          <p className={movie.favorite ? "favorite" : "non-favorite"}>
            {/* this is the font character for "heart" used as a favorite icon */}
            &#x2665; 
          </p>
        }
      </h4>
      <div className="content">
        <div className="main">
          {movie.thumbnailURL && (
            <img
              src={movie.thumbnailURL}
              height="100px"
              width="100px"
              alt={movie.name}
            />
          )}
          <p className="genre">{movie.genre || "Not specified"}</p>
          {movie.watched && <p className="watched">Watched</p>}

          <Rating value={movie.rating ?? 0} />
        </div>
        <div className="additional">
          {movie.shortDescription && (
            <p className="short-description">{movie.shortDescription}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
