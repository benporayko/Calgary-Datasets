import React, { useState } from "react";

import IncidentSearch from "./IncidentSearch";

import "../css/PageBody.css";
import IncidentResults from "./IncidentResults";

function PageBody() {
  const [selected, setSelected] = useState("none");

  // for traffic incidents
  const [quadrant, setQuadrant] = useState("");

  const trafficIncidentsClickHandler = () => {
      setSelected("incidents");
  };

  const trafficCamerasClickHandler = () => {
    setSelected("cameras");
  };

  const crimeStatisticsClickHandler = () => {
    setSelected("statistics");
  };

  const buildingPermitsClickHandler = () => {
    setSelected("permits");
  };

  const changeQuadrantHandler = (quadrant) => {
      setQuadrant(quadrant);
  }

  return (
    <div>
      <div className="column-container">
        <div className="column">
          <h1>Select a Dataset to Search</h1>
          <h3 className="description">
            Traffic Incidents - Information on traffic incidents including
            location, description, incident ID, etc.
          </h3>
          <h3 className="description">
            Traffic Cameras - Information on active traffic cameras including
            location, city quadrant, etc.
          </h3>
          <h3 className="description">
            Crime Stats - Information on crime including location, community
            names, month of crime, etc.
          </h3>
          <h3 className="description">
            Building Permits - Information on issued building permits including
            community name, status of permit, permit number, etc.
          </h3>
          <input
            type="button"
            value="Traffic Incidents"
            onClick={trafficIncidentsClickHandler}
          ></input>
          <input
            type="button"
            value="Traffic Cameras"
            onClick={trafficCamerasClickHandler}
          ></input>
          <input
            type="button"
            value="Crime Statistics"
            onClick={crimeStatisticsClickHandler}
          ></input>
          <input
            type="button"
            value="Building Permits"
            onClick={buildingPermitsClickHandler}
          ></input>
        </div>
        <div className="column">
          <h1>Set Search Parameters</h1>
          <div>
            {
              selected === "incidents" ? <IncidentSearch 
              onChangeQuadrant={changeQuadrantHandler}/> : 
              "Not yet implemented"
            }
          </div>
        </div>
        <div className="column">
          <h1>Search Results</h1>
            {
              selected === "incidents" ? <IncidentResults
              quadrant={quadrant}/> :
              "Not yet implemented"
            }
        </div>
      </div>
    </div>
  );
}

export default PageBody;
