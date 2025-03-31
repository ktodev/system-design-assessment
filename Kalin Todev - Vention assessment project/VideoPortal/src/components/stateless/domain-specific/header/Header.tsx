import Spinner from "react-bootstrap/esm/Spinner";
import { LoadingStatus } from "../../../../commons/constants";
import DropDown from "../../generic/DoprDown";
import "./header.css";
import Button from "react-bootstrap/esm/Button";

interface HeaderProps {
  title: string;
  statusMoviesLoading: LoadingStatus | null;
  statusMovieDetailsLoading: LoadingStatus | null;
  genresNames: string[];
  onChange: (value: number) => void;
}
export const Header = ({
  title,
  statusMoviesLoading,
  statusMovieDetailsLoading,
  genresNames,
  onChange,
}: HeaderProps) => {
  return (
    <div id="header">
      <h2>{title}</h2>

      <DropDown
        title="Movie Categories"
        appearence="lite"
        nameValues={genresNames}
        onChange={onChange}
      />

      <div className="loading">
        {statusMoviesLoading === LoadingStatus.Loading && (
          <div className="spinner">
            <Spinner animation="border" role="status" variant="secondary" />
            <span>Loading Movies list...</span>
          </div>
        )}
        {statusMovieDetailsLoading === LoadingStatus.Loading && (
          <div className="spinner">
            <Spinner animation="border" role="status" variant="secondary" />
            <span>Loading Movie details...</span>
          </div>
        )}
      </div>

      <div className="buttons">
        <Button
          variant="outline-primary"
          onClick={() => {
            //   dispatch(uploadMovie(movieRef));
            console.log("uploadMovie(movieRef) not yet implemented");
          }}
        >
          Upload Movie
        </Button>

        <Button
          variant="outline-primary"
          onClick={() => {
            //   dispatch(signIn());
            console.log("signIn() not yet implemented");
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};
