import React, { Component } from 'react'
import successImg from '../../public/success.svg'
import styled from 'styled-components'
import CTAComps from './CTAComps'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';


export class SuccessPage extends Component {

    state = {
        redirect: false,
        loading: true,
    }

    retrunHome = () => {
        this.setState({
            redirect: true
        })
    }
    
    styles = {
        root: {
            height: '80px',
            width: '280px',
            margin: '45% 38% 0 0',
            float: 'right',
            fontSize: '16px',
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
        },
        button: {
            height: '45px',
            width: '140px',
            marginLeft: '5px',
            borderRadius: '5px',
            backgroundColor : '#6C63FF',
            color: 'white',
            fontWeight: 600,
        }
    
    }
    mainCont = styled.div`
        width: 70%;
        height: 50%;
        margin: 10% 0 0 15%;
        text-align: center;
        align-items: center;
        position: absolute;
    `

    completeImg = styled.img`
        width: 400px;
        height: 400px;
        margin: 9% 0 0 0;
    `

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000);
    }
    render() {

        if(this.state.redirect) {
            return <Redirect to = '/' />
        }
        if(this.state.loading) {
            return (
                <div style={{ position: 'fixed' , top: "25%", left: "38%", textAlign: 'center'}}> 
                    <h2 style={{color: '#687980'}}>Your payment is being processed...</h2>
                    <Loader
                        type="Puff"
                        color="#6C63FF"
                        height={100}
                        width={100}
                        style={{ position: 'fixed' , top: "40%", left: "46%"}}
                    />           
                 </div>
            )
        }
        else {
            return (
                <div>
                    <this.mainCont>
                        <p className="bodyTitle" style={{left: '20%', top:'0%', fontSize: '22px'}}>
                            <span style={{fontSize: '18px', color: '#707070'}}> Thank You! </span>  <br></br>Your Insurance has been Processed.
                            </p>
                            <br></br>
                        <this.completeImg src={successImg}></this.completeImg>
                    </this.mainCont>
                    <div style={this.styles.root}><Button onClick = {this.retrunHome} style={this.styles.button}>Go Home</Button></div>
            </div>
            )
        }
    }
}

export default SuccessPage
