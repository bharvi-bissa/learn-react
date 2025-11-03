import MovieTile from "./MovieTile";

const movie = {
        imageUrl: "https://picsum.photos/300/450?random=1",
        title: "Pulp Fiction",
        rating: "8",
        year: 1994,
        genres: ["Action", "Adventure"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }

export default {
  component: MovieTile,
   args: {
    movie: movie


},
  argTypes: {
    handleMovieClick: { action: "movie clicked" }
  }
};

export const Default = (args) => <MovieTile {...args} />;

