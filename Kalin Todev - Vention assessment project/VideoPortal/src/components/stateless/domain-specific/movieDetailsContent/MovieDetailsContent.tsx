import { MovieDetails } from "../../../../state/interfaces";
import "./movieDetailsContent.css"

export const MovieDetailsContent = ({ content }: { content: MovieDetails }) => {
  return (
    <div className="movie-details-content">
      {content.previewURL && (
        <iframe
          src={content.previewURL}
          title="Movie Preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      <p className="description">
        <span>Description:</span> {content.description}
      </p>
      <p className="actors">
        <span>Actors:</span> {content.actors}
      </p>
    </div>
  );
};
