import TagsLoading from "../components/loading/TagsLoading";

export default {
  title: "Components/Common/Loading",
  component: TagsLoading,
};

const Template = (args) => <TagsLoading {...args} />;

export const tagsLoading = Template.bind({});
tagsLoading.args = {
  count: 3,
};
