import { Link } from "react-router-dom";


function Tour({tour}){
    return (
        <>
        <div>The destination name : {tour.name}</div>
           <br></br>
             <div>
               <img src={tour.image} alt={tour.name} />
             </div>
             <br></br>
             <nav>
        <Link to="/city/:id">Tour</Link>
    </nav>
        
        
        
        </>
    )
}
export default Tour;


