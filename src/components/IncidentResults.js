import React, { useState } from "react";
import axios from "axios";

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
            url: 'https://data.calgary.ca/resource/35ra-9556.json',
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.data)
        .catch(err => console.error(err))
    }

    getData()
    .then(response => {console.log(response)
    setIsLoading(false);});

    if (isLoading) {
        return <div>Results are loading...</div>
    }

    return(
        <div>
            <h2>Results Loaded</h2>
        </div>
    )
}

export default IncidentResults;