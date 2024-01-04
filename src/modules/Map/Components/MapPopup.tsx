import { Popup } from "react-map-gl"
import { FC, useEffect, useState } from "react"
import { IMarkers } from "src/shared/interface/IMarkers"
import { Button, Image, Typography } from "antd"

const { Title, Text } = Typography

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
        <Title level={4}>{title}</Title>
        <Text type={"secondary"}>{description}</Text>
        <Image
          width={"100%"}
          height={80}
          src={
            "https://avatars.mds.yandex.net/i?id=22c4a90bbb639b93ec737882ec895128445551d0-9181231-images-thumbs&n=13"
          }
        />
        <Button block type={"primary"}>
          Провести маршрут
        </Button>
      </div>
    </Popup>
  ) : null
}
