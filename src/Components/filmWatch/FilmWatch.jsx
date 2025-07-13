import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

export default function FilmWatch() {
  const { likedMovies } = useAppContext();
  const likedMovie = likedMovies[likedMovies.length - 1];

  return (
    <>
      {likedMovies.length > 1 && (
        <section className="continue-watch">
          <div className="container">
            <h2 className="title-2">Продолжить просмотр</h2>
            <div className="continue-watch__item">
              <Link
                to={`/movie/${likedMovie.id}`}
                state={{
                  data: likedMovie,
                }}
                className="film__link"
              >
                {likedMovie.poster?.url ? (
                  <img
                    src={likedMovie.poster.url}
                    alt={likedMovie.name}
                    className="continue-watch__poster"
                  />
                ) : (
                  <div className="continue-watch__poster">Not found</div>
                )}
              </Link>
              <h3 className="continue-watch__name film__name">
                {likedMovie.name}
              </h3>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
