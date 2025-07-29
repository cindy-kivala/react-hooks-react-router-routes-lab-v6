import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        {movie.genres.map((genre, index) => ( 
          <span key={index} className="genre">
            {genre}
          </span>
        ))}
      </main>
    </>
  );
};

export default Movie;
