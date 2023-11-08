import { Marker } from "@urbica/react-map-gl"
import { EnvironmentFilled } from "@ant-design/icons"

interface Props {
  latitude: number
  longitude: number
}

export const ClusterMarker = ({ longitude, latitude }: Props) => (
  <Marker longitude={longitude} latitude={latitude}>
    <button>
      <EnvironmentFilled className={"text-[1.5rem] col-white"} />
    </button>
  </Marker>
)
