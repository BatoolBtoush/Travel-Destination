import React from 'react';
import Tour from "./tour/Tour";
import travelData from "../../data/db.json";



function Tours() {
  //console.log(props);
  return (
    <>
      {
     travelData.map((tour,id) => {
        return (
          <>
          <div key={id}>
                <Tour tour={tour} />
                </div>
          </>
        );
      })}
    </>
  );
}

export default Tours;
