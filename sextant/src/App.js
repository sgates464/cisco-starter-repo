import { Page, Box } from "grommet";
import Banner from "./Components/Banner";
import Exhibit from "./Components/Exhibit";
import IPTracker from "./Components/IPTracker";

function App() {
  return (
    <Page fill background={{ color: "active-background" }} kind="full">
      <Banner />
      <Box
        align="center"
        justify="center"
        pad="small"
        direction="row-responsive"
        gap="xsmall"
      >
        <Exhibit heading="IPv4">
          <IPTracker type="ipv4" />
        </Exhibit>
        <Exhibit heading="IPv6">
          <IPTracker type="ipv6" />
        </Exhibit>
      </Box>
    </Page>
  );
}

export default App;
