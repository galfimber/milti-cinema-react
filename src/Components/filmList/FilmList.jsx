import { useAppContext } from "../../context/AppContext";
import Film from "../film/Film";
import Pagination from "../pagination/Pagination";

export default function FilmList() {
  const { data, isLoading } =
    useAppContext();

  if (isLoading) return <div className="film-list">Загрузка фильмов...</div>;

  return (
    <>
      <div className="film-list">
        {data.map((filmData) => (
          <Film key={filmData.id} film={filmData} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
