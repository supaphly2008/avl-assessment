import Tag from "../components/tags/Tag";

export default {
  title: "Components/Common",
  component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const tag = Template.bind({});
tag.args = {
  tagText: "Tag",
  title: "I am a title",
  desc: "234 Results",
  className: "",
};
