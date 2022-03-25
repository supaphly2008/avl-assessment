import Footer from "../components/mobile/Footer";

export default {
  title: "Components/Mobile",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const footer = Template.bind({});
footer.args = {};
