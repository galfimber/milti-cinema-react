import { memo } from "react";
import { useAppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import Lodaer from "../img/loader.gif";

export default memo(function Film({
  film,
  // likedMovies,
  // toggleLike,
  // isLoading,
  // setIsLoading,
}) {
  const { likedMovies, toggleLike, isLoading, setIsLoading } = useAppContext();

  // const handleImg = () => {
  //   setIsLoading(false);
  // };

  return (
    <div className="film" data-id={film.id}>
      {film.poster?.url ? (
        <Link to={`/movie/${film.id}`} className="film__link">
          <img
            className="film__img"
            src={film.poster.url}
            alt={film.name}
            // onLoad={handleImg}
          />

          {/* {isLoading && (
            <div className="film__preloader">
              <img src={Lodaer} alt="prelodaer" />
            </div>
          )} */}
        </Link>
      ) : (
        <Link to={`/movie/${film.id}`} className="link">
          <div className="film__img">Not found</div>
        </Link>
      )}
      <h3 className="film__name">{film.name}</h3>
      <button onClick={() => toggleLike(film)} className="film__like">
        {likedMovies.some((likedMovie) => likedMovie.id === film.id)
          ? "❤️"
          : "🤍"}
      </button>
    </div>
  );
});
