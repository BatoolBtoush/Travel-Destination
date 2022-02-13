function Tours(props) {
  //console.log(props);
  return (
    <>
      {props.theUsedData.map((tour) => {
        return (
          <>
            <h2>**Tour**</h2>
            <p> The destination name : {tour.name} </p>
            <img src={tour.image} alt={tour.name} />
          </>
        );
      })}
    </>
  );
}

export default Tours;
