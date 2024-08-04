export function TripsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTrip(props.trip.id, params, () => event.target.reset());
  };

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
      <form onSubmit={handleSubmit}>
        <div>
          Location: <input name="location" type="text" />
        </div>
        <div>
          Latitude: <input name="latitude" type="text" />
        </div>
        <div>
          Longitude: <input name="longitude" type="text" />
        </div>
        <div>
          Country: <input name="country" type="text" />
        </div>
        <div>
          Continent: <input name="continent" type="text" />
        </div>
        <div>
          Year: <input name="year" type="text" />
        </div>
        <div>
          Highlights: <input name="highlights" type="text" />
        </div>
        <div>
          Image url: <input name="image_url" type="text" />
        </div>
        <button type="submit">Update trip</button>
      </form>
    </div>
  );
}
