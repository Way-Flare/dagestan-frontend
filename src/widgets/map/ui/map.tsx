import ReactMapGl, {
  GeolocateControl,
  Layer,
  NavigationControl,
  Source,
} from "react-map-gl"
import { useEffect, useRef, useState } from "react"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
import { accessToken, ClusterMarker, mapStyleLight, style } from "@entities/map"
import "./map.scss"
import { TestForm } from "./testForm"
import { IMarkers, ViewportType } from "@shared/interface/IMarkers"

const lineStyle = {
  id: "roadLayer",
  type: "line",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "blue",
    "line-width": 4,
    "line-opacity": 0.75,
  },
}

export const Map = () => {
  const [marker, setSelectedMarker] = useState<IMarkers | undefined>(undefined)
  const [newLngLat, setNewLngLat] = useState({ longitude: 0, latitude: 0 })

  const [viewport, setViewport] = useState<ViewportType>({
    latitude: 43,
    longitude: 47.6,
    width: "100vw",
    height: "100vh",
    zoom: 9,
    transitionDuration: "auto",
  })
  const mapRef = useRef()

  const onViewportChange = (viewport) => {
    setViewport(viewport.viewState)
  }

  const [coords, setCoords] = useState([])

  useEffect(() => {
    const getData = async () => {
      const geoJson = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/46.962594,42.386158;46.623471,42.628544?steps=true&geometries=geojson&overview=full&access_token=${accessToken}`,
      )
      const data = await geoJson.json()
      const coords = data.routes[0].geometry.coordinates
      setCoords(coords)
      console.log(data)
    }
    getData()
    return
  }, [])

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "feature",
        geometry: { type: "LineString", coordinates: coords },
      },
    ],
  }

  return (
    <div className={"relative"}>
      <TestForm marker={marker} newLngLat={newLngLat} />
      <ReactMapGl
        {...viewport}
        maxZoom={20}
        style={style}
        mapboxAccessToken={accessToken}
        mapStyle={mapStyleLight}
        onClick={(event) =>
          setNewLngLat({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
          })
        }
        onMove={onViewportChange}
        // @ts-ignore
        ref={mapRef}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          showUserLocation={true}
          trackUserLocation={true}
        />
        <NavigationControl showCompass showZoom />
        <ClusterMarker
          mapRef={mapRef}
          viewport={viewport}
          setViewport={setViewport}
          setSelectedMarker={setSelectedMarker}
        />

        <Source
          id="routeSource"
          type="geojson"
          // @ts-ignore
          data={geojson}
        >
          {
            // @ts-ignore
            <Layer {...lineStyle} />
          }
        </Source>
      </ReactMapGl>
    </div>
  )
}
