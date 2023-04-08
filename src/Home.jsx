import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="cont">
        <div className="misatge">
        Benvingut! Si vols contractar el nostre servei d'una manera ràpida i personalitzada aquest és el lloc!
        </div>
        <Link to="/presupost">Som-hi!</Link>
      </div>
    </>
  );
};

export default Home;
