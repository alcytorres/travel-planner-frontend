export function TripsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Trip</h1>
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
          Image_url: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create trip</button>
      </form>
    </div>
  );
}
