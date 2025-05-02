import { useMemo, useCallback } from "react";
import { useAppContext } from "./../Context/AppContext";
import { searchByName } from "./api/getData";
import Film from "./Film";

export default function FilmList({}) {
  const { filmName, data, setData, pages, setPages, isLoading, setIsLoading } =
    useAppContext();

  const search = useCallback((page) => {
    setIsLoading(true);
    searchByName(filmName, setData, setPages, setIsLoading, page);
    window.scrollTo(0, 0);
  });

  const pagesArr = useMemo(() => {
    const result = [1];
    const actual = pages?.actual || 1;
    const all = pages?.all || 1;

    if (actual < 4) {
      for (let i = 2, n = 0; i < all && n < 3; i++, n++) {
        result.push(i);
      }
    } else {
      if (actual - 1 < 2) {
        result.push("...");
      }
      result.push("...");
      for (let i = actual - 1, n = 0; i < all && n < 3; i++, n++) {
        result.push(i);
      }
    }
    if (all - actual > 2) {
      result.push("...");
    }

    if (all !== 1) {
      result.push(all);
    }

    return result;
  }, [pages?.actual, pages?.all]);

  const handlePageClick = useCallback(
    (pageNum) => {
      search(pageNum);
    },
    [search]
  );

  return (
    <>
      {isLoading ? (
        <div className="film-list">Загрузка фильмов...</div>
      ) : (
        <>
          <div className="film-list">
            {data.map((filmData) => (
              <Film key={filmData.id} film={filmData} />
            ))}
          </div>
          <div className="pagination">
            <ul className="pagination__list">
              {pagesArr.map((pageNum, index) =>
                pageNum === "..." ? (
                  <li className="pagination__item" key={`ellipsis-${index}`}>
                    ...
                  </li>
                ) : pageNum !== pages.actual ? (
                  <li className="pagination__item" key={`page-${pageNum}`}>
                    <button
                      className="pagination__btn"
                      onClick={() => handlePageClick(pageNum)}
                    >
                      {pageNum}
                    </button>
                  </li>
                ) : (
                  <li className="pagination__item" key={`active-${pageNum}`}>
                    <button className="pagination__btn active">
                      {pageNum}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
