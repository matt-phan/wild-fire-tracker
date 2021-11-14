import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import { NaturalDisasters, Event } from "./utils/DataInterfaces";
import "./index.css";

function App(): JSX.Element {
  const [eventData, setEventData] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [locationInfo, setLocationInfo] = useState<Event | null>(null);

  useEffect(() => {
    fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
      .then((res: Response): Promise<NaturalDisasters> => {
        setLoading(true);
        return res.json();
      })
      .then((jsonBody: NaturalDisasters) /*: Promise<undefined>*/ => {
        const { events } = jsonBody;
        setEventData(events);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      {!loading ? (
        <Map
          eventData={eventData}
          locationInfo={locationInfo}
          setLocationInfo={setLocationInfo}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
