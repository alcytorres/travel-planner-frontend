import "./TripsIndex.css";  // Import the CSS file

export function TripsIndex(props) {
  return (
    <div>
      <br />
      <div className="row">
        {props.trips.map((trip) => (
          <div key={trip.id} className="col-sm-4 mb-3 mb-sm-0">
            <div className="trip-card">
            <img src={trip.image_url} className="card-img-top" alt={trip.location} />
              <div className="card-body">
                <h5 className="card-title">{trip.location}</h5>
                {/* <p className="card-text">Latitude: {trip.latitude}</p>
                <p className="card-text">Longitude: {trip.longitude}</p> */}
                <p className="card-text">Country: {trip.country}</p>
                {/* <p className="card-text">Continent: {trip.continent}</p> */}
                <p className="card-text">Year: {trip.year}</p>
                <p className="card-text">Highlights: {trip.highlights}</p>
                <button className="btn btn-primary" onClick={() => props.onAddTrip(trip)}>Add to Trips</button>
                <button className="btn btn-secondary" onClick={() => props.onShowTrip(trip)}>More Info</button>
              </div>
            </div>
            <br />
          </div>
        ))} 
      </div>
    </div>
  );
}

  


// export function TripsIndex(props) {
//   return (
//     <div>
//       <h1>All trips</h1>
//       {props.trips.map((trip) => (
//         <div key={trip.id}>
//           <h2>{trip.location}</h2>
//           <img src={trip.image_url} />
//           <p>Country: {trip.country}</p>
//           <p>Continent: {trip.continent}</p>
//           <p>Year: {trip.year}</p>
//           <p>Latitude: {trip.latitude}</p>
//           <p>Longitude: {trip.longitude}</p>
//           <p>Highlights: {trip.highlights}</p>
//           <button onClick={() => props.onAddTrip(trip)}>Add to My Trips</button>
//           <button onClick={() => props.onShowTrip(trip)}>More info</button>
//         </div>
//       ))}  
//     </div>
//   );
// }
