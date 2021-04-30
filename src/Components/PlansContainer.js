import React, {useState} from "react";

const PlansContainer = () => {

    const [country, setCountry] = useState("");
    const [travellersCnt, setTravellersCnt] = useState("");

    const handleChange = (event) => {
        console.log(event.target)
    }

    return (

        <form className="quoteDetails">
            <div className="originSelect">
                <label>ORIGIN</label>
                <select
                    value = {country}
                    name="Country"
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
                    name="Travelllers Count"
                    onChange={handleChange}  
                >
                    <option value=""> Select </option>
                    <option value="india"> 1 </option>
                    <option value="srilanka"> 2 </option>
                    <option value="germany"> 3 </option>
                    <option value="china"> 4 </option>
                </select>
                
            </div>
        </form>
        
    )
}

export default PlansContainer;