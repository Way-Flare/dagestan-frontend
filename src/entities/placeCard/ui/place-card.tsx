import { FC } from "react"
import { markerDescriptionIcons } from "@shared/icons/icons"
import likeIcon from "@shared/img/markerDescription/like_button.svg"
import { IMarkers } from "@shared/interface/IMarkers"
import "./place-card.scss"
import { SplideSlider } from "@shared/ui/SplideSlider"

type Props = {
  place: IMarkers
}

// const imagesMock = [
//   {
//     name: "1",
//     file: "https://www.russiadiscovery.ru/storage/orig/posts/1038/Kavkazskie_gory.jpg",
//   },
//   {
//     name: "2",
//     file: "https://www.russiadiscovery.ru/storage/orig/posts/1038/Altaiskie_gory.jpg",
//   },
//   {
//     name: "3",
//     file: "https://www.russiadiscovery.ru/storage/orig/posts/1038/Uralskie_gory.jpg",
//   },
// ]

export const PlaceCard: FC<Props> = ({ place }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden md:w-[330px] relative card">
      <div className="flex justify-center items-center absolute gap-2 right-3 top-3 bg-black bg-opacity-50 rounded-xl h-9 w-9">
        <img className="h-3 w-3" src={likeIcon} />
      </div>
      <SplideSlider
        height="174px"
        images={place.images ?? []}
        withAutoPlay={false}
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
