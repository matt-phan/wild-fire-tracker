import { Event } from "../utils/DataInterfaces";

interface LocationCardProps {
  info: Event;
}

function LocationCard({ info }: LocationCardProps): JSX.Element {
  return (
    <div className="location-card">
      <h2>Event location info:</h2>
      <ul>
        <li>ID: {info.id}</li>
        <li>TITLE: {info.title}</li>
      </ul>
    </div>
  );
}

export default LocationCard;
