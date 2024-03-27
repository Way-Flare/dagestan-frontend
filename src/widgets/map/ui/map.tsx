import ReactMapGl, { GeolocateControl, NavigationControl } from "react-map-gl"
import { useEffect, useState } from "react"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
import { accessToken, mapStyleLight, Markers, style } from "@entities/map"

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 43,
    longitude: 47.6,
    zoom: 9,
  })

  const onViewportChange = (viewport) => {
    setViewport(viewport.viewport)
  }

  return (
    <div className={"relative"}>
      <ReactMapGl
        {...viewport}
        style={style}
        mapboxAccessToken={accessToken}
        mapStyle={mapStyleLight}
        onMove={onViewportChange}
      >
        <Markers />

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          showAccuracyCircle={false}
          showUserLocation={true}
          trackUserLocation={true}
        />
        <NavigationControl showCompass showZoom />

        <Markers />
      </ReactMapGl>
    </div>
  )
}
