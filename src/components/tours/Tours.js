function Tours(props) {
  //console.log(props);
  return (
    <>
      {props.theUsedData.map((tour) => {
        return (
          <>
            <div>The destination name : {tour.name}</div>
            <br></br>
            <div>
              <img src={tour.image} alt={tour.name} />
            </div>
            <br></br>
          </>
        );
      })}
    </>
  );
}

export default Tours;
