import React, { Component } from 'react';
import styled from "styled-components";
import CTAComps from './CTAComps'
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';
export class Payment extends Component {

    paymentCont = styled.div`
        height: 400px;
        width: 80em;
        margin: 250px 0 0 200px;
        position: absolute;
    `;

    amountSection = styled.div`
        height: 400px;
        width: 40em;
        border-right: 1px solid gray;
        position: absolute;
    `
    taxTable = styled.table`
        margin-left: 2px;
    `;
    promoCode = styled.div`
        width: 300px;
        height: 40px;
        text-align: center;
        margin: 10px 0 10px 150px;
        border: 1px dotted;
        align-items: center;
        p {
            color: black;
            padding: unset;
        }
    `;
    promoContainer = styled.div` 
        border-top: 1px solid rgba(196, 196, 196, 0.3);
        border-bottom: 1px solid rgba(196, 196, 196, 0.3);
        margin-bottom: 10px;
    `
    smallP = styled.p` 
        font-family: Open Sans;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        text-transform: uppercase;
    `;
    medP = styled.p` 
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6); 
        
    `;
    largeP = styled.p` 
        font-family: Oswald;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #000000;
        
    `;
    tdStyles = {
        width: '200px', 
        paddingRight: "350px",
    }
    priceStyles = {
        width: '90px',
        textAlign: 'center',
    }

    cardSection = styled.div`
        height: 400px;
        width: 35em;
        margin-left: 42em;

        .cardDetails {
            margin-top: 160px;
            height: 200px;
        }
        input {
            width: 30em;
        }
    `
    card = styled.div`
        width: 300px;
        height: 120px;
        border: 1px solid #E7E6FF;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #F8F8F8;
        position: absolute;
        text-transform: uppercase;
        div.frontSide {
            width: 230px;
            height: 120px;
            border-right: 1px solid #E7E6FF;
            position: absolute;
        }
        div.frontSide p{
            font-weight: 300;
            font-size: 14px;
            line-height: 18px;
            color: #6C63FF;
            padding-left: 10px;
        } 
        p.cardNum {
            padding-top: 40px;
        }
        div.backSide {
            margin-left:230px;
            width: 70px;
        }
        .backSide p {
            padding: 40px 0 0 20px;
            color: #6C63FF;
        }
    `
    inputField = styled.input`
        height: 22px;
        width: 340px;
        border: unset;
        margin-top: 30px;
        border-bottom: 1px solid rgba(196, 196, 196, 0.6);
       
        ::placeholder {
            font-family: Open Sans;
            font-style: normal;
            text-align: left;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            color: rgba(0, 0, 0, 0.25);
        }
        &:focus{
            outline: none;
        }
    `;
    render() {
        return (
            <div >
                <this.paymentCont>
                    <this.amountSection>
                        <this.taxTable>
                            <tr>
                                <td style={this.tdStyles}>
                                    <this.smallP>Plan Opted</this.smallP>
                                </td>
                                <td>
                                    <this.smallP style={{textAlign: 'center'}}>Price</this.smallP>
                                </td>
                            </tr>
                            <tr>
                                <td style={this.tdStyles}>
                                    <this.medP>Inbound India</this.medP>
                                </td>
                                <tr>
                                    <this.medP style={this.priceStyles}>2000 </this.medP>
                                </tr>
                            </tr>
                        </this.taxTable>
                        <this.promoContainer>
                            <this.promoCode>
                                <p>APPLY PROMO CODE</p>
                            </this.promoCode>
                        </this.promoContainer>
                        <this.taxTable >
                            <tr>
                                <td>
                                    <this.smallP>TAX</this.smallP>
                                </td>
                            </tr>
                            <tr>
                                <td style={this.tdStyles}>
                                    <this.medP> 10% Online Payment Tax</this.medP>
                                </td>
                                <td>
                                    <this.medP style={this.priceStyles}>200 </this.medP>
                                </td>
                            </tr>
                            <tr >
                                <td style={this.tdStyles}>
                                    <this.medP>5% Online Payment Tax</this.medP>
                                </td>
                                <td>
                                    <this.medP style={this.priceStyles}>100 </this.medP> 
                                </td>
                            </tr>
                            <tr class="borderTop">
                            <td style={this.tdStyles}>
                                    <this.largeP>TOTAL (INR)</this.largeP>
                                </td>
                                <td>
                                    <this.largeP style={this.priceStyles}>2300 </this.largeP> 
                                </td>
                            </tr>
                        </this.taxTable>

                    </this.amountSection>
                    
                    <this.cardSection>
                        <this.smallP >CHECKOUT</this.smallP>
                        <this.card>
                            <div className='frontSide'>
                                <p className='cardNum'>**** **** **** ****</p>
                                <p>MM/YY</p>
                            </div>
                            <div className='backSide'>
                                <p>CVV </p>
                            </div>
                        </this.card>
                        <div className='cardDetails'>
                            <table>
                                <tr>
                                    <td>
                                        <this.inputField type="text" name='cardNumber' placeholder="Card Number"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <this.inputField type="text" name='cardName' placeholder="Name On Card"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <this.inputField type="text" name='cardNumber' placeholder="Expiry MM/YY" style={{width: "150px", marginRight: "90px"}}/>
                                        <this.inputField type="text" name='cardNumber' placeholder="CVV" style={{width: "160px",}}/>
                                    </td>
                                    
                                </tr>
                            </table>
                            
                        </div>
                        
                    </this.cardSection>
                </this.paymentCont>
                <CTAComps nextStep = {this.props.nextStep} prevStep = {this.props.prevStep} name ="Pay Now"/>
            </div>
        )
    }
}

export default Payment
