import { styled } from "baseui";
import { StatefulInput } from "baseui/input";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const Test = () => (
  <Centered>
    <StatefulInput />
  </Centered>
);

export default Test;
