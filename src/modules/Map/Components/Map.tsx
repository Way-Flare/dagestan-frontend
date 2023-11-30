import ReactMapGl, {
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  Source,
} from "react-map-gl"
import { useEffect, useRef, useState } from "react"
import { useGetMarkersQuery } from "src/modules/Map/api/mapMarkersApi"
import { EnvironmentFilled } from "@ant-design/icons"
import axios from "axios"
import { accessToken, mapStyle, style } from "src/modules/Map/const/mapParams"

export const Map = () => {
  const { data: dataMarkers } = useGetMarkersQuery(null)
  const [start, setStart] = useState<number[]>([42.9834324, 47.505629])
  const [end, setEnd] = useState<number[]>([42.987122, 47.505261])
  const [route, setRoute] = useState<[]>([])
  const [viewport, setViewport] = useState({
    latitude: 43,
    longitude: 47.6,
    zoom: 9,
  })
  const geolocateControlRef = useRef()

  async function getRoute() {
    try {
      const res = await axios.get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${
          start[1]
        };${end[0]},${end[1]}?geometries=geojson&access_token=${
          import.meta.env.VITE_MAP_PUBLIC_TOKEN
        }`,
      )

      const data = await res.data.routes[0]
      const route = data.geometry.coordinates
      setRoute(route)
      console.log(route)
    } catch (e) {
      console.log("Error mapbox", e)
    }
  }

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { dataMarkers },
        geometry: {
          type: "LineString",
          coordinates: [...route],
        },
      },
    ],
  }

  const lineStyle = {
    id: "roadLayer",
    type: "line",
    source: { type: "geojson", data: geojson },
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#3887be",
      "line-width": 5,
      "line-opacity": 0.75,
    },
  }

  const endPoint = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { dataMarkers },
        geometry: {
          type: "Point",
          coordinates: [...end],
        },
      },
    ],
  }

  const layerEndpoint = {
    id: "end",
    type: "circle",
    source: { type: "geojson", data: end },
    paint: {
      "circle-radius": 10,
      "circle-color": "#3887be",
    },
  }

  const onViewportChange = (viewport) => {
    setViewport(viewport.viewport)
  }

  useEffect(() => {
    getRoute()
  })

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
        mapStyle={mapStyle}
        onMove={onViewportChange}
      >
        {dataMarkers?.map(({ typeId, latitude, longitude }) => (
          <Marker
            key={typeId}
            latitude={latitude}
            longitude={longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <button>
              <EnvironmentFilled className={"text-[1.5rem] col-white"} />
            </button>
          </Marker>
        ))}

        {/*<Cluster*/}
        {/*  radius={100}*/}
        {/*  extent={512}*/}
        {/*  nodeSize={64}*/}
        {/*  component={ClusterMarker}*/}
        {/*></Cluster>*/}

        <Source id={"routeSource"} type={"geojson"} data={geojson}>
          <Layer {...lineStyle} />
        </Source>
        <Source id={"endSource"} type={"geojson"} data={endPoint}>
          <Layer {...layerEndpoint} />
        </Source>

        <GeolocateControl
          showAccuracyCircle={false}
          onGeolocate={(e) => setStart([e.route.latitude, e.route.longitude])}
          ref={geolocateControlRef}
          trackUserLocation={true}
        />
        <NavigationControl showCompass showZoom />
      </ReactMapGl>
    </div>
  )
}
