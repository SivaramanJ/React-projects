import React from "react";
import Inboundlogo from "../../public/Inboundlogo.svg"
import Outboundlogo from "../../public/outbountlogo.svg"

const InsuranceCard = (props) => {

        let styles = {}

        if(props.type === "Outbound") {
            styles ={
                left: "50%",
            }
        }

        return (
            <div className ={props.className} style={styles}>
                <div>
                    <p className="subText">Travel to dubai</p>
                    {props.type === 'Inbound' ? <img class="typeLogo" src={Inboundlogo} alt=" " ></img> : <img class="typeLogo" src={Outboundlogo} alt=" " ></img> }
                    <p className="type">{props.type}</p>
                </div>
            </div>
        )
    
}
export default InsuranceCard