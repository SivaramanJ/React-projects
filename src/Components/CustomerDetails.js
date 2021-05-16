import React, { Component } from 'react'
import CTAComps from './CTAComps';
export class CustomerDetails extends Component {
    
    render() {
        return (
            <div>
                <h1 style={{align: 'center'}}>CustomerDetails</h1>
                <CTAComps nextStep = {this.props.nextStep} prevStep = {this.props.prevStep}/>
            </div>
        )
    }
}

export default CustomerDetails
