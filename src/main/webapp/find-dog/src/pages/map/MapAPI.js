import React from 'react';
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapAPI = () => {
	return (
		<div>
			<Map
				google={this.props.google}
				zoom={15}
				initialCenter={{lat: 37.5, lng: 127 }}></Map>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: "",
})(MapAPI);