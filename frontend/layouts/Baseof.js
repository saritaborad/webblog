import Footer from "./Footer";
import Header from "./Header";

const Base = ({ children }) => {
 return (
  <div className="flex flex-col min-h-screen">
   <Header />
   <main className="flex-grow">{children}</main>
   <Footer />
  </div>
 );
};

export default Base;
