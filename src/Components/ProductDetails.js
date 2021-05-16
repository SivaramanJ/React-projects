import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Styled from 'styled-components';
import CTAComps from './CTAComps';
import productLogo from "../../public/Inboundlogo.svg"
import greenTick from "../../public/greenTick.svg"
export class ProductDetails extends Component {

    productCont = Styled.div`
        width: 262px;
        height: 300px;
        margin: 16% 0 0 8.5%;
        padding-left: 5px;
        flex-direction: row;
        justify-content: center; 
    `
    childCont = Styled.div`
        position: absolute;
        width: 262px;
        height: 300px;
        background: #FFFFFF;
        opacity: 0.8;
        box-shadow: 2px 9px 21px rgba(0, 0, 0, 0.08);
        backdrop-filter: blur(3px);
        border-radius: 10px;
        cursor: pointer;
        &:hover {
            box-shadow: 2px 9px 21px rgba(0, 0, 0, 0.2);
        }
    `
    parentCont = Styled.div`
        display: flex;
        position: absolute;
        width: 100%;
    `
    productImg = Styled.img`
        width: 54px;
        height: 54px;
        padding-left: 20px;
    `
    greenTickImg = Styled.img`
        width: 20px;
        height: 13px;
        padding-top: 40px;
        padding-left: 20px;
    `

    textSpan = Styled.span `
        padding-left: 10px;
        color: rgba(0, 0, 0, 0.6);
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        text-align: center;
    `
    priceStyles = {
        fontFamily: "Oswald",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "37px",
        color: "#424149",
        padding: "5px 0 0 20px"
    }


    render() {
        return (
            <div >
                <this.parentCont >
                    <this.productCont >  
                        <this.childCont > 
                            <this.productImg src={productLogo} ></this.productImg> <br/>
                            <this.greenTickImg src={greenTick}></this.greenTickImg>
                            <this.textSpan>Trip Cancellation</this.textSpan><br />
                            <this.greenTickImg src={greenTick}></this.greenTickImg>
                            <this.textSpan>Trip Curtailment</this.textSpan><br/>
                            <div style={{marginTop: "45px",}}>
                                <this.textSpan style={{paddingLeft: "22px"}}>Inbound India</this.textSpan><br/><br/>
                                <this.textSpan style={this.priceStyles}>1500 INR</this.textSpan>
                            </div>
                        </this.childCont>
                    </this.productCont>
                    <this.productCont >
                        <this.childCont>
                                <this.productImg src={productLogo} ></this.productImg> <br/>
                                <this.greenTickImg src={greenTick}></this.greenTickImg>
                                <this.textSpan>Trip Cancellation</this.textSpan><br />
                                <this.greenTickImg src={greenTick}></this.greenTickImg>
                                <this.textSpan>Trip Curtailment</this.textSpan><br/>
                                <div style={{marginTop: "45px",}}>
                                    <this.textSpan style={{paddingLeft: "22px"}}>Inbound India</this.textSpan><br/><br/>
                                    <this.textSpan style={this.priceStyles}>2500 INR</this.textSpan>
                                </div>
                        </this.childCont>
                    </this.productCont>
                    <this.productCont >
                        <this.childCont>
                            <this.productImg src={productLogo} ></this.productImg> <br/>
                            <this.greenTickImg src={greenTick}></this.greenTickImg>
                            <this.textSpan>Trip Cancellation</this.textSpan><br />
                            <this.greenTickImg src={greenTick}></this.greenTickImg>
                            <this.textSpan>Trip Curtailment</this.textSpan><br/>
                            <div style={{marginTop: "45px",}}>
                                <this.textSpan style={{paddingLeft: "22px"}}>Inbound India</this.textSpan><br/><br/>
                                <this.textSpan style={this.priceStyles}>3000 INR</this.textSpan>
                            </div>
                        </this.childCont>
                    </this.productCont>
                    <this.productCont >
                        <this.childCont>
                                <this.productImg src={productLogo} ></this.productImg> <br/>
                                <this.greenTickImg src={greenTick}></this.greenTickImg>
                                <this.textSpan>Trip Cancellation</this.textSpan><br />
                                <this.greenTickImg src={greenTick}></this.greenTickImg>
                                <this.textSpan>Trip Curtailment</this.textSpan><br/>
                                <div style={{marginTop: "45px",}}>
                                    <this.textSpan style={{paddingLeft: "22px"}}>Inbound India</this.textSpan><br/><br/>
                                    <this.textSpan style={this.priceStyles}>4000 INR</this.textSpan>
                                </div>
                        </this.childCont>
                    </this.productCont>
                 </this.parentCont>
                 <CTAComps nextStep = {this.props.nextStep} prevStep = {this.props.prevStep}/>
            </div>
        )
    }
}

export default ProductDetails
