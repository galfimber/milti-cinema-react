import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import SearchRes from "./components/searchRes/SearchRes";
import FilmPage from "./components/filmPage/FilmPage";
import MyFilms from "./components/myFilms/MyFilms";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <Router basename="/milti-cinema-react/">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search-result" element={<SearchRes />} />
          <Route path="/movie/:id" element={<FilmPage />} />
          <Route path="/my-films" element={<MyFilms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
