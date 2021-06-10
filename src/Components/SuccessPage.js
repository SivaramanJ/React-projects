import React, { Component } from 'react'
import successImg from '../../public/success.svg'
import styled from 'styled-components'



export class SuccessPage extends Component {

    mainCont = styled.div`
        width: 70%;
        height: 50%;
        margin: 15% 0 0 15%;
        text-align: center;
    `

    completeImg = styled.img`
        width: 400px;
        height: 400px;
        left: 0;
    `
    render() {
        return (
           <this.mainCont>
               <p className="bodyTitle" style={{left: '20%', fontSize: '22px'}}>
                   <span style={{fontSize: '18px', color: '#707070'}}> Thank You! </span>  <br></br>Your Insurance has been Processed.
                </p>
                <br></br>
               <this.completeImg src={successImg}></this.completeImg>
           </this.mainCont>
        )
    }
}

export default SuccessPage
