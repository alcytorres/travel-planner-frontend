import "./UserTripsIndex.css";  // Import the CSS file


// A React component that displays a list of user trips based on the data passed in as props.

export function UserTripsIndex(props) {     
  return (
    <div>
      <br />
      <div className="row">
        {props.userTrips.map((trip) => (    
          <div key={trip.id} className="col-sm-4 mb-3 mb-sm-0">   
            <div className="user-trip-card">                        
            <img src={trip.image_url} className="card-img-top" alt={trip.location} />
              <div className="card-body">
                <h5 className="card-title">{trip.location}</h5>
                {/* <p className="card-text">Latitude: {trip.latitude}</p>
                <p className="card-text">Longitude: {trip.longitude}</p> */}
                {/* <p className="card-text">Country: {trip.country}</p> */}
                {/* <p className="card-text">Continent: {trip.continent}</p> */}
                <p className="card-text">Year: {trip.year}</p>  
                <p className="card-text">Highlights: {trip.highlights}</p>
                <button className="btn btn-primary" onClick={() => props.onShowTrip(trip)}>More Info</button>

                {/* <button className="btn btn-danger" onClick={() => props.onDestroyUserTrip(trip.usertrip_id)}>Remove trip</button> */}
                <button className="btn btn-danger" onClick={() => props.onDestroyUserTrip(trip.usertrip_id, trip)}>Remove trip</button>

              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}







// export function UserTripsIndex(props) {     
//   return (
//     <div>
//       <h1>All User trips</h1>      
//       {/* Iterate over the userTrips array passed via props in Content.jsx */}
//       {props.userTrips.map((trip) => (    
//         <div key={trip.id}>                 {/* Unique key for each trip, based on trip id. Helps React render the list of trips */}          
//           <h2>{trip.location}</h2>          {/* Display the location of the trip */}
//           <img src={trip.image_url} />
//           <p>Country: {trip.country}</p>
//           <p>Continent: {trip.continent}</p>
//           <p>Year: {trip.year}</p>
//           <p>Latitude: {trip.latitude}</p>
//           <p>Longitude: {trip.longitude}</p>
//           <p>Highlights: {trip.highlights}</p>
//           <button onClick={() => props.onShowTrip(trip)}>More info</button>
//           {/* trip.usertrip_id:   trip = object   usertrip_id = property I added to the trips jbuilder to pull the id from the UserTrip */}
//           <button onClick={() => props.onDestroyUserTrip(trip.usertrip_id)}>Remove from My Trips</button>
//         </div>
//       ))}
//     </div>
//   );
// }
