// Task: Create component for IP Tracker, which will be used to track user's IP address, accepts prop to determine IPv6 or IPv4, displays IP address in a readable format.
import React, { useEffect, useState } from "react";
import { Box, Text } from "grommet";

function IPTracker({ type }) {
  const [ip, setIP] = useState("");

  useEffect(() => {
    if (type === "ipv4") {
      fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => setIP(data.ip))
        .catch((err) => console.log(err));
    } else {
      fetch("https://api64.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => setIP(data.ip))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <Box align="center" justify="start" fill gap="xxsmall">
      <Box
        align="center"
        justify="center"
        direction="column"
        fill="horizontal"
        pad="xsmall"
      >
        <Text weight="bold">IP Address</Text>
        <Text>{ip}</Text>
      </Box>
    </Box>
  );
}

export default IPTracker;
