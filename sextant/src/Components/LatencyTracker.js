// Task: track packet latency using websocket client and pylon server and display it in the UI.

import React, { useEffect, useState } from "react";
import { Box, Chart } from "grommet";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://localhost:55455");

function LatencyTracker() {
  const [lat, setLat] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //set up websocket client and logic to receive data from server
  useEffect(() => {
    client.onopen = () => {
      console.log("Connected to server");
    };
    client.onmessage = (message) => {
      let data = new Date().getTime() - message.data;
      let temp = lat;
      lat.shift();
      setLat([...temp, data]);

      console.log(lat);
    };
    client.onerror = (error) => {
      console.log(error);
    };
    client.onclose = () => {
      console.log("Disconnected from server");
    };
  });

  return (
    <Box align="center" justify="start" fill>
      <Chart
        type="line"
        values={lat}
        thickness="xsmall"
        bounds={[
          [0, 10],
          [-1, 3],
        ]}
        animate={true}
        color="graph-1"
      />
    </Box>
  );
}
export default LatencyTracker;
