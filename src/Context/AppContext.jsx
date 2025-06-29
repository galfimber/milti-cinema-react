import { createContext, useContext } from "react";
import { useLikedMovies } from "../Hooks/useLikedMovies";
import { useAuth } from "../Hooks/useAuth";
import { useLoading } from "../Hooks/useLoading";
import { useData } from "../Hooks/useData";
import { useFilmName } from "../Hooks/useFilmName";
import { useFilm } from "../Hooks/useFilm";
import { useCollections } from "../Hooks/useCollections";
import { usePages } from "../Hooks/usePages";
import { useLink } from "../Hooks/useLink";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { user } = useAuth();
  const { likedMovies, toggleLike } = useLikedMovies(user);
  const { isLoading, setIsLoading } = useLoading(true);
  const { data, setData } = useData([]);
  const { filmName, setFilmName } = useFilmName("");
  const { film, setFilm } = useFilm({});
  const { collections, setCollections } = useCollections({});
  const { pages, setPages } = usePages();
  const { link, setLink } = useLink("");

  return (
    <AppContext.Provider
      value={{
        user,
        likedMovies,
        toggleLike,
        isLoading,
        setIsLoading,
        data,
        setData,
        filmName,
        setFilmName,
        film,
        setFilm,
        collections,
        setCollections,
        pages,
        setPages,
        link,
        setLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
