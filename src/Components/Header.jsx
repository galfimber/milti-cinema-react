import { useAppContext } from "./../Context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { use } from "react";

export default function Header() {
  const { user } = useAppContext();
  return (
    <div className="header">
      <Link to={`/milti-cinema-react`} className="link">
        <div className="logo">Multi Cinema</div>
      </Link>
      {/* <nav className="nav">
        <button className="nav__item">Фильмы</button>
        <button className="nav__item">Сериалы</button>
        <button className="nav__item">Мультфильмы</button>
      </nav> */}
      <div className="search">
        {/* <button className="my-watch">
          <FontAwesomeIcon icon={faBookmark} />
          Мои фильмы
        </button> */}
        <Link to={`/my-films`} className="link my-watch">
          <FontAwesomeIcon icon={faBookmark} />
          Мои фильмы
        </Link>
        {/* <form action="#" className="search__form form">
          <input type="text" className="form__input" />
          <button type="submit" className="form__btn">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="form__btn--mobile"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="form__btn--desktop"
            />
          </button>
        </form> */}
        {/* <button className="search__btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button> */}
        {user ? (
          <Link to={`/profile`} className="link user">
            <img
              src={user.photoURL}
              alt="user-avatar"
              className="user__avatar"
              title={user.displayName}
            />
            {/* <div className="user__name">{user.displayName}</div> */}
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
