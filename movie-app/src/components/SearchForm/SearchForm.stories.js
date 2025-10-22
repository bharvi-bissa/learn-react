import SearchForm from "./SearchForm";


export default {
  component: SearchForm,
   args: {
    initialQuery: "The Dark Knight"
  },
  argTypes: {
    onSearch: { action: "search-clicked" }
  }
};

export const Default = (args) => <SearchForm {...args} />;