/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react"
import { Marker } from "react-map-gl"
import { MarkerUI } from "./marker-ui"

import { IMarkers } from "@shared/interface/IMarkers"
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@shared/shadcn/components/ui/dialog"
import { MarkerDescriptionMobile } from "./marker-description-mobile"

type Props = {
  cluster: any
  latitude: any
  longitude: any
  setSelectedMarker: React.Dispatch<React.SetStateAction<IMarkers | undefined>>
  places: IMarkers[] | undefined
}

export const OneMarkerMobile: FC<Props> = ({
  cluster,
  latitude,
  longitude,
  setSelectedMarker,
  places,
}) => {
  const [openedDescription, setOpenedDescription] = useState(false)

  return (
    <Dialog
      key={`place-${cluster.properties.placeId}`}
      open={openedDescription}
    >
      <Marker
        key={`place-${cluster.properties.placeId}`}
        anchor="bottom"
        latitude={latitude}
        longitude={longitude}
        onClick={() => {
          const foundMarker = places?.find(
            (place) => place.id === cluster.properties.placeId,
          )
          setSelectedMarker(foundMarker)
        }}
      >
        <DialogTrigger onClick={() => setOpenedDescription(true)}>
          <MarkerUI place={cluster.place} />
        </DialogTrigger>
      </Marker>

      <DialogContent className={`left-[2dvw] bottom-[10dvh] w-[96dvw]`}>
        <MarkerDescriptionMobile
          place={cluster.place}
          setOpenedDescription={setOpenedDescription}
        />
      </DialogContent>
      <DialogOverlay onClick={() => setOpenedDescription(false)} />
    </Dialog>
  )
}
