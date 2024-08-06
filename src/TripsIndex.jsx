export function TripsIndex(props) {
  return (
    <div>
      <h1>All trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          <h2>{trip.location}</h2>
          <img src={trip.image_url} />
          <p>Country: {trip.country}</p>
          <p>Continent: {trip.continent}</p>
          <p>Year: {trip.year}</p>
          <p>Latitude: {trip.latitude}</p>
          <p>Longitude: {trip.longitude}</p>
          <p>Highlights: {trip.highlights}</p>
          <button onClick={() => props.onAddTrip(trip)}>Add to My Trips</button>
          <button onClick={() => props.onShowTrip(trip)}>More info</button>
        </div>
      ))}
    </div>
  );
}

