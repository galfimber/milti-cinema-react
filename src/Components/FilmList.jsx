// import AuthDetails from "./auth/AuthDetails";
// import { useLikedMovies } from "./../Hooks/useLikedMovies";
import { useAppContext } from "./../Context/AppContext";
import { searchByName } from "./api/getData";
import Film from "./Film";

export default function FilmList({
  // data,
  // setData,
  // filmName,
  // likedMovies,
  // toggleLike,
  pages,
  // isLoading,
  // setIsLoading,
}) {
  // console.log(data);
  const { setIsLoading, filmName, data, setData } = useAppContext();
  const pagesArr = [1];

  const search = (page) => {
    // setPages({
    //   actual: page,
    //   all: 0,
    // });
    searchByName(filmName, setData, pages, setIsLoading, page);
  };

  const setPages = (actual) => {
    if (actual < 4) {
      for (let i = 2, n = 0; i < pages.all && n < 3; i++, n++) {
        pagesArr.push(i);
      }
    } else {
      if (actual - 1 < 2) {
        pagesArr.push("...");
      }
      pagesArr.push("...");
      for (let i = actual - 1, n = 0; i < pages.all && n < 3; i++, n++) {
        pagesArr.push(i);
      }
    }
    if (pages.all - actual > 2) {
      pagesArr.push("...");
    }

    if (pages.all !== 1) {
      pagesArr.push(pages.all);
    }
    // pagesArr.forEach((i) => console.log(i));
  };

  // console.log(pages);
  setPages(pages.actual);

  return (
    <>
      <div className="film-list">
        {data.map(
          (filmData, index) =>
            filmData.poster && filmData.poster.url && (
              <Film
                key={index}
                film={filmData}
                // likedMovies={likedMovies}
                // toggleLike={toggleLike}
                // isLoading={isLoading}
                // setIsLoading={setIsLoading}
              />
            )
        )}
      </div>
      <div className="pagination">
        <ul className="pagination__list">
          {pagesArr.map((pageNum, index) =>
            pageNum === "..." ? (
              <li className="pagination__item" key={index * 2}>
                ...
              </li>
            ) : pageNum !== pages.actual ? (
              <li className="pagination__item" key={pageNum}>
                <button
                  className="pagination__btn"
                  onClick={() => search(pageNum)}
                >
                  {pageNum}
                </button>
              </li>
            ) : (
              <li className="pagination__item" key={pageNum}>
                <button className="pagination__btn active">{pageNum}</button>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
