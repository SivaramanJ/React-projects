import React  from "react";

import Header from "./Components/Header";
import InsuranceBody from "./Components/InsuranceBody";

const Home = () => {
    return(
        <div className="main">
          <Header className="headerClass" />
          <InsuranceBody />
          <div class="illustration1"></div>
        </div>
      );
}


export default Home;
