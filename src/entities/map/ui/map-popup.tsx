import { Popup } from "react-map-gl"
import { FC, useEffect, useState } from "react"
import { IMarkers } from "@shared/interface/IMarkers"
import { Button } from "@shared/ui"

export const MapPopup: FC<IMarkers> = ({
  longitude,
  latitude,
  description,
  name,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(true)

  useEffect(() => {
    setIsPopupVisible(true)
  }, [longitude, latitude, name, description])

  const closePopup = () => {
    setIsPopupVisible(false)
  }

  return isPopupVisible ? (
    <Popup
      key={"1"}
      longitude={longitude}
      latitude={latitude}
      onClose={closePopup}
    >
      <div className="col">
        <div>{name}</div>
        <div>{description}</div>
        <h1>фото</h1>
        <Button variant={"destructive"}>Провести маршрут</Button>
      </div>
    </Popup>
  ) : null
}
