// Task: Create a banner component displaying the title of the app.
import React from "react";
import { Box, Header, Heading } from "grommet";
import { Network } from "grommet-icons";
function Banner() {
  return (
    <Box
      align="stretch"
      justify="center"
      fill="horizontal"
      background={{ color: "background" }}
      pad={{ horizontal: "small" }}
      elevation="small"
      flex="shrink"
      direction="row"
    >
      <Header
        align="center"
        direction="row-responsive"
        flex={true}
        justify="center"
        gap="large"
      >
        <Box align="stretch" justify="center">
          <Heading color="brand" level="2" textAlign="center">
            Sextant App
          </Heading>
        </Box>
      </Header>
    </Box>
  );
}

export default Banner;
