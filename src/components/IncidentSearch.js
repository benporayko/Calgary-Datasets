import React, { useState } from "react";

function IncidentSearch (props) {

    const quadrantHandler = (event) => {
        // TODO: load traffic incident data into an array and search based on select quadrant
        console.log(event.target.value);
        props.onChangeQuadrant(event.target.value);
    }

    return (
        <div>
            <h2>Searching Traffic Incidents</h2>
            <h4>Search by Quadrant:</h4>
            <div onChange={quadrantHandler}>
                <label>
                    <input type="radio" value="NW" name="quadrant"></input>
                    <span>NW</span>
                </label>
                <label>
                    <input type="radio" value="NE" name="quadrant"></input>
                    <span>NE</span>
                </label>
                <label>
                    <input type="radio" value="SE" name="quadrant"></input>
                    <span>SE</span>
                </label>
                <label>
                    <input type="radio" value="SW" name="quadrant"></input>
                    <span>SW</span>
                </label>
            </div>
        </div>
    )
}

export default IncidentSearch;