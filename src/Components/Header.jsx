import { useAppContext } from "./../Context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useAppContext();
  return (
    <div className="header">
      <Link to={`/`} className="link">
        <div className="logo">Multi Cinema</div>
      </Link>
      {/* <nav className="nav">
        <button className="nav__item">Фильмы</button>
        <button className="nav__item">Сериалы</button>
        <button className="nav__item">Мультфильмы</button>
      </nav> */}
      <div className="search">
        <Link to={`/my-films`} className="link my-watch">
          <FontAwesomeIcon icon={faBookmark} />
          <span>Мои фильмы</span>
        </Link>
        {user ? (
          <Link to={`/profile`} className="link user">
            <img
              src={user.photoURL}
              alt="user-avatar"
              className="user__avatar"
              title={user.displayName}
            />
          </Link>
        ) : (
          <Link to={`/profile`} className="link">
            Войти
          </Link>
        )}
      </div>
    </div>
  );
}
