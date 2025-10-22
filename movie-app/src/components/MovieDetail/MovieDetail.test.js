import { render, screen } from '@testing-library/react';
import MovieDetail from './MovieDetail';

describe('MovieDetail Component', () => {
  const movie =  {
    imageUrl: "https://picsum.photos/300/450?random=1",
    title: "Pulp Fiction",
    rating : "8",
    duration : "2hr 30min",
    year: 1994,
    genres: ["Action", "Adventure"],
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }

  test('renders movie details correctly when movie prop is provided', () => {
    render(<MovieDetail movie={movie} />);
    expect(screen.getByRole('heading', { name: movie.title })).toBeInTheDocument();

    expect(screen.getByText(movie.rating)).toBeInTheDocument();

    expect(screen.getByText(movie.genres.join(" & "))).toBeInTheDocument();

    expect(screen.getByText(movie.year.toString())).toBeInTheDocument();

    expect(screen.getByText(movie.description)).toBeInTheDocument();

    expect(screen.getByText(movie.duration)).toBeInTheDocument();

    // Poster image
    const img = screen.getByRole('img', { name: movie.title });
    expect(img).toHaveAttribute('src', movie.imageUrl);
    expect(img).toHaveAttribute('alt', movie.title);
  });

  test('does not render anything when movie prop is not provided', () => {
    const { container } = render(<MovieDetail movie={null} />);
    expect(container.firstChild).toBeNull();
  });
});
