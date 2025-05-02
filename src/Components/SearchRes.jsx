import { useAppContext } from "../Context/AppContext";
import FilmList from "./FilmList";
// import Registration from "./auth/Registration";
// import Login from "./auth/Login";
// import AuthDetails from "./auth/AuthDetails";
import FormSearch from "./GetFilms/FormSearch";

export default function SearchRes({}) {
  const { data } = useAppContext();

  return (
    <section className="search-res">
      <div className="container">
        <div className="search-res__items">
          {/* <Registration />
          <Login />
          <AuthDetails /> */}
          <FormSearch />
          {data.length > 0 && <FilmList />}
        </div>
      </div>
    </section>
  );
}
