import { useAppContext } from "../../context/AppContext";
import FilmList from "../filmList/FilmList";
// import Registration from "./auth/Registration";
// import Login from "./auth/Login";
// import AuthDetails from "./auth/AuthDetails";
import FormSearch from "../searchForm/SearchForm";

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
