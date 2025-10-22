import { render, fireEvent, screen } from "@testing-library/react";
import MovieTile from "./MovieTile";


describe('MovieTile Component', () => {
    const movie = {
        imageUrl: "https://picsum.photos/300/450?random=1",
        title: "Pulp Fiction",
        rating: "8",
        year: 1994,
        genres: ["Action", "Adventure"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }

    test('Test that component renders a movie card with given movie prop', () => {
        const mockFunction = jest.fn();
        render(<MovieTile movie={movie} handleMovieClick={mockFunction} />);
        expect(screen.getByText(movie.title)).toBeInTheDocument();
        expect(screen.getByText(movie.year)).toBeInTheDocument();
        // However, & in JSX gets HTML-escaped to &amp;, which means the actual rendered DOM becomes: <p>Action &amp; Adventure</p>
        expect(screen.getByTestId("movie-genres")).toHaveTextContent(movie.genres.join(" & "));
        //expect(screen.getByText(movie.imageUrl)).toBeInTheDocument();
        //Above won’t work — imageUrl is in the src attribute of the <img>, not as text content.
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', movie.imageUrl);
        expect(img).toHaveAttribute('alt', 'Movie Poster');
    });


    test('Test that component triggers handleMovieClick function upon clicking', () => {
        const mockFunction = jest.fn();
        render(<MovieTile movie={movie} handleMovieClick={mockFunction} />);
        // better way to test click function instead of getting movie-card byText
        const movieCard = screen.getByTestId("movie-card");
        fireEvent.click(movieCard);
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });


    test('Component does not crash when handleMovieClick is not provided', () => {
        render(<MovieTile movie={movie} />);
        const movieCard = screen.getByTestId("movie-card");
        expect(() => {
            fireEvent.click(movieCard);
        }).not.toThrow();
    });


});


