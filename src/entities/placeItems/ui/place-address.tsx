import { placeItemsIcons } from "@shared/icons/icons"
import { IMarkers, ViewportType } from "@shared/interface/IMarkers"
import { FC, useState } from "react"
import ReactMapGl, { Marker } from "react-map-gl"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
import { accessToken, mapStyleLight } from "@entities/map"
import "./map.scss"
import { MarkerUI } from "@entities/map/ui/marker-ui"
import { Button } from "@shared/ui"

type Props = {
  place: IMarkers
}

export const PlaceAddress: FC<Props> = ({ place }) => {
  const [viewport, setViewport] = useState<ViewportType>({
    latitude: place?.latitude,
    longitude: place?.longitude,
    width: "100%",
    height: "433px",
    zoom: 13,
    transitionDuration: "auto",
  })

  const onViewportChange = (viewport) => {
    setViewport(viewport.viewState)
  }

  return (
    <div className="w-full px-6 py-7 mt-6 flex flex-col gap-3 bg-white rounded-xl">
      <div className="text-lg font-semibold">Адрес</div>
      <div className="flex gap-3 text-[#0B5D1E]">
        <img src={placeItemsIcons.location} />
        <div>Нет информации</div>
      </div>
      <div className="flex gap-3 text-[#0B5D1E]">
        <img src={placeItemsIcons.coordinates} />
        <div>
          {place.latitude}, {place.longitude}
        </div>
      </div>
      <div>
        <ReactMapGl
          {...viewport}
          maxZoom={20}
          antialias={true}
          style={{
            width: "100%",
            height: "433px",
            overflow: "hidden",
          }}
          mapboxAccessToken={accessToken}
          mapStyle={mapStyleLight}
          onMove={onViewportChange}
        >
          <Marker
            anchor="bottom"
            latitude={place?.latitude ?? 0}
            longitude={place?.longitude ?? 0}
          >
            {place && <MarkerUI place={place} />}
          </Marker>
        </ReactMapGl>
      </div>
      <Button
        variant="destructive"
        className="w-[207px] bg-[#0B5D1E1A] bg-opacity-10 text-[#0B5D1E] font-semibold"
      >
        Посмотреть на карте
      </Button>
    </div>
  )
}
