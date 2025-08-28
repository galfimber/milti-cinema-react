import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLayoutEffect  } from 'react';
import { useLocation } from 'react-router-dom';

import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import SearchRes from "./components/searchRes/SearchRes";
import FilmPage from "./components/filmPage/FilmPage";
import MyFilms from "./components/myFilms/MyFilms";
import Profile from "./components/profile/Profile";

function App() {
  
const ScrollToTop = () => {
  const { pathname } = useLocation();

useLayoutEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  return null;
};

  return (
    <Router basename="/milti-cinema-react/">
      <ScrollToTop/>
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
