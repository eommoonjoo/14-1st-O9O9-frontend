import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import NavSide from "../../components/NavSide/NavSide";
import NavTop from "../../components/NavTop/NavTop";
import MainContainer from "./Components/MainConatiner/MainContainer";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <NavSide />
        {/* <NavTop /> */}
        <MainContainer />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;
