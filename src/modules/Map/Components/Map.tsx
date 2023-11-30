import ReactMapGl, {
  GeolocateControl,
  Layer,
  NavigationControl,
  Source,
} from "react-map-gl"
import { useEffect, useState } from "react"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
import {
  accessToken,
  mapStyleLight,
  style,
} from "src/modules/Map/const/mapParams"
import { Markers } from "src/modules/Map/Components/Markers"
import { useGetDirectionsQuery } from "src/modules/Map/api/getRoute"
import { geojson, lineStyle } from "src/modules/Map/const/directionsData"

export const Map = () => {
  const [start, setStart] = useState<number[]>([
    47.493322872597474, 42.98929214248301,
  ])
  const [end, setEnd] = useState<number[]>([42.987122, 47.505261])
  const { data: dataDirections, isLoading } = useGetDirectionsQuery({
    start,
    end,
  })
  const [route, setRoute] = useState<[]>([])
  const routeGeojson = geojson(route)
  const rootLineStyle = lineStyle(routeGeojson)
  const [viewport, setViewport] = useState({
    latitude: 43,
    longitude: 47.6,
    zoom: 9,
  })

  useEffect(() => {
    if (dataDirections) {
      setRoute(dataDirections.routes[0].geometry.coordinates)
    }
  }, [dataDirections])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const onViewportChange = (viewport) => {
    setViewport(viewport.viewport)
  }

  const handleClick = (e) => {
    const { lngLat } = e
    const endPoint = Object.keys(lngLat).map((item) => lngLat[item])
    console.log(endPoint)
    setEnd(endPoint)
  }

  return (
    <div className={"relative"}>
      <ReactMapGl
        {...viewport}
        onClick={handleClick}
        style={style}
        mapboxAccessToken={accessToken}
        mapStyle={mapStyleLight}
        onMove={onViewportChange}
      >
        <Markers />

        <Source id={"routeSource"} type={"geojson"} data={routeGeojson}>
          <Layer {...rootLineStyle} />
        </Source>

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          showAccuracyCircle={false}
          showUserLocation={true}
          trackUserLocation={true}
        />
        <NavigationControl showCompass showZoom />
      </ReactMapGl>
    </div>
  )
}
