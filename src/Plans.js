import  React from "react";

import Header from "./Components/Header";
import PlanContainer from "./Components/PlansContainer";

const Plans = () => {
    return(
        <div className="plans">
          <Header className="headerClass" />
          <PlanContainer />
          
          <div className="plansBg"></div>
        </div>
      );
}

export default Plans;