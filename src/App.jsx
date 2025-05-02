import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import ContinueWatch from "./Components/ContinueWatch";
import SearchRes from "./Components/SearchRes";
import FilmPage from "./Components/FilmPage";
import MyFilms from "./Components/MyFilms";
import FormSearch from "./Components/GetFilms/FormSearch";
import Profile from "./Components/Profile";
import Collections from "./Components/Collections";

function App() {
  return (
    <Router basename="/milti-cinema-react/">
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main className="main">
                <ContinueWatch />
                <FormSearch />
                <Collections />
              </main>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/search-result"
            element={
              <main className="main">
                <SearchRes />
              </main>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                <FilmPage />
              </>
            }
          />
          <Route
            path="/my-films"
            element={
              <>
                <MyFilms />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
