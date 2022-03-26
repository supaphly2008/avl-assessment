import Container from "../components/mobile/Container";

export default {
  title: "Components/Mobile",
  component: Container,
};

const Template = (args) => (
  <Container {...args}>
    <h1>Content here</h1>
  </Container>
);

export const container = Template.bind({});
container.args = {};
