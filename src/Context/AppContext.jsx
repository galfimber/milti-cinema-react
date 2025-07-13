import { createContext, useContext } from "react";
import { useLikedMovies } from "../hooks/useLikedMovies";
import { useAuth } from "../hooks/useAuth";
import { useLoading } from "../hooks/useLoading";
import { useData } from "../hooks/useData";
import { useFilmName } from "../hooks/useFilmName";
import { useFilm } from "../hooks/useFilm";
import { useCollections } from "../hooks/useCollections";
import { usePages } from "../hooks/usePages";
import { useLink } from "../hooks/useLink";

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
