import FilmWatch from "../components/filmWatch/FilmWatch";
import SearchForm from "../components/searchForm/SearchForm";
import FilmCollections from "../components/filmCollections/FilmCollections";

export default function HomePage() {
  return (
    <main className="main">
      <FilmWatch />
      <SearchForm />
      <FilmCollections />
    </main>
  );
}