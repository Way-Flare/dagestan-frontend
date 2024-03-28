import { Popup } from "react-map-gl"
import { FC, useEffect, useState } from "react"
import { IMarkers } from "@shared/interface/IMarkers"
import { Button } from "@shared/ui"

export const MapPopup: FC<IMarkers> = ({
  typeId,
  longitude,
  latitude,
  description,
  title,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(true)

  useEffect(() => {
    setIsPopupVisible(true)
  }, [longitude, latitude, title, description])

  const closePopup = () => {
    setIsPopupVisible(false)
  }

  return isPopupVisible ? (
    <Popup
      key={typeId}
      longitude={longitude}
      latitude={latitude}
      onClose={closePopup}
    >
      <div className="col">
        <div>{title}</div>
        <div>{description}</div>
        <h1>фото</h1>
        <Button variant={"destructive"}>Провести маршрут</Button>
      </div>
    </Popup>
  ) : null
}
