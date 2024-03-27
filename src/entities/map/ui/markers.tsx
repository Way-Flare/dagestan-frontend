import { Marker } from "react-map-gl"
import { useEffect, useState } from "react"
import { MapPopup } from "./map-popup"
import { IMarkers } from "@shared/interface/IMarkers"
import { useGetMarkersQuery } from "../api"

export const Markers = () => {
  const { data: dataMarkers } = useGetMarkersQuery(null)
  const [selectedMarker, setSelectedMarker] = useState<IMarkers | null>()
  const [timer, setTimer] = useState<number | NodeJS.Timeout | null>(null)

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
