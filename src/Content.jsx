import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from './Signup';
import { Login } from './Login';
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { TripsShow } from "./TripsShow";
import { Modal } from "./Modal";
import { UserTripsIndex } from "./UserTripsIndex";

export function Content() {

  const [trips, setTrips] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});
  // Initializes a state variable userTrips with an empty array to store the logged-in user's trips and provides a function setUserTrips to update it.
  const [userTrips, setUserTrips] = useState([]);  // Added state for user trips
  
  const handleIndexTrips = () => {
    console.log("handleIndexTrips");          
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  // Defines an arrow function named userTripIndex
  const userTripIndex = () => {
  // Logs the string "handleIndexUserTrips" to the console for debugging purposes.
    console.log("handleIndexUserTrips");
    // Sends a GET request to the URL http://localhost:3000/user_trips.json using axios
    // Begins a chain that executes once the GET request is successful. The response object contains the data returned from the server.
    axios.get("http://localhost:3000/my_trips.json").then((response) => {
    // Logs the data received from the API response to the console.
      console.log(response.data);
    // Updates the state variable userTrips with the data received from the API, effectively storing the list of user trips fetched from the server.
      setUserTrips(response.data);
    });
  };

  const handleCreateTrip = (params, successCallback) => {
    console.log("handleCreateTrip", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    });
  };

  const handleShowTrip = (trip) => {
    console.log("handleShowTrip", trip);
    setIsTripsShowVisible(true);
    setCurrentTrip(trip);
  };

  const handleShowAddTrip = (trip) => {
    console.log(trip);
    axios.post("http://localhost:3000/user_trips.json", {trip_id: trip.id}).then((response) => {
      console.log(response.data)
    })
  };

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

  const handleClose = () => {
    console.log("handleClose");
    setIsTripsShowVisible(false);
  };

  useEffect(handleIndexTrips, []);  // All the trips
  useEffect(userTripIndex, []);     // Trips by user


  return (
    <main>
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


        <Route path="/my_trips" element={<UserTripsIndex userTrips={userTrips} onShowTrip={handleShowTrip} />} />

      </Routes>

      <Modal show={isTripsShowVisible} onClose={handleClose}>
        <TripsShow trip={currentTrip} onUpdateTrip={handleUpdateTrip} />
      </Modal>
    </main>
  )
}
