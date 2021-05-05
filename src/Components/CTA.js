import React from "react";
import Styled from "styled-components";

const CallToAction = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    margin:20px;
    background-color: #6C63FF; 
    text-transform: uppercase;
    width: 171px;
    border-radius: 5px;
    left: 59.66%
    right: 0.01%;
    color: white
`;

const CTA = (props) => {
    return (
        <CallToAction >
            <h2>{props.innerTitle}</h2>
        </CallToAction>
    )
} 
export default CTA;