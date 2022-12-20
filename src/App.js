import "./App.css";
import { movies } from "./components/Data";
import "bootstrap/dist/css/bootstrap.min.css";

import Searchbar from "./components/Searchbar";
import { useState } from "react";
import AddFilm from "./components/AddFilm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

function App() {
  const [films, setFilms] = useState(movies);
  const [search, setSearch] = useState("");
  const [Rate, setRate] = useState(0);
  const [starSearch, SetstarSearch] = useState("");

  const searchForFilm = (input) => {
    setSearch(input);
  };
  const addFilm = (x) => {
    let newFilm = [...films.film, x];
    setFilms({ film: newFilm });
  };
  const routes = [
    {
      path: "/",
      element: (
        <Home
          films={films}
          search={search}
          Rate={Rate}
          searchForFilm={searchForFilm}
          starSearch={SetstarSearch}
          setRate={setRate}
          addFilm={addFilm}
        />
      ),
    },
    { path: "/details/:id", element: <Details films={films} /> },
  ];
  const router = createBrowserRouter(routes);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
