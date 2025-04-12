// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { useData } from "./Hooks/useData";
// import { useFilmName } from "./Hooks/useFilmName";
// import { useAuth } from "./Hooks/useAuth";
// import { useLikedMovies } from "./Hooks/useLikedMovies";
import { usePages } from "./Hooks/usePages";
// import { useLoading } from "./Hooks/useLoading";

import Header from "./Components/Header";
import Auth from "./Components/Auth";
import ContinueWatch from "./Components/ContinueWatch";
import SearchRes from "./Components/SearchRes";
import FilmPage from "./Components/FilmPage";
import MyFilms from "./Components/MyFilms";
import FormSearch from "./Components/GetFilms/FormSearch";
import Profile from "./Components/Profile";

function App() {
  // const { user } = useAuth();
  // const { likedMovies, toggleLike } = useLikedMovies(user);
  // const loading = useLoading();
  // const {data, setData} = useData();
  // const filmName = useFilmName();
  const pages = usePages();

  return (
    <Router basename="/milti-cinema-react/">
      <div className="App">
        <Header />
        {/* <main className="main">
        <ContinueWatch />
        <SearchRes {...data} {...filmName} {...filmIndex} />
      </main> */}
        <Routes>
          <Route
            path="/"
            element={
              <main className="main">
                {/* <Auth
                // user={user}
                /> */}
                <ContinueWatch />
                <FormSearch
                  // filmName={filmName}
                  // setFilmName={setFilmName}
                  // setData={setData}
                  pages={pages}
                  // setPages={setPages}
                  // setIsLoading={setIsLoading}
                />
              </main>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/search-result"
            element={
              <main className="main">
                <SearchRes
                  // data={data}
                  // setData={setData}
                  // {...filmName}
                  // likedMovies={likedMovies}
                  // toggleLike={toggleLike}
                  pages={pages}
                  // {...loading}
                />
              </main>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                {/* {filmIndex.filmIndex.isActive && ( */}
                <FilmPage
                // film={data.data[filmIndex.filmIndex.index]}
                // {...filmIndex}
                // data={data}
                />
                {/* // )} */}
              </>
            }
          />
          <Route
            path="/my-films"
            element={
              <>
                <MyFilms
                // user={user}
                // likedMovies={likedMovies}
                // toggleLike={toggleLike}
                // {...loading}
                />
              </>
            }
          />
        </Routes>

        {/* {filmIndex.filmIndex.isActive ? (
          <FilmPage
            film={data.data[filmIndex.filmIndex.index]}
            {...filmIndex}
          />
        ) : (
          <main className="main">
            <ContinueWatch />
            <SearchRes {...data} {...filmName} {...filmIndex} />
          </main>
        )} */}
      </div>
    </Router>
  );
}

export default App;
