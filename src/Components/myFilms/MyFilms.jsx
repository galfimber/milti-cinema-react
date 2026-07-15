import { useAppContext } from "../../context/AppContext";
import Film from "../film/Film";
import Profile from "./../profile/Profile";

export default function MyFilms() {
  const { user, likedMovies, toggleLike } = useAppContext();

  console.log(likedMovies);

  return (
    <section className="my-films">
      <div className="container">
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

          <Profile/>
        )}
      </div>
    </section>
  );
}
