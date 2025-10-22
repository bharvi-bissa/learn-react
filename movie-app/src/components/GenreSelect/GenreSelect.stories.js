import GenreSelect from "./GenreSelect";

export default {
  component: GenreSelect,
  args: {
    genreList: ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"],
    selectedGenre : "ALL"
  },
  argTypes: {
    onSelect: { action: "selected" }
  }
 
};


export const Default = (args) => <GenreSelect {...args} />;