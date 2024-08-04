import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";

export function Content() {

  const [trips, setTrips] = useState([]);

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");          
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  useEffect(handleIndexTrips, []);

  return (
    <main>
      <TripsIndex trips={trips} />
    </main>
  )
}
