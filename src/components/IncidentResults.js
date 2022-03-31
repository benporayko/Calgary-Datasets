import React, { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

function IncidentResults(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [unsortedData, setUnsortedData] = useState({});

  // const getData = async () => {
  //     const response = await axios.get("https://data.calgary.ca/resource/35ra-9556.json");
  //     return response.data;
  // }

  // if (isLoading) {
  //     getData().then(response =>
  //         setUnsortedData(response.data)
  //         console.log(response.data)
  //     )
  //     setIsLoading(false);
  // }

  const getData = () => {
    return axios({
      url: "https://data.calgary.ca/resource/35ra-9556.json",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.data)
      .catch((err) => console.error(err));
  };

  if (isLoading) {
    getData().then((response) => {
      setUnsortedData(response);
      setIsLoading(false);
    });
    return <div>Results are loading...</div>;
  }

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Incident Info</th>
          <th>Description</th>
          <th>Quadrant</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {
            unsortedData.map(incident =>
            <tr>
                <td>{incident.incident_info}</td>
                <td>{incident.description}</td>
                <td>{incident.quadrant}</td>
                <td>{dayjs(incident.start_dt).format("YYYY-MM-DD")}</td>
            </tr>)
        }
        </tbody>
      </table>
    </div>
  );
}

export default IncidentResults;
