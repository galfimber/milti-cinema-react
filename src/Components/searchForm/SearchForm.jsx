import { useCallback, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { searchByName } from "../api/getData";
import { useNavigate } from "react-router-dom";

export default function SearchForm({}) {
  const { setFilmName, setData, setPages, setIsLoading } =
    useAppContext();
  const [localFilmName, setLocalFilmName] = useState("");
  const navigate = useNavigate();

  const search = useCallback(
    (e) => {
      e.preventDefault();
      setIsLoading(true);
      setFilmName(localFilmName);
      searchByName(localFilmName, setData, setPages, setIsLoading);
      navigate("/search-result");
    },
    [localFilmName, setFilmName, setData, setPages, setIsLoading, navigate]
  );

  return (
    <section className="search-form">
    <div className="container">
      <form className="form" onSubmit={search}>
        <input
          className="form__input"
          type="text"
          value={localFilmName}
          placeholder="Поиск"
          onChange={(e) => setLocalFilmName(e.target.value)}
        />
        <button className="form__btn">Искать</button>
      </form>
    </div>
    </section>
  );
}