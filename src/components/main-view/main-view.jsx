import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "Inception", image: "https://m.media-amazon.com/images/S/pv-target-images/2b8bc4866e28f9b95c65965a2b33c8b14a8cebe8287b7399b536c672729ef018.jpg", director: "Christopher Nolan" },
        { id: 2, title: "Get Out", image: "https://m.media-amazon.com/images/I/91yhYRckRvL._AC_UF894,1000_QL80_.jpg", director: "Jordan Peele" },
        { id: 3, title: "The Godfather", image: "https://m.media-amazon.com/images/I/71mfJsyJO4L._AC_UF894,1000_QL80_.jpg", director: "Francis Ford Coppola" },
        { id: 4, title: "Jurrasic Park", image: "https://m.media-amazon.com/images/I/81AGqBcpYOL._AC_UF894,1000_QL80_.jpg", director: "Steven Spielberg" }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>
    }

    return (
        <div>
            {movies.map((movie) => (
        </div>
    );
};