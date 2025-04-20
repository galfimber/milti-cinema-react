import { useEffect } from "react";
import { useAppContext } from "./../Context/AppContext";
import { searchCollections } from "./api/getData";
import Film from "./Film";

export default function Collections() {
  const { data, setData, isLoading, setIsLoading } =
    useAppContext();

  useEffect(() => {
    searchCollections(setData, setIsLoading);
  }, []);

  return (
    <div className="container">
      {!isLoading && (
        <>
          <div className="collections-new">
            <h2 className="title-2">Новинки</h2>
            <div className="collections-new__wrapper">
              {data[0].map(
                (filmData, index) =>
                  filmData.poster &&
                  filmData.poster.url && <Film key={index} film={filmData} />
              )}
            </div>
          </div>
          <div className="collections-serials">
            <h2 className="title-2">Популярные сериалы</h2>
            <div className="collections-serials__wrapper">
              {data[1].map(
                (filmData, index) =>
                  filmData.poster &&
                  filmData.poster.url && <Film key={index} film={filmData} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
