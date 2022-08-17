import React from "react";
import Welcome from "../components/Welcome/Welcome";
import ReactGA from "react-ga";

export default function WelcomePage() {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Welcome />
    </>
  );
}
