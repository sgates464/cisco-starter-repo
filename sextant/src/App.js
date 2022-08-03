import { Page, Box } from "grommet";
import Banner from "./Components/Banner";
import Exhibit from "./Components/Exhibit";
import IPTracker from "./Components/IPTracker";
import LatencyTracker from "./Components/LatencyTracker";

function App() {
  return (
    <Page
      fill
      background={{ color: "active-background" }}
      kind="full"
      responsive
    >
      <Banner />
      <Box
        align="center"
        justify="center"
        direction="column"
        gap="medium"
        pad="medium"
      >
        <Box
          align="center"
          justify="center"
          direction="row-responsive"
          gap="medium"
        >
          <Exhibit heading="IPv4">
            <IPTracker type="ipv4" />
          </Exhibit>
          <Exhibit heading="IPv6">
            <IPTracker type="ipv6" />
          </Exhibit>
        </Box>

        <Box
          align="center"
          justify="center"
          direction="row-responsive"
          gap="medium"
        >
          <Exhibit heading="Latency">
            <LatencyTracker />
          </Exhibit>
        </Box>
      </Box>
    </Page>
  );
}

export default App;
