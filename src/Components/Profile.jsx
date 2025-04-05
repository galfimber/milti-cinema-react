import { useAppContext } from "./../Context/AppContext";
import { Link } from "react-router-dom";
import Auth from "./Auth";

export default function Profile() {
  const { user } = useAppContext();
  return (
    <div className="container">
      <div className="profile">
        {user ? (
          <>
            <img
              src={user.photoURL}
              alt="user-avatar"
              className="profile__avatar"
            />
            <div className="profile__name">{user.displayName}</div>
            <div className="profile__email">{user.email}</div>
          </>
        ) : (
          <div>Вы не авторизованы</div>
        )}

        <Auth />
      </div>
    </div>
  );
}
