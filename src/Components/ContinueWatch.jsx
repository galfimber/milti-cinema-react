import { useAppContext } from "./../Context/AppContext";
import { Link } from "react-router-dom";

export default function ContinueWatch() {
  const { likedMovies } = useAppContext();

  return (
    <>
      {likedMovies.length > 1 && (
        <section className="continue-watch">
          <div className="container">
            <h2 className="title-2">Продолжить просмотр</h2>
            <div className="continue-watch__item">
              <Link
                to={`/movie/${likedMovies[likedMovies.length - 1].id}`}
                className="film__link"
              >
                {likedMovies[likedMovies.length - 1].poster?.url ? (
                  <img
                    src={likedMovies[likedMovies.length - 1].poster.url}
                    alt={likedMovies[likedMovies.length - 1].name}
                    className="continue-watch__poster"
                  />
                ) : (
                  <div className="continue-watch__poster">Not found</div>
                )}
              </Link>
              <h3 className="continue-watch__name film__name">
                {likedMovies[likedMovies.length - 1].name}
              </h3>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
