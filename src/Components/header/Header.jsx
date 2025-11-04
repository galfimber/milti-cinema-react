import { useAppContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Auth from "./../profile/Auth";

export default function Header() {
  const { user } = useAppContext();
  return (
    <header className="header">
      <Link to={`/`} className="link">
        <div className="header__logo">Multi Cinema</div>
      </Link>
      <div className="header__menu">
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
          <Auth/>
        )}
      </div>
    </header>
  );
}
