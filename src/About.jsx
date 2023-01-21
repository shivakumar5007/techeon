import React from "react";
import "./App.css";
import PG from "../src/images/main p.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to"
        imgsrc={PG}
        visit="/Contact"
        btname="Back"
      />
    </>
  );
};

export default About;
