import React from "react";
import Inboundlogo from "../../public/Inboundlogo.svg"
import Outboundlogo from "../../public/outbountlogo.svg"
import { Link } from "react-router-dom"
 
const InsuranceCard = (props) => {

        let styles = {}

        if(props.type === "Outbound") {
            styles ={
                left: "50%",
            }
        }

        return (
            <div className ={props.className} style={styles}>
                <Link to='/plans' >
                    <div>
                        <p className="subText">Travel to dubai</p>
                        {props.type === 'Inbound' ? <img className="typeLogo" src={Inboundlogo} alt=" " ></img> : <img className="typeLogo" src={Outboundlogo} alt=" " ></img> }
                        <p className="type">{props.type}</p>
                        
                    </div>
                </Link>
            </div>
        )
    
}
export default InsuranceCard