import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

interface LocationMarkerProps {
  lat: number;
  lng: number;
  onClick(param: any): void;
}

function LocationMarker({
  lat,
  lng,
  onClick,
}: LocationMarkerProps): JSX.Element {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
}

export default LocationMarker;
