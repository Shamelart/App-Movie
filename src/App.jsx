import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Search from "./components/Search"
import HomeBannerContextProvider from "./context/HomeBannerContext";
import Movie from "./components/Movie";
import PlayList from "./components/PlayList";
import MoviesByCategory from "./components/MoviesByCategory";
import PlayListContextProvider from "./context/PlayListContext";


function App() {
  return (
    <HomeBannerContextProvider>
      <PlayListContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieid" element={<Movie />} />
            <Route path="/category/:nameCategory" element={<MoviesByCategory />} />
            <Route path="/playList" element={<PlayList />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PlayListContextProvider>
    </HomeBannerContextProvider>
  );
}
export default App
