import React  from "react";

import Header from "./Components/Header";
import InsuranceBody from "./Components/InsuranceBody";
import Loader from "react-loader-spinner";

const Home = () => {
  
    return(
        
        <div className="home">
          <Header className="headerClass" />
          <InsuranceBody />
          <div className="illustration1"></div>
        </div>
      );
}


export default Home;
