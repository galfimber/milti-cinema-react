import { useAppContext } from "../../context/AppContext";
import Film from "../film/Film";
import Auth from "../profile/Auth";

export default function MyFilms() {
  const { user, likedMovies, toggleLike } = useAppContext();

  console.log(likedMovies);

  return (
    <section className="my-films">
      <div className="container">
        {/* <AuthDetails /> */}
        {user ? (
          <>
            <h2 className="title-2">Вы смотрите</h2>
            <div className="my-films__items">
              {likedMovies.map((filmData) => (
                <Film key={filmData.id} film={filmData} toggleLike={toggleLike} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div>Вы не авторизованы</div>
            <Auth user={user} />
          </>
        )}
      </div>
    </section>
  );
}
