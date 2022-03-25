import Header from "../components/mobile/Header";

export default {
  title: "Components/Mobile",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {};
