// require("dotenv").config();
// import { useState } from "react";
import { useAppContext } from "../../Context/AppContext";
import { searchByName } from "../api/getData";
import { useNavigate } from "react-router-dom";

export default function FormSearch({
  // filmName,
  // setFilmName,
  // setData,
  pages,
  // setPages,
  // setIsLoading
}) {
  const { setIsLoading, filmName, setFilmName, setData } = useAppContext();
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log(filmName);
    searchByName(filmName, setData, pages, setIsLoading);
    navigate("/search-result");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={search}>
        <input
        className="form__input"
          type="text"
          value={filmName}
          placeholder="Поиск"
          onChange={(e) => {
            console.log(e.target.value);
            setFilmName(e.target.value);
          }}
        />
        <button className="form__btn">Искать</button>
      </form>
    </div>
  );
}
