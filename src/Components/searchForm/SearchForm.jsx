import { useCallback, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { searchByName, searchByGenre } from "../api/getData";
import { useNavigate } from "react-router-dom";

export default function SearchForm({}) {
  const { setFilmName, setData, setPages, setIsLoading, setFetchMethod, setGenre } =
    useAppContext();
  const [localFilmName, setLocalFilmName] = useState("");
  const navigate = useNavigate();

  const searchName = useCallback(
    (e) => {
      e.preventDefault();
      setIsLoading(true);
      setFetchMethod("searchByName");
      setFilmName(localFilmName);
      searchByName(localFilmName, setData, setPages, setIsLoading);
      navigate("/search-result");
    },
    [localFilmName, setFilmName, setData, setPages, setIsLoading, navigate]
  );
  const searchGenre = useCallback(
    (genre) => {
      setIsLoading(true);
      setGenre(genre);
      setFetchMethod("searchByGenre");
      searchByGenre(genre, setData, setPages, setIsLoading);
      navigate("/search-result");
    },
    [ setData, setPages, setIsLoading, navigate]
  );

  return (
    <section className="search-form">
      <div className="container">
        <div className="search-form__wrapper">
          <form className="form__search--name form" onSubmit={searchName}>
            <input
              id="formInput"
              className="form__input"
              type="text"
              value={localFilmName}
              placeholder="Поиск"
              onChange={(e) => setLocalFilmName(e.target.value)}
            />
            <button className="form__btn">Искать</button>
          </form>
          <form className="form__search--genre genre form">
            <label htmlFor="genres" className="genres__label">
              Поиск по жанру:
            </label>
            <select
              name="genres"
              id="genres"
              className="genres__select"
              onChange={(e) => searchGenre(e.target.value.toLocaleLowerCase())}
            >
              <option value="" className="genres__option">
                Выберите жанр
              </option>
              <option value="Комедия" className="genres__option">
                Комедия
              </option>
              <option value="Ужасы" className="genres__option">
                Ужасы
              </option>
              <option value="Триллер" className="genres__option">
                Триллер
              </option>
              <option value="Боевик" className="genres__option">
                Боевик
              </option>
              <option value="Фантастика" className="genres__option">
                Фантастика
              </option>
              <option value="Сериалы" className="genres__option">
                Сериалы
              </option>
              <option value="Мультфильм" className="genres__option">
                Мультфильм
              </option>
              <option value="Приключения" className="genres__option">
                Приключения
              </option>
              <option value="Драма" className="genres__option">
                Драма
              </option>
              <option value="Фэнтези" className="genres__option">
                Фэнтези
              </option>
              <option value="Детектив" className="genres__option">
                Детектив
              </option>
              <option value="Криминал" className="genres__option">
                Криминал
              </option>
              <option value="Военный" className="genres__option">
                Военный
              </option>
              <option value="Биография" className="genres__option">
                Биография
              </option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
}
