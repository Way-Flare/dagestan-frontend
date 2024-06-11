/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@shared/shadcn/components/ui/hover-card"
import { FC, useState } from "react"
import { Marker } from "react-map-gl"
import { MarkerUI } from "./marker-ui"
import { MarkerDescriptionShort } from "./marker-description-short"
import { MarkerDescriptionFull } from "./marker-description-full"
import { IMarkers } from "@shared/interface/IMarkers"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@shared/shadcn/components/ui/dialog"

type Props = {
  cluster: any
  latitude: any
  longitude: any
  setSelectedMarker: React.Dispatch<React.SetStateAction<IMarkers | undefined>>
  places: IMarkers[] | undefined
}

export const OneMarker: FC<Props> = ({
  cluster,
  latitude,
  longitude,
  setSelectedMarker,
  places,
}) => {
  const [openedShortDescription, setOpenedShortDescription] = useState(false)

  return (
    <div onMouseLeave={() => setOpenedShortDescription(false)}>
      <Dialog key={`place-${cluster.properties.placeId}`}>
        {/* <Popover key={`place-${cluster.properties.placeId}`}> */}

        <HoverCard open={openedShortDescription}>
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
            {/* <PopoverTrigger> */}
            <DialogTrigger>
              <HoverCardTrigger
                onMouseEnter={() => setOpenedShortDescription(true)}
              >
                <MarkerUI name={cluster?.name} />
              </HoverCardTrigger>
            </DialogTrigger>
            {/* </PopoverTrigger> */}
          </Marker>
          <HoverCardContent className="p-0 rounded-xl w-[336px]" sideOffset={0}>
            <MarkerDescriptionShort
              setOpenedShortDescription={setOpenedShortDescription}
              name={cluster.name}
            />
          </HoverCardContent>

          {/* <PopoverContent className="h-[736px] w-[420px]" side="left"> */}
          <DialogContent className="left-[5dvw] top-[15dvh] max-h-[90dvh] h-[736px] w-[420px]">
            <MarkerDescriptionFull name={cluster.name} />
          </DialogContent>
          {/* </PopoverContent> */}
        </HoverCard>
        {/* </Popover> */}
      </Dialog>
    </div>
  )
}
