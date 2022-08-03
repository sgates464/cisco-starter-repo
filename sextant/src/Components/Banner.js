// Task: Create a banner component displaying the title of the app.
import React from "react";
import { Box, Header, Heading } from "grommet";
import { Network } from "grommet-icons";
function Banner() {
  return (
    <Box
      align="stretch"
      justify="start"
      fill="horizontal"
      background={{ color: "background" }}
      pad={{ horizontal: "small" }}
      elevation="small"
    >
      <Header
        align="center"
        direction="row-responsive"
        flex={false}
        justify="between"
        gap="large"
      >
        <Box align="stretch" justify="center">
          <Heading color="brand" level="2">
            Sextant App
          </Heading>
        </Box>
        <Box align="stretch" justify="center">
          <Network color="dark-1" size="large" />
        </Box>
      </Header>
    </Box>
  );
}

export default Banner;
