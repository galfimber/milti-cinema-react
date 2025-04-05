import { useAppContext } from "../Context/AppContext";
import FilmList from "./FilmList";
// import Registration from "./auth/Registration";
// import Login from "./auth/Login";
// import AuthDetails from "./auth/AuthDetails";
import FormSearch from "./GetFilms/FormSearch";
// import { searchByName } from "./api/getData";
// import { useFilmName } from "./../Hooks/useFilmName"

export default function SearchRes({
  // data,
  // setData,
  // filmName,
  // setFilmName,
  // likedMovies,
  // toggleLike,
  pages,
  // setPages,
  // isLoading, 
  // setIsLoading
}) {
  // const search = (page) => {
  //   searchByName(filmName, setData, page);
  const { data } = useAppContext();// };


  // const {filmName, setFilmName} = useFilmName();
  return (
    <section className="search-res">
      <div className="container">
        <div className="search-res__items">
          {/* <Registration />
          <Login />
          <AuthDetails /> */}
          <FormSearch
            // filmName={filmName}
            // setFilmName={setFilmName}
            // setData={setData}
            pages={pages}
            // setPages={setPages}
              // setIsLoading={setIsLoading}
          />
          {/* {filmIndex ? <FilmList {...data} {...filmIndex} /> : ""} */}
          {data.length > 0 && (
            <FilmList
              // data={data}
              // setData={setData}
              // filmName={filmName}
              // likedMovies={likedMovies}
              // toggleLike={toggleLike}
              pages={pages}
              // isLoading={isLoading}
              // setIsLoading={setIsLoading}
            />
          )}

          {/* <div className="pagination">
            <ul className="pagination-list">
              <li className="pagination-list__item">
                <button onClick={search("1")}>1</button>
              </li>
              <li className="pagination-list__item">
                <button onClick={search("2")}>2</button>
              </li>
              <li className="pagination-list__item">
                <button onClick={search("3")}>3</button>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
}
