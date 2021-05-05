import React, {useState} from "react";
import CTA from "./CTA";
import Styled from "styled-components";

const PlansContainer = () => {

    const [country, setCountry] = useState("");
    const [travellersCnt, setTravellersCnt] = useState("");
    const [tripType, setTripType] = useState("Single");
    const [travellerType, setTravellerType] = useState("Single");
    const [stDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState ("");

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        
        name === 'country' && setCountry(name => value);
        name === 'travellersCnt' && setTravellersCnt(name => value);
        name === 'stDate' && setStartDate(name => value);
        name === 'endDate' && setEndDate(name => value);
        name === 'tripType' && setTripType(name => value);
        name === 'travellerType' && setTravellerType(name => value);
    }

    return (
        <div>
            <form className="quoteDetails">
                <div className="originSelect">
                    <label>ORIGIN</label>
                    <select
                        value = {country}
                        name="country"
                        onChange={handleChange}     
                    >
                        <option value=""> Country </option>
                        <option value="india"> India </option>
                        <option value="srilanka"> Srilanka </option>
                        <option value="germany"> Germany </option>
                        <option value="china"> China </option>
                    </select>
                    
                </div>
                <div className="travellersCount">
                    <label>No. OF TRAVELLER</label>
                    <select
                        value = {travellersCnt}
                        name="travellersCnt"
                        onChange={handleChange}  
                    >
                        <option value=""> Select </option>
                        <option value="india"> 1 </option>
                        <option value="srilanka"> 2 </option>
                        <option value="germany"> 3 </option>
                        <option value="china"> 4 </option>
                    </select>
                    
                </div>

                <div className="datePicker">
                    <label>TRAVEL DURATION</label>
                    <div>
                        <input type="date" id="stDay" name="stDate" value={stDate} onChange={handleChange}/>
                        <span>to</span>
                        <input type="date" id="endDay" name="endDate" value={endDate} onChange={handleChange}/>

                    </div> 
                </div>

                <div className="tripType">
                    <p>TRIP TYPE</p>
                    <span>
                        <input 
                            type="radio" 
                            name="tripType" 
                            value="Single"
                            checked={tripType === "Single"}
                            onChange={handleChange}
                        />
                        Single Trip
                    </span>
                    <span>
                        <input type="radio" 
                            type="radio" 
                            name="tripType" 
                            value="Multiple"
                            checked={tripType === "Multiple"}
                            onChange={handleChange}
                        />
                        Multiple Trip
                    </span>
                </div>

                <div className="travellerType">
                    <p>TRAVELLER TYPE</p>
                    <span>
                        <input type="radio"
                            type="radio" 
                            name="travellerType" 
                            value="Single"
                            checked={travellerType === "Single"}
                            onChange={handleChange}
                        />
                        Single
                    </span>
                    <span>
                        <input type="radio" 
                            type="radio" 
                            name="travellerType" 
                            value="Multiple"
                            checked={travellerType === "Multiple"}
                            onChange={handleChange}
                        />
                        Multiple
                    </span>
                </div>
            </form>
            <CtaBlock>
                <CTA innerTitle="next" />
            </CtaBlock>
        </div>
    )
}

const CtaBlock = Styled.div`
        position: absolute;
        width: 424.05px;
        height: 54px;
        left: 1600px;
        bottom: 170px;
    `;

export default PlansContainer;