import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";  
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
          <h1>Home Page</h1>
         {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
      ))}
      </main>
    </>
  );
};

export default Home;
