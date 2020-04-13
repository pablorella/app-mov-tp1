import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -34.9214, lng: -57.9544 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));
