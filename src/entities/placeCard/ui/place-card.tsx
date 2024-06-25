import { FC } from "react"
import { markerDescriptionIcons } from "@shared/icons/icons"
import randomPhoto from "@shared/img/random_photo_card.png"
import likeIcon from "@shared/img/markerDescription/like_button.svg"
import { IMarkers } from "@shared/interface/IMarkers"

type Props = {
  place: IMarkers
}

export const PlaceCard: FC<Props> = ({ place }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden md:basis-[23%] basis-[100%] relative">
      <div className="flex justify-center items-center absolute gap-2 right-3 top-3 bg-black bg-opacity-50 rounded-xl h-9 w-9">
        <img className="h-4 w-4" src={likeIcon} />
      </div>
      <img
        className="h-[174px] w-full object-cover object-center rounded-xl bg-cover"
        src={randomPhoto}
      />
      <div className="py-2 px-3">
        <div className="flex justify-between items-center flex-nowrap">
          <div>
            <span className="text-lg font-semibold">{place.name}</span>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-4 w-4 mr-1" src={markerDescriptionIcons.star} />
            <div className="text-sm text-[#617398]">{place.rating}</div>
          </div>
        </div>
        <div className="text-sm">
          <span className="text-[#019F3C]">Открыто</span>
          <span className="text-[#617398]"> • до {place.work_time}</span>
        </div>
      </div>
    </div>
  )
}
