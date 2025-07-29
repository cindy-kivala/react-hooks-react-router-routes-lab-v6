import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((res) => res.json())
    .then(setActors);
  }, []);

//fallback for when actors are still loading
   if (actors.length === 0) {
    return (
      <>
        <header><NavBar /></header>
        <main><p>Loading actors...</p></main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actor Page</h1>
         {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
      </main>
    </>
  );
};

export default Actors;
