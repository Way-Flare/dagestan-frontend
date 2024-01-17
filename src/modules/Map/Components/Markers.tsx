import { Marker } from "react-map-gl"
import { EnvironmentFilled } from "@ant-design/icons"
import { useGetMarkersQuery } from "src/modules/Map/api/mapMarkersApi"
import { useEffect, useState } from "react"
import { MapPopup } from "src/modules/Map/Components/MapPopup"
import { IMarkers } from "src/shared/interface/IMarkers"

export const Markers = () => {
  const { data: dataMarkers } = useGetMarkersQuery(null)
  const [selectedMarker, setSelectedMarker] = useState<IMarkers>()
  const [timer, setTimer] = useState<number | null>(null)

  const onMouseEnter = (marker: IMarkers) => {
    setTimer(
      setTimeout(() => {
        setSelectedMarker(marker)
      }, 1000),
    )
  }

  const onMouseLeave = () => {
    if (timer) {
      clearTimeout(timer)
      setTimer(null)
    }
  }

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedMarker(null)
      }
    }
    window.addEventListener("keydown", listener)
  }, [])

  return (
    <>
      {dataMarkers?.map((marker) => (
        <Marker
          key={marker.typeId}
          latitude={marker.latitude}
          longitude={marker.longitude}
        >
          <button
            onMouseEnter={() => onMouseEnter(marker)}
            onMouseLeave={onMouseLeave}
          >
            Точка
          </button>
        </Marker>
      ))}

      {selectedMarker && (
        <MapPopup
          typeId={selectedMarker.typeId}
          longitude={selectedMarker.longitude}
          latitude={selectedMarker.latitude}
          title={selectedMarker.title}
          description={selectedMarker.description}
        />
      )}
    </>
  )
}
