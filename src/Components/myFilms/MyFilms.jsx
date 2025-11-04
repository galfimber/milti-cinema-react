import { useAppContext } from "../../context/AppContext";
import Film from "../film/Film";
import Auth from "../profile/Auth";
import Profile from "./../profile/Profile";

export default function MyFilms() {
  const { user, likedMovies, toggleLike } = useAppContext();

  console.log(likedMovies);

  return (
    <section className="my-films">
      <div className="container">
        {/* <AuthDetails /> */}
        {user ? (
          <>
            <h2 className="my-films__title">Вы смотрите</h2>
            <div className="my-films__items">
              {likedMovies.map((filmData) => (
                <Film
                  key={filmData.id}
                  film={filmData}
                  toggleLike={toggleLike}
                />
              ))}
            </div>
          </>
        ) : (
          // <div className="profile__unauth">
          //   <div>Вы не авторизованы</div>
          //   <Auth user={user} />
          // </div>
          <Profile/>
        )}
      </div>
    </section>
  );
}
