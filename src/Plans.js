import  React from "react";

import Header from "./Components/Header";
import PlanContainer from "./Components/PlansContainer";
import CustomerDetails from "./Components/CustomerDetails";
import ProductDetails from './Components/ProductDetails'
import Payment from "./Components/Payment";
import ProgressBarUtil from "./Components/progressBar";
import SuccessPage from "./Components/SuccessPage";

class Plans extends React.Component {

  state = {
    step: 1
  }

  nextStep = () => {
    
    let { step } = this.state;
    console.log('Siva' + step) ;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    let { step } = this.state;
    this.setState({
      step: step > 1 ? step - 1 : 1
    })
    
  }

  render() {
    let { step } = this.state;

    switch(step) {
      default:
        return(
          <div className="plans">
            <Header className="headerClass" />
            <ProgressBarUtil step = {this.state.step}></ProgressBarUtil>
            <PlanContainer nextStep = {this.nextStep} prevStep = {this.prevStep}/>
            <div className="plansBg"></div>
          </div>
        );
      
      case 2: 
        return (
          <div className="plans">
            <Header className="headerClass" />
            <ProgressBarUtil step = {this.state.step}></ProgressBarUtil>
            <ProductDetails nextStep ={ this.nextStep} prevStep = {this.prevStep}/>
          </div>
        )
      case 3:
        return (
          <div className="plans">
            <Header className="headerClass" />
            <ProgressBarUtil step = {this.state.step}></ProgressBarUtil>
            <CustomerDetails nextStep ={this.nextStep} prevStep = {this.prevStep}/>
            <div className="plansBg"></div>
          </div>
        )
      case 4:
        return (
          <div className="plans">
            <Header className="headerClass" />
            <ProgressBarUtil step = {this.state.step}></ProgressBarUtil>
            <Payment nextStep ={ this.nextStep} prevStep = {this.prevStep} />
            
          </div>
        )
      case 5:
        return (
          <div className="plans">
            <Header className="headerClass" />
            <SuccessPage />
            
          </div>
        )
    }
  }
}

export default Plans;