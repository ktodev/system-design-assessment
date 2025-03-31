import Button from "react-bootstrap/esm/Button";
import {
  addToFavorites,
  loadMovieDetails,
  removeFromFavorites,
} from "../../state/thunks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { MovieActionsProps } from "../../state/interfaces";

export const MovieActions = ({ id, favorite }: MovieActionsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="actions">
      <Button
        variant="outline-primary"
        onClick={() => {
          dispatch(loadMovieDetails(id));
        }}
      >
        Show Details
      </Button>

      <Button
        variant="outline-primary"
        onClick={() => {
          //   dispatch(addToWishlist(id));
          console.log("addToWishlist(id) not yet implemented");
        }}
      >
        Add to Watchllist
      </Button>

      <Button
        variant="outline-primary"
        onClick={() => {
          dispatch(favorite ? removeFromFavorites(id) : addToFavorites(id));
        }}
      >
        {favorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>

      <Button
        variant="outline-primary"
        onClick={() => {
        //   dispatch(share(id));
        console.log("share(id) not yet implemented");
        }}
      >
        Share
      </Button>
    </div>
  );
};
