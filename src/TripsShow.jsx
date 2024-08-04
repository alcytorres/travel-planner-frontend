export function TripsShow(props) {
  return (
    <div>
      <h1>Trip information</h1>
      <p>Location: {props.trip.location}</p>
      <p>Latitude: {props.trip.latitude}</p>
      <p>Longitude: {props.trip.longitude}</p>
      <p>Country: {props.trip.country}</p>
      <p>Continent: {props.trip.continent}</p>
      <p>Year: {props.trip.year}</p>
      <p>Highlights: {props.trip.highlights}</p>
      <p>Image url: {props.trip.image_url}</p>
    </div>
  );
}
