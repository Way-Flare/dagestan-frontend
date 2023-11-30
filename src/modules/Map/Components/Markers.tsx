import { Marker } from "react-map-gl"
import { EnvironmentFilled } from "@ant-design/icons"
import { useGetMarkersQuery } from "src/modules/Map/api/mapMarkersApi"

export const Markers = () => {
  const { data: dataMarkers } = useGetMarkersQuery(null)

  return dataMarkers?.map(({ typeId, latitude, longitude }) => (
    <Marker key={typeId} latitude={latitude} longitude={longitude}>
      <button>
        <EnvironmentFilled className={"text-[1.5rem] col-white"} />
      </button>
    </Marker>
  ))
}
