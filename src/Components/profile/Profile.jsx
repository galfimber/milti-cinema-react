import { useAppContext } from "../../context/AppContext";
import Auth from "./Auth";

export default function Profile() {
  const { user } = useAppContext();
  return (
    <section className="profile-page">
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
    </section>
  );
}
