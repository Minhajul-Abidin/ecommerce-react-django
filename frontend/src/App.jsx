import { Fragment } from "react";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />

      <Outlet />

      <Footer />
    </Fragment>
  );
}

export default App;
