import { memo, useEffect } from "react";
import { useLoading } from "../../hooks/useLoading";
import { useAppContext } from "../../context/AppContext";
import { searchCollections } from "../api/getData";
import Film from "../film/Film";

export default memo(function FilmCollections() {
  const { collections, setCollections } = useAppContext();
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    if (collections.length > 0) return setIsLoading(false);

    searchCollections(setCollections, setIsLoading);
  }, [collections]);

  return (
    <section className="film-collections">
      <div className="container">
        {!isLoading && (
          <>
            <div className="collections collections-serials">
              <h2 className="title-2">Популярные сериалы</h2>
              <div className="collections__wrapper">
                {collections[1].map(
                  (filmData) =>
                    filmData.poster &&
                    filmData.poster.url && (
                      <Film key={filmData.id} film={filmData} />
                    )
                )}
              </div>
            </div>
            <div className="collections collections-new">
              <h2 className="title-2">Ожидаемые</h2>
              <div className="collections__wrapper">
                {collections[0].map(
                  (filmData) =>
                    filmData.poster &&
                    filmData.poster.url && (
                      <Film key={filmData.id} film={filmData} />
                    )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
});
