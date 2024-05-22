import { FC } from "react"
import { markerDescriptionIcons } from "@shared/icons/icons"
import randomPhoto from "@shared/img/random_photo_card.png"
import likeIcon from "@shared/img/markerDescription/like_button.png"

type Props = {
  name: string
}

export const RouteCard: FC<Props> = () => {
  return (
    <div className="overflow-hidden md:basis-[23%] relative">
      <div className="flex justify-end absolute gap-2 right-3 top-3">
        <img className="h-9 w-9" src={likeIcon} />
      </div>
      <img
        className="h-[174px] w-full object-cover object-center rounded-xl bg-cover"
        src={randomPhoto}
      />
      <div className="py-2 px-3">
        <div className="flex justify-between items-center flex-nowrap">
          <div>
            <span className="text-lg font-semibold">Дагестан – Москва</span>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-4 w-4 mr-1" src={markerDescriptionIcons.star} />
            <div className="text-sm text-[#617398]">4.3</div>
          </div>
        </div>
        <div className="text-sm">
          <span className="text-[#617398]">2,732 км</span>
          <span className="text-[#617398]"> • 3д12ч</span>
        </div>
      </div>
    </div>
  )
}
