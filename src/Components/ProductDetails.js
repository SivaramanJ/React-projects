import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Styled from 'styled-components';
import CTAComps from './CTAComps';
export class ProductDetails extends Component {

    render() {
        return (
            <div>
                 <h1>ProductDetails</h1>
                 <CTAComps nextStep = {this.props.nextStep} prevStep = {this.props.prevStep}/>
            </div>
        )
    }
}

export default ProductDetails
