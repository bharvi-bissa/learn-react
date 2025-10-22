import SortControl from "./SortControl";

export default {
  component: SortControl,
   args: {
    sortByOptions: ['Release Date', 'Rating'],
    currentSelection : 'Rating',


},
  argTypes: {
    handleSortControlChange: { action: "sort changed" }
  }
};

export const Default = (args) => <SortControl {...args} />;