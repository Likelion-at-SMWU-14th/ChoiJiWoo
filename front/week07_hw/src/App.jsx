import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Movie from "./components/Movie";
import MovieDetailPage from "./pages/MovieDetailPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
