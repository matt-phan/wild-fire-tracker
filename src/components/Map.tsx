import GoogleMapReact, { Coords } from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationCard from "./LocationCard";
import { Event } from "../utils/DataInterfaces";

interface MapProps {
  eventData: Event[];
  key: string;
  center: Coords;
  zoom: number;
  locationInfo: Event | null;
  setLocationInfo: React.Dispatch<React.SetStateAction<Event | null>>;
}

function Map({
  eventData,
  key,
  center,
  zoom,
  locationInfo,
  setLocationInfo,
}: MapProps): JSX.Element {
  const fireMarkers = eventData.map((event) => {
    if (event.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo(event)}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {fireMarkers}
      </GoogleMapReact>
      {locationInfo && <LocationCard info={locationInfo} />}
    </div>
  );
}

// adding a defaultProps property to the Map() function
Map.defaultProps = {
  key: "AIzaSyBq2eOdtJMrgfNGputH9UL-syn9uESkQlY",
  center: {
    lat: 34.15222,
    lng: -118.43123,
  },
  zoom: 6,
};

export default Map;
