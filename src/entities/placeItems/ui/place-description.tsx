import { IMarkers } from "@shared/interface/IMarkers"
import { FC } from "react"

type Props = {
  place: IMarkers | undefined
}

export const PlaceDescription: FC<Props> = ({ place }) => {
  return (
    <div className="px-6 py-7 mt-6 flex flex-col gap-2 bg-white rounded-xl">
      <div className="text-lg font-semibold">Описание места</div>
      <div>{place?.description}</div>
    </div>
  )
}
