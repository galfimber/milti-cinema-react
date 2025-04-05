// import Registration from "./auth/Registration";
// import Login from "./auth/Login";
// import AuthDetails from "./auth/AuthDetails";
import { useAppContext } from "../Context/AppContext";
import FilmList from "./FilmList";
import Film from "./Film";
import Auth from "./Auth";

export default function MyFilms() {
  // user,
  // likedMovies,
  // toggleLike,
  // isLoading,
  // setIsLoading
  const { user, likedMovies, toggleLike, setData } = useAppContext();

  // const search = (page) => {
  //   setPages({
  //     actual: page,
  //     all: 0,
  //   });
  //   searchByName(filmName, setData, pages, setIsLoading, page);
  // };

  // const pagesArr = [1];
  // const setPages = (actual) => {
  //   if (actual < 4) {
  //     for (let i = 2, n = 0; i < pages.all && n < 3; i++, n++) {
  //       pagesArr.push(i);
  //     }
  //   } else {
  //     if (actual - 1 < 2) {
  //       pagesArr.push("...");
  //     }
  //     pagesArr.push("...");
  //     for (let i = actual - 1, n = 0; i < pages.all && n < 3; i++, n++) {
  //       pagesArr.push(i);
  //     }
  //   }
  //   if (pages.all - actual > 2) {
  //     pagesArr.push("...");
  //   }

  //   pagesArr.push(pages.all);
  //   pagesArr.forEach((i) => console.log(i));
  // };

  // setPages(pages.actual);

  console.log(likedMovies);
  setData(likedMovies);

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
