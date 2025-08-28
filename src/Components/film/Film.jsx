import { memo, useCallback, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import Loader from "../../img/Loader.gif";

export default memo(function Film({ film }) {
  const { likedMovies, toggleLike } = useAppContext();
  const [imageLoading, setImageLoading] = useState(true);

  const handleToggleLike = useCallback(() => {
    toggleLike(film);
  }, [film, toggleLike]);

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  return (
    <div className="film" data-id={film.id}>
      <Link
        to={`/movie/${film.id}`}
        state={{
          data: film,
        }}
        className="film__link"
      >
        {imageLoading && film.poster?.previewUrl && (
          <div className="film__img--preloader-wrapper">
            <img
              className="film__img--preloader"
              src={Loader}
              alt="Loading..."
            />
          </div>
        )}
        {film.poster?.previewUrl ? (
          <img
            className="film__img"
            src={film.poster.previewUrl}
            alt={film.name}
            style={{ display: imageLoading ? "none" : "block" }}
            onLoad={handleImageLoad}
          />
        ) : (
          <div className="film__img">Not found</div>
        )}
      </Link>
      <h3 className="film__name">{film.name}</h3>
      <button onClick={handleToggleLike} className="film__like">
        {likedMovies.some((likedMovie) => likedMovie.id === film.id)
          ? "❤️"
          : "🤍"}
      </button>
    </div>
  );
});
