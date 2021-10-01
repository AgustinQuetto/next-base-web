import styletron from "../styletron";
import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, BaseProvider, styled } from "baseui";
import { StatefulInput } from "baseui/input";
import "../styles/globals.css";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

function MyApp({ Component, pageProps }) {
  return (
    <BaseProvider theme={DarkTheme}>
      <Centered>
        <Component {...pageProps} />
      </Centered>
    </BaseProvider>
  );
}

export default MyApp;
