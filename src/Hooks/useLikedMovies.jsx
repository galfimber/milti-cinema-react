import { useState, useEffect } from "react";
import { getLikedMovies, saveLikedMovies } from "./../firebase";
// import authUser from "./../Components/auth/AuthDetails";

export const useLikedMovies = (user) => {
  const [likedMovies, setLikedMovies] = useState([]);

  // Загрузка лайкнутых фильмов при изменении пользователя
  useEffect(() => {
    if (user) {
      // Загружаем данные только после завершения аутентификации
      const loadLikedMovies = async () => {
        const movies = await getLikedMovies(user.uid);
        setLikedMovies(movies);
      };
      loadLikedMovies();
    }
  }, [user]); // Зависимость от loading

  // Сохранение лайков в Firestore при изменении
  useEffect(() => {
    if (user && likedMovies.length > 0) {
      // Сохраняем данные только после завершения аутентификации
      saveLikedMovies(user.uid, likedMovies);
    }
  }, [likedMovies, user]);

  const toggleLike = (movie) => {
    if (likedMovies.some((likedMovie) => likedMovie.id === movie.id)) {
      // Если фильм уже в списке, удаляем его
      setLikedMovies(
        likedMovies.filter((likedMovie) => likedMovie.id !== movie.id)
      );
    } else {
      // Иначе добавляем фильм в список
      setLikedMovies([...likedMovies, movie]);
    }
  };

  return { likedMovies, toggleLike };
};
