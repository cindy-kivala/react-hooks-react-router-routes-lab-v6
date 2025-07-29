import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/directors")
      .then((res) => res.json())
      .then(setDirectors);
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors</h1>
        {directors.map((director) => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors
