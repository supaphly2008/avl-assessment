import Header from "./Header";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Container;
