import React, { useState } from "react";

import "../css/PageBody.css";

function PageBody() {
  const [selected, setSelected] = useState("none");

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
        </div>
        <div className="column">
          <h1>Search Results</h1>
        </div>
      </div>
    </div>
  );
}

export default PageBody;
