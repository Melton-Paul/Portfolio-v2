import React from "react";
import Contact from "../components/Contact/Contact";
import ReactGA from "react-ga";

export default function ContactPage() {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Contact />
    </>
  );
}
