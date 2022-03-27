import SearchLoading from "../components/loading/SearchLoading";

export default {
  title: "Components/Common/Loading",
  component: SearchLoading,
};

const Template = (args) => <SearchLoading {...args} />;

export const searchLoading = Template.bind({});
searchLoading.args = {
  count: 3,
};
