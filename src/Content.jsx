import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Signup } from './Signup';
import { Login } from './Login';
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { TripsShow } from "./TripsShow";
import { Modal } from "./Modal";
import { UserTripsIndex } from "./UserTripsIndex";

export function Content() {

  // Initializes the trips state variable as an empty array to store the list of all trips. setTrips is the function used to update this state.
  const [trips, setTrips] = useState([]);
  // Initializes the isTripsShowVisible state variable as false. This boolean state controls the visibility of the modal that shows trip details. setIsTripsShowVisible is the function to toggle this visibility.
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  // Initializes the currentTrip state variable as an empty object to store information about the currently selected trip. setCurrentTrip is the function to update this state when a trip is selected.
  const [currentTrip, setCurrentTrip] = useState({});
  // Initializes a state variable userTrips with an empty array to store the logged-in user's trips and provides a function setUserTrips to update it.
  const [userTrips, setUserTrips] = useState([]);

  const [category, setCategory] = useState('');  // New state for selected category
  const [yearSortOrder, setYearSortOrder] = useState('');  // New state for year sort order
  const categories = ["General", "Mountain", "Desert", "Beach"];  // Predefined categories

  
  // Fetches all trips from the backend, logs the response data, and updates the trips state with the fetched list.
  const handleIndexTrips = () => {
    console.log("handleIndexTrips");          
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  // Fetches the list of user-specific trips from the backend, logs the response, and updates the userTrips state with the retrieved data.
  const userTripIndex = () => {
  // Logs the string "handleIndexUserTrips" to the console for debugging purposes.
    console.log("handleIndexUserTrips");
    // Sends a GET request to the URL http://localhost:3000/user_trips.json using axios
    // Begins a chain that executes once the GET request is successful. The response object contains the data returned from the server.
    axios.get("http://localhost:3000/user_trips.json").then((response) => {
    // Logs the data received from the API response to the console.
      console.log(response.data);
    // Updates the state variable userTrips with the data received from the API, effectively storing the list of user trips fetched from the server.
      setUserTrips(response.data);
    });
  };

  // Get the current location (route)
  const location = useLocation();

  // Function to handle filtering
  const handleFilterTrips = () => {
    const url = location.pathname === "/user_trips" ? 'http://localhost:3000/user_trips.json' : 'http://localhost:3000/trips.json';
  
    axios.get(url, { params: { category, year_sort: yearSortOrder } }).then((response) => {
      if (location.pathname === "/user_trips") {
        setUserTrips(response.data);
      } else {
        setTrips(response.data);
      }
    });
  };

  // Sends a POST request with the given parameters to create a new trip, adds the created trip to the trips state, and calls a success callback function.
  const handleCreateTrip = (params, successCallback) => {
    console.log("handleCreateTrip", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    });
  };

  // Sets the specified trip as the current trip, makes the trip details modal visible, and logs the trip to the console.
  const handleShowTrip = (trip) => {
    console.log("handleShowTrip", trip);
    setIsTripsShowVisible(true);
    setCurrentTrip(trip);
  };

  // Sends a POST request to add the specified trip to the user's trips, logging the trip details and server response to the console.
  const handleShowAddTrip = (trip) => {
    console.log(trip);
    axios.post("http://localhost:3000/user_trips.json", {trip_id: trip.id}).then((response) => {
      console.log(response.data)
    })
  };

  // Sends a PATCH request with updated parameters to modify an existing trip, updates the trips state with the new trip data, calls a success callback function, and closes the modal.
  const handleUpdateTrip = (id, params, successCallback) => {
    console.log("handleUpdateTrip", params);
    axios.patch(`http://localhost:3000/trips/${id}.json`, params).then((response) => {
      setTrips(
        trips.map((trip) => {
          if (trip.id === response.data.id) {
            return response.data;
          } else {
            return trip;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  // Logs "handleClose" to the console and hides the trip details modal by setting isTripsShowVisible to false.
  const handleClose = () => {
    console.log("handleClose");
    setIsTripsShowVisible(false);
  };

  const handleDestroyUserTrip = (id) => {
    console.log("handleDestroyUserTrip", id);
    axios.delete(`http://localhost:3000/user_trips/${id}.json`).then((response) => {
      setUserTrips(userTrips.filter((userTrip) => userTrip.id !== id));
      window.location.href = "/user_trips";
      handleClose();
    }).catch((error) => {
      console.error("There was an error deleting the user trip!", error);
    });
  };

  useEffect(handleIndexTrips, []);  // All the trips
  useEffect(userTripIndex, []);     // Trips by user

  useEffect(() => {
    handleFilterTrips();
  }, [category, yearSortOrder, location.pathname]);  // Trigger filtering whenever category, yearSortOrder, or path changes
  

  return (
    <main>
      {/* Conditionally render the Category filter on the TripsIndex page */}
      {location.pathname === "/" && (
        <div className="container mt-2">
          <div className="row mb-2">
            <div className="col-md-12">
              <label htmlFor="categorySelect" className="form-label">Filter by Category:</label>
              <select
                id="categorySelect"
                className="form-select"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Conditionally render both Category and Year Sort filters on the UserTripsIndex page */}
      {location.pathname === "/user_trips" && (
        <div className="container mt-2">
          <div className="row mb-2">
            <div className="col-md-6">
              <label htmlFor="categorySelect" className="form-label">Filter by Category:</label>
              <select
                id="categorySelect"
                className="form-select"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="yearSortSelect" className="form-label">Sort by Year:</label>
              <select
                id="yearSortSelect"
                className="form-select"
                onChange={(e) => setYearSortOrder(e.target.value)}
                value={yearSortOrder}
              >
                <option value="">None</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


        {/* This <Route> maps the root URL ("/") to the TripsIndex component. When the user visits the root URL (e.g., http://localhost:3000/), TripsIndex is rendered. The component is provided with 3 props. Only focused on the first prop: trips={trips} */}

        {/* trips={trips}: An array of trip objects from the parent component's (e.g., Content) state, used to display the list of trips. */}

        {/* trips (prop name): */}
           {/* An arbitrary name for the prop. It defines the key under which the data will be accessible in the TripsIndex child component */}

        {/* {trips} (prop value): */}
           {/* The actual data from the parent component's (e.g., Content) state. This data gets passed down to the TripsIndex child component. */}
        <Route path="/" element={<TripsIndex trips={trips} onShowTrip={handleShowTrip} onAddTrip={handleShowAddTrip}/>} />

        <Route path="/trips/new" element={<TripsNew onCreateTrip={handleCreateTrip} />} />


        <Route path="/user_trips" element={<UserTripsIndex userTrips={userTrips} onShowTrip={handleShowTrip} onDestroyUserTrip={handleDestroyUserTrip} />} />

      </Routes>

      <Modal show={isTripsShowVisible} onClose={handleClose}>
        <TripsShow trip={currentTrip} onUpdateTrip={handleUpdateTrip} />
      </Modal>
    </main>
  )
}
