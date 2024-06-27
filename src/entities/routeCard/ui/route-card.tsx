import { FC } from "react"
import { markerDescriptionIcons } from "@shared/icons/icons"
import likeIcon from "@shared/img/markerDescription/like_button.svg"
import { IRoutes } from "@shared/interface/IMarkers"
import "./route-card.scss"
import { SplideSlider } from "@shared/ui/SplideSlider"

type Props = {
  route: IRoutes
}

export const RouteCard: FC<Props> = ({ route }) => {
  return (
    <div className="bg-white rounded-2xl  overflow-hidden md:basis-[23%] basis-[100%] relative cad">
      <div className="flex justify-center items-center absolute gap-2 right-3 top-3 bg-black bg-opacity-50 rounded-xl h-9 w-9">
        <img className="h-3 w-3" src={likeIcon} />
      </div>
      <SplideSlider
        height="174px"
        images={route.images ?? []}
        withAutoPlay={false}
      />
      <div className="py-2 px-3">
        <div className="flex justify-between items-center flex-nowrap">
          <div>
            <span className="text-lg font-semibold">{route.title}</span>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-4 w-4 mr-1" src={markerDescriptionIcons.star} />
            <div className="text-sm text-[#617398]">{route.rating}</div>
          </div>
        </div>
        <div className="text-sm">
          <span className="text-[#617398]">{route.distance} км</span>
          <span className="text-[#617398]"> • {route.travel_time}</span>
        </div>
      </div>
    </div>
  )
}
