import { useState, useEffect } from "react";
import { getLikedMovies, saveLikedMovies } from "./../firebase";
// import authUser from "./../Components/auth/AuthDetails";

export const useLikedMovies = (user) => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    if (user) {
      const loadLikedMovies = async () => {
        const movies = await getLikedMovies(user.uid);
        setLikedMovies(movies);
      };
      loadLikedMovies();
    }
  }, [user]);

  useEffect(() => {
    if (user && likedMovies.length > 0) {
      saveLikedMovies(user.uid, likedMovies);
    }
  }, [likedMovies, user]);

  const toggleLike = (movie) => {
    if (likedMovies.some((likedMovie) => likedMovie.id === movie.id)) {
      setLikedMovies(
        likedMovies.filter((likedMovie) => likedMovie.id !== movie.id)
      );
    } else {
      setLikedMovies([...likedMovies, movie]);
    }
  };

  return { likedMovies, toggleLike };
};
