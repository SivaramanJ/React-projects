import React, { Component } from 'react'
import CTAComps from './CTAComps';
import styled from "styled-components"
class CustomerDetails extends Component {
    
    formComp = styled.form`
        width: 1000px;
        height: 350px;
        margin: 15% 0 0 10%;
        position: absolute;
        
    `;

    nameCont = styled.div`
        position: absolute;
        width: 338px;
        height: 100px;
        margin: 60px 0 0 30px;
        font-family: Open Sans;
        font-style: normal;
        
        label {
            color: black;
            width: 156px;
            height: 18px;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 10px;
            color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            margin-top: 30px;
        }
        
    `;
    emailCont = styled.div`
        position: absolute;
        width: 338px;
        height: 100px;
        margin: 200px 0 0 30px;
        font-family: Open Sans;
        font-style: normal;

        label {
            color: black;
            width: 156px;
            height: 18px;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 10px;
            color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            margin-top: 30px;
        }    
    `;
    passportCont = styled.div`
        position: absolute;
        width: 338px;
        height: 100px;
        margin: 200px 0 0 600px;
        font-family: Open Sans;
        font-style: normal;
        
        label {
            color: black;
            width: 156px;
            height: 18px;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 10px;
            color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            margin-top: 30px;
        }
        
    `;

    nameInput = styled.input`
        
        height: 22px;
        width: 340px;
        border: unset;
        margin-top: 30px;
        border-bottom: 1px solid rgba(196, 196, 196, 0.6);
        
        ::placeholder {
            text-align: left;
            color: #757575;
        }
        &:focus{
            outline: none;
        }
    `;

    dateCont = styled.div`
        position: absolute;
        width: 338px;
        height: 100px;
        margin: 10px 0 0 600px;
        font-family: Open Sans;
        font-style: normal;

        label {
            color: black;
            width: 156px;
            height: 18px;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 25px;
            color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            margin-top: 30px;
        }

        `;
    
    conditionCont = styled.div`
        position: absolute;
        width: 338px;
        height: 80px;
        margin: 280px 0 0 20px;
        font-family: Open Sans;
        font-style: normal;
                
        
        label {
            color: black;
            width: 400px;
            height: 18px;
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
            padding-bottom: 10px;
            color: rgba(0, 0, 0,1);
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            margin-top: 30px;
        }

        input {
            border: 1px solid black;
            height: unset;
            width: unset;
        }
        span {
            margin-left: 5px;
        }        
    `;

    handleChange = () => {

    }
    render() {
        return (
            <div>
                <this.formComp>
                    <this.nameCont>
                        <label>YOUR NAME
                            <this.nameInput 
                                type="text" 
                                name="fullName" 
                                placeholder="Full Name"
                                onChange={this.handleChange}
                            ></this.nameInput>
                        </label>
                    </this.nameCont>

                    <this.dateCont>
                            <label>DATE OF BIRTH</label>
                                <this.nameInput 
                                    type="date" 
                                    name="dob" 
                                    onChange={this.handleChange}
                                ></this.nameInput>
                            
                    </this.dateCont>
                    
                    
                    <this.emailCont>
                        <label>EMAIL ADDRESS
                            <this.nameInput 
                                type="text" 
                                name="email" 
                                placeholder="xyz@email.com"
                                onChange={this.handleChange}
                            ></this.nameInput>
                        </label>

                    </this.emailCont>

                    <this.passportCont>
                        <label>PASSPORT NUMBER
                            <this.nameInput 
                                type="text" 
                                name="passportNumber" 
                                placeholder="ABCD1234"
                                onChange={this.handleChange}
                            ></this.nameInput>
                        </label>

                    </this.passportCont>

                    <this.conditionCont>
                        <label>
                            <this.nameInput 
                                type="checkbox" 
                                name="condition1" 
                                onChange={this.handleChange}
                            ></this.nameInput>
                            <span>I agree to the terms and conditions and privacy policies</span>
                        </label>
                        <label>
                            <this.nameInput 
                                type="checkbox" 
                                name="condition1" 
                                onChange={this.handleChange}
                            ></this.nameInput>
                            <span>Subscribe me for updates on offers, news and events</span>
                        </label>

                    </this.conditionCont>
                </this.formComp>
                <CTAComps nextStep = {this.props.nextStep} prevStep = {this.props.prevStep}/>
            </div>
        )
    }
}

export default CustomerDetails
