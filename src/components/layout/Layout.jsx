/* eslint-disable react/prop-types */
import Header from "../../shared/dashboard/Header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
