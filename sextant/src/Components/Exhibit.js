//Task: Create a component displaying a heading and any children components as a Card with Card, CardHeader, CardBody, CardFooter.
import { Card, CardHeader, CardBody, CardFooter, Heading } from "grommet";
function Exhibit({ Children, heading }) {
  return (
    <Card background={{ color: "background" }} width="medium" height="medium">
      <CardHeader
        align="center"
        direction="column"
        flex={false}
        justify="start"
        gap="medium"
      >
        <Heading level="3">{heading}</Heading>
      </CardHeader>
      <CardBody pad="small">
        <Box align="center" justify="center" fill>
          {Children}
        </Box>
      </CardBody>
      <CardFooter
        align="center"
        direction="row"
        flex={false}
        justify="between"
        gap="medium"
        pad="small"
      />
    </Card>
  );
}

export default Exhibit;
