// A React component that displays a list of user trips based on the data passed in as props.
export function UserTripsIndex(props) {     
  return (
    <div>
      <h1>All User trips</h1>      
      {/* Iterate over the userTrips array passed via props in Content.jsx */}
      {props.userTrips.map((trip) => (    
        <div key={trip.id}>                 {/* Unique key for each trip, based on trip id. Helps React render the list of trips */}          
          <h2>{trip.location}</h2>          {/* Display the location of the trip */}
          <img src={trip.image_url} />
          <p>Country: {trip.country}</p>
          <p>Continent: {trip.continent}</p>
          <p>Year: {trip.year}</p>
          <p>Latitude: {trip.latitude}</p>
          <p>Longitude: {trip.longitude}</p>
          <p>Highlights: {trip.highlights}</p>
          <button onClick={() => props.onShowTrip(trip)}>More info</button>
          {/* trip.usertrip_id:   trip = object   usertrip_id = property I added to the trips jbuilder to pull the id from the UserTrip */}
          <button onClick={() => props.onDestroyUserTrip(trip.usertrip_id)}>Remove from My Trips</button>
        </div>
      ))}
    </div>
  );
}
