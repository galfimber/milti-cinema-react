import { useMemo, useCallback } from "react";
import { useAppContext } from "../../context/AppContext";
import { searchByName, searchByGenre } from "../api/getData";

export default function Pagination() {
  const { filmName, setData, pages, setPages, setIsLoading, fetchMethod, genre } =
    useAppContext();

  const searchNewPage = useCallback((page) => {
    fetchMethod === "searchByName" ? searchByName(filmName, setData, setPages, setIsLoading, page) : searchByGenre(genre, setData, setPages, setIsLoading, page);
    setIsLoading(true);
    // searchByName(filmName, setData, setPages, setIsLoading, page);
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
      searchNewPage(pageNum);
    },
    [searchNewPage]
  );

  return (
    <>
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
                <button className="pagination__btn active">{pageNum}</button>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
