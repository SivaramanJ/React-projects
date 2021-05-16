import  React from "react";

import Header from "./Components/Header";
import PlanContainer from "./Components/PlansContainer";
import CustomerDetails from "./Components/CustomerDetails";
import ProductDetails from './Components/ProductDetails'
import Payment from "./Components/Payment";

class Plans extends React.Component {

  state = {
    step: 1
  }

  nextStep = () => {
    console.log('Siva');
    let { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    let { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  render() {
    let { step } = this.state;

    switch(step) {
      case 1:
        return(
          <div className="plans">
            <Header className="headerClass" />
            <PlanContainer nextStep = {this.nextStep} prevStep = {this.prevStep}/>
            <div className="plansBg"></div>
          </div>
        );
      
      case 2: 
        return (
          <div className="plans">
            <Header className="headerClass" />
            <ProductDetails nextStep ={ this.nextStep} prevStep = {this.prevStep}/>
            <div className="plansBg"></div>
          </div>
        )
      case 3:
        return (
          <div className="plans">
            <Header className="headerClass" />
            <CustomerDetails nextStep ={this.nextStep} prevStep = {this.prevStep}/>
            <div className="plansBg"></div>
          </div>
        )
      case 4:
        return (
          <div className="plans">
            <Header className="headerClass" />
            <Payment nextStep ={ this.nextStep} prevStep = {this.prevStep} />
            <div className="plansBg"></div>
          </div>
        )
    }
  }
}

export default Plans;