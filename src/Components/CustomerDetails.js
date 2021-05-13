import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
export class CustomerDetails extends Component {

     styles = {
        root: {
            height: '45px',
            backgroundColor: '#6C63FF', 
            width: '171px',
            borderRadius: '5px',
            margin: '800px 180px 0 0',
            float: 'right',
            color: 'white',
        }
    }
    
    render() {
        return (
            <div>
                <h1 style={{align: 'center'}}>CustomerDetails</h1>
                <Button style={this.styles.root} onClick={this.props.nextStep}>Next</Button>
            </div>
        )
    }
}

export default CustomerDetails
