import { Marker } from "@urbica/react-map-gl"
import { EnvironmentFilled } from "@ant-design/icons"
import { FC } from "react"

interface Props {
  latitude: number
  longitude: number
  pointCount: number
}

export const ClusterMarker: FC<Props> = ({
  longitude,
  latitude,
  pointCount,
}) => {
  if (pointCount > 1) {
    return (
      <Marker longitude={longitude} latitude={latitude}>
        <button>
          <span className={"text-[1rem] font-bold"}>{pointCount}</span>
          <EnvironmentFilled className={"text-[1.5rem] col-white"} />
        </button>
      </Marker>
    )
  }

  return (
    <Marker longitude={longitude} latitude={latitude}>
      <button>
        <EnvironmentFilled className={"text-[1.5rem] col-white"} />
      </button>
    </Marker>
  )
}
