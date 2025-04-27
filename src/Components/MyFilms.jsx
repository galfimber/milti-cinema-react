// import Registration from "./auth/Registration";
// import Login from "./auth/Login";
// import AuthDetails from "./auth/AuthDetails";
import { useAppContext } from "../Context/AppContext";
import Film from "./Film";
import Auth from "./Auth";

export default function MyFilms() {
  // user,
  // likedMovies,
  // toggleLike,
  // isLoading,
  // setIsLoading
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
                <Film
                  key={index}
                  film={filmData}
                  // likedMovies={likedMovies}
                  toggleLike={toggleLike}
                  // isLoading={isLoading}
                  // setIsLoading={setIsLoading}
                />
              ))}

              {/* {likedMovies.length > 0 && (
            <FilmList
              data={likedMovies}
              // setData={setData}
              // filmName={filmName}
              // likedMovies={likedMovies}
              toggleLike={toggleLike}
              // pages={pages}
              // isLoading={isLoading}
              // setIsLoading={setIsLoading}
            />
          )} */}
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
