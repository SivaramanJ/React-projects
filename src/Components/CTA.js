import React from "react";
import Styled from "styled-components";

const CallToAction = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    background-color: #6C63FF; 
    width: 171px;
    border-radius: 5px;
    margin: 800px 120px 0 0;
    float: right;
    color: white
`;

const CTA = (props) => {
    return (
        <CallToAction >
            <h3>{props.innerTitle}</h3>
        </CallToAction>
    )
} 
export default CTA;