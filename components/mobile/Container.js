import Header from "./Header";
import Footer from "./Footer";

const Container = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      {children}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Container;
