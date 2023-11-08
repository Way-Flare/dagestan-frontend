import MapGL, { Marker } from "@urbica/react-map-gl"
import { useState } from "react"
import Cluster from "@urbica/react-map-gl-cluster"
import "mapbox-gl/dist/mapbox-gl.css"
import { useGetMarkersQuery } from "src/modules/Map/api/mapMarkersApi"
import { EnvironmentFilled } from "@ant-design/icons"
import { ClusterMarker } from "src/modules/Map/Components/Cluster"

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 43,
    longitude: 47.6,
    zoom: 9,
  })
  const { data: dataMarkers } = useGetMarkersQuery(null)

  const onViewportChange = (viewport) => setViewport(viewport)

  return (
    <MapGL
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      {...viewport}
      accessToken={import.meta.env.VITE_MAP_PUBLIC_TOKEN}
      mapStyle={"mapbox://styles/mapbox/streets-v9"}
      onViewportChange={onViewportChange}
    >
      <Cluster
        radius={100}
        extent={512}
        nodeSize={64}
        component={ClusterMarker}
      >
        {dataMarkers?.map(({ id, latitude, longitude }) => (
          <Marker key={id} latitude={latitude} longitude={longitude}>
            <button>
              <EnvironmentFilled className={"text-[1.5rem] col-white"} />
            </button>
          </Marker>
        ))}
      </Cluster>
    </MapGL>
  )
}
