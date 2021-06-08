import React, { Component } from 'react'
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap';


export class progressBar extends Component {

    progressBardiv = styled.div`
        margin-top: 160px;
        margin-left: 160px;
        width: 90%;
        height: 35px;
        position: absolute;
    `;

    progressBarli = styled.li`
        list-style-type: none;
        float: left;
        position: relative;
        width: 20%;
        text-align: left;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.3);
        &::before { 
            content: '';
            position: absolute;
            width: 120%;
            height: 1px;
            background-color: rgba(196, 196, 196, 0.3);
            top: 30px;
            border: 1.5px solid rgba(196, 196, 196, 0.3) ;
            left: -100%;
            border-radius: 10px;
            z-index: -1;
        }
        &:first-child:before {
            content: none;
        } 
        &.active {
            color: #6C63FF;
            font-weight: bold;
        }
        &.active + li::before {
            background: #6C63FF;
            width: 100%;
        }
    `
    render() {
        let { step } = this.props;
        return (
            <this.progressBardiv className='progressContainer' >
                {console.log(this.props)}
                <ul className='progressBar'>
                    <this.progressBarli className='active' >Quote Details</this.progressBarli> 
                    <this.progressBarli className= {step >= 2 ? 'active' : ''}>Product Details</this.progressBarli>
                    <this.progressBarli className= {step >= 3 ? 'active' : ''}>Customer Details</this.progressBarli>
                    <this.progressBarli className= {step >= 4 ? 'active' : ''}>Payment</this.progressBarli>
                    <this.progressBarli className= {step >= 5 ? 'active' : ''}>Complete</this.progressBarli>
                </ul>
                
            </this.progressBardiv>
        )
    }
}

export default progressBar
