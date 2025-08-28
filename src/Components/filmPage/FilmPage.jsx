import { useAppContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
import Player from "../player/Player";
import { memo, useEffect } from "react";
import { searchById } from "../api/getData";
import { useLoading } from "../../hooks/useLoading";
import Film from "../film/Film";

export default memo(function FilmPage() {
  const location = useLocation();
  const { film, setFilm } = useAppContext();
  const { isLoading, setIsLoading } = useLoading();

  const { id } = useParams();

  useEffect(() => {
    // if (location.state?.data) {
    //   setFilm(location.state.data);
    //   setIsLoading(false);
    //   return;
    // }

    searchById(id, setFilm, setIsLoading);
  }, [location.state]);

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <>
      <section className="movie" data-id={film.id}>
        {film.backdrop && film.backdrop.url && film.logo && film.logo.previewUrl ? (
          <>
            <div className="movie__backdrop">
              <img
                className="movie__backdrop--img"
                src={film.backdrop.url}
                alt={film.name}
              />
              <img
                className="movie__backdrop--logo"
                src={film.logo.previewUrl}
                alt={film.name}
              />
            </div>
          </>
        ) : film.backdrop?.url ? (
          <>
            <div className="movie__backdrop">
              <img
                className="movie__backdrop--img"
                src={film.backdrop.url}
                alt={film.name}
              />
              <h3 className="movie__backdrop--name">{film.name}</h3>
            </div>
          </>
        ) : film.logo?.previewUrl ? (
          <>
            <div className="movie__backdrop">
              <img
                className="movie__backdrop--logo"
                src={film.logo.previewUrl}
                alt={film.name}
              />
            </div>
          </>
        ) : (
          <>
            <div className="movie__backdrop">
              <h3 className="movie__backdrop--name">{film.name}</h3>
            </div>
          </>
        )}

        <div className="movie__container">
          <div className="movie__info">
            {film.poster && film.poster.previewUrl && (
              <img
                className="movie__img"
                src={film.poster.previewUrl}
                alt={film.name}
              />
            )}
            <div className="movie__info--wrapper">
              {film.year && (
                <div className="movie__year">Год выхода: {film.year} г.</div>
              )}
              {film.genres.length > 0 && (
                <div className="movie__genres">
                  Жанры: {film.genres.map((genre) => `${genre.name} `)}
                </div>
              )}
              {!!film.movieLength && (
                <div className="movie__movieLength">
                  Продолжительность: {film.movieLength} мин.
                </div>
              )}
              {film.rating.imdb !== 0 && (
                <div className="movie__rating">Рейтинг: {film.rating.imdb}</div>
              )}
              {!!film.ageRating && (
                <div className="movie__ageRating">
                  Возрастной рейтинг: {film.ageRating}+
                </div>
              )}
              {!!film.description && (
                <div className="movie__description">{film.description}</div>
              )}
            </div>
          </div>
          <Player kpId={film.id} />
          {(film.sequelsAndPrequels && film.sequelsAndPrequels.length > 0) &&  (
            <div className="movie__sequels">
              <h3 className="movie__sequels--title">Сиквелы/Приквелы</h3>
              <div className="movie__list collections__wrapper">
                {film.sequelsAndPrequels.map((sequel) => (
                  <Film key={sequel.id} film={sequel} />
                ))}
              </div>
            </div>
          )}
          {(film.similarMovies && film.similarMovies.length > 0) && (
          <div className="movie__similar">
            <h3 className="movie__similar--title">Похожие фильмы</h3>
            <div className="movie__list collections__wrapper">
              {film.similarMovies.map((similarMovie) => (
                <Film key={similarMovie.id} film={similarMovie} />
              ))}
            </div>
          </div>)}
        </div>
      </section>
    </>
  );
});
