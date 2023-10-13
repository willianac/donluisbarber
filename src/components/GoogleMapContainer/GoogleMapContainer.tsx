import { useEffect } from "react";
import "./GoogleMapContainer.css"
import { GoogleMap, MarkerF } from "@react-google-maps/api"

function GoogleMapContainer() {
	useEffect(() => {
		console.log("renderizando")
	}, [])
	return (
		<GoogleMap zoom={15} center={{lat: -22.881312875387614, lng: -43.09910870502036}} mapContainerClassName="map-container">
			<MarkerF position={{lat: -22.881312875387614, lng: -43.09910870502036}}/>
		</GoogleMap>
	)
}

export default GoogleMapContainer;