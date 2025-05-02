import { useAppContext } from "../Context/AppContext";
import Film from "./Film";
import Auth from "./Auth";

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
              {likedMovies.map((filmData, index) => (
                <Film key={index} film={filmData} toggleLike={toggleLike} />
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
