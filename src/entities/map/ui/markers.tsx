import { Marker } from "react-map-gl"
import { useState } from "react"
import { MapPopup } from "./map-popup"
import { IMarkers } from "@shared/interface/IMarkers"
import { useGetMarkersQuery } from "../api"

export const Markers = () => {
  const { data: dataMarkers } = useGetMarkersQuery()
  const [selectedMarker, setSelectedMarker] = useState<IMarkers | null>()

  const handleClick = (marker: IMarkers) => {
    setSelectedMarker(marker)
  }

  return (
    <>
      {dataMarkers?.map((marker) => (
        <Marker
          key={marker.typeId}
          latitude={marker.latitude}
          longitude={marker.longitude}
          offset={[25, 25]}
          onClick={() => handleClick(marker)}
        />
      ))}

      {selectedMarker && (
        <MapPopup
          id={selectedMarker.id}
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
