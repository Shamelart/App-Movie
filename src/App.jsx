import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Search from "./components/Search"
import HomeBannerContextProvider from "./context/HomeBannerContext";
import Movie from "./components/Movie";
import MoviesByCategory from "./components/MoviesByCategory";


function App() {
  return (
    <HomeBannerContextProvider>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieid" element={<Movie />} />
          <Route path="/category/:nameCategory" element={<MoviesByCategory />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </HomeBannerContextProvider>
  );
}
export default App
