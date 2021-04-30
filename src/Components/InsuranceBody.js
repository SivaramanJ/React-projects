import React from "react";
import InsuranceCard from "./InsuranceCard";


class InsuranceBody extends React.Component {

    render() {
        return (
            <div className="bodyCls">
                <p className="bodyTitle">
                    GET THE BEST INSURANCE EASIER AND QUICKER
                </p>
                <p className="bodysubTitle">Travel anywhere, without any worries</p>
                <div className="cardSection">
                    <InsuranceCard className="insuranceCard" type="Inbound" imgUrl="Inboundlogo" />
                    <InsuranceCard className="insuranceCard" type="Outbound" />
                </div>
            </div>
        )
    }
}
export default InsuranceBody;