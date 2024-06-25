import { markerDescriptionIcons } from "@shared/icons/icons"
import { FC } from "react"
import likeIcon from "@shared/img/markerDescription/like_button.svg"
import { IMarkers } from "@shared/interface/IMarkers"
import { SplideSlider } from "@shared/ui/SplideSlider"

type Props = {
  place: IMarkers
  setOpenedShortDescription: React.Dispatch<React.SetStateAction<boolean>>
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

export const MarkerDescriptionShort: FC<Props> = ({ place }) => {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center absolute gap-2 right-3 top-3 h-9 w-9 bg-black bg-opacity-50 rounded-xl">
        <img className="h-4 w-4" src={likeIcon} />
      </div>
      <SplideSlider height="174px" images={place?.images ?? []} />
      <div className="py-2 px-3">
        <div className="flex justify-between items-center flex-nowrap gap-2">
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
          <span className="text-[#617398]"> • {place.work_time}</span>
        </div>
        <div className="text-sm text-[#0E1117] leading-4 py-1">
          {place.short_description}
        </div>
      </div>
    </div>
  )
}
