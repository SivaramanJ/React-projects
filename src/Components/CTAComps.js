import React from "react";
import Styled from "styled-components";
import Button from '@material-ui/core/Button';

const CTAComps = (props) => {

    let styles = {
        root: {
            height: '80px',
            width: '280px',
            margin: '800px 150px 0 0',
            float: 'right',
            fontSize: '16px',
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
        },
        button: {
            height: '45px',
            width: '140px',
            marginLeft: 50,
            borderRadius: '5px',
            backgroundColor : '#6C63FF',
            color: 'white',
        }
    
    }
    let ButtonAnc = Styled.button`
        color: #6C63FF;
        margin-right: 40px;
        cursor: pointer;
    `
    return (
        <div style={styles.root}>
            {console.log(props)}
            <ButtonAnc as ="a" onClick={props.prevStep}>{'<   Back'}</ButtonAnc>
            <Button style={styles.button} onClick={props.nextStep}>{ props.name ? props.name : 'Next'}</Button>
        </div>
    )
    
}
export default CTAComps;