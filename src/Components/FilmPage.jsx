import { useAppContext } from "./../Context/AppContext";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
import Player from "./Player";
import { memo, useEffect } from "react";
import { searchById } from "./api/getData";
import { useLoading } from "../Hooks/useLoading";

export default memo(function FilmPage() {
  const location = useLocation();
  const { film, setFilm } = useAppContext();
  const { isLoading, setIsLoading } = useLoading();

  const { id } = useParams();
  // console.log(film);

  // function searchh(arr, value) {
  //   let isHave = false;
  //   arr.map((item) => {
  //     if (!(item instanceof Array)) {
  //       if (item.id == value) {
  //         isHave = true;
  //         setFilm(item);
  //         setIsLoading(false);
  //       }
  //     } else {
  //       searchh(item, value);
  //     }
  //   });
  //   // if (Object.keys(film).length === 0) {
  //   //   console.log("1");
  //   //   searchById(id, setFilm, setIsLoading);
  //   // }
  //   if (!isHave) {
  //     searchById(id, setFilm, setIsLoading);
  //   }
  // }

  // useEffect(() => {
  //   if (data.length > 1) {
  //     // setFilm(data.find((dataFilm) => dataFilm.id == id));
  //     // function search(arr, value) {
  //     //   if (!(arr instanceof Array)) return value == arr;
  //     //   return arr.some((item) => search(item, value));
  //     // }
  //     searchh(data, id);
  //     // setIsLoading(false);
  //     // const images = getImg(film.externalId.imdb);
  //   } else {
  //     searchById(id, setFilm, setIsLoading);
  //   }
  // }, []);
  useEffect(() => {
    if (location.state?.data) {
      setFilm(location.state.data);
      setIsLoading(false);
      return;
    }

    searchById(id, setFilm, setIsLoading);
  }, [location.state]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {!isLoading && (
        <div className="movie" data-id={film.id}>
          {film.backdrop && film.backdrop.url && film.logo && film.logo.url ? (
            <>
              <div className="movie__backdrop">
                <img
                  className="movie__backdrop--img"
                  src={film.backdrop.url}
                  alt={film.name}
                />
                <img
                  className="movie__backdrop--logo"
                  src={film.logo.url}
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
          ) : film.logo?.url ? (
            <>
              <div className="movie__backdrop">
                <img
                  className="movie__backdrop--logo"
                  src={film.logo.url}
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
              {film.poster && film.poster.url && (
                <img
                  className="movie__img"
                  src={film.poster.url}
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
                {film.movieLength && (
                  <div className="movie__movieLength">
                    Продолжительность: {film.movieLength} мин.
                  </div>
                )}
                {film.rating.imdb !== 0 && (
                  <div className="movie__rating">
                    Рейтинг: {film.rating.imdb}
                  </div>
                )}
                {film.ageRating && (
                  <div className="movie__ageRating">
                    Возрастной рейтинг: {film.ageRating}+
                  </div>
                )}
                {film.description && (
                  <div className="movie__description">{film.description}</div>
                )}
              </div>
            </div>
            <Player kpId={film.id} />
          </div>
        </div>
      )}
    </>
  );
});
