import React from "react";
// import { useState } from "react";
import travelData from "../../data/db.json";

function TourDetails() {
  return (
    <div>
      {travelData.map((details) => (
        <>
          <h2>{details.name}</h2>
          <p>{details.info}</p>
        </>
      ))}
    </div>
  );
}

export default TourDetails;
