import { markerDescriptionIcons } from "@shared/icons/icons"
import { FC } from "react"
import { Separator } from "@shared/shadcn/components/ui/separator"
import { DialogClose } from "@shared/shadcn/components/ui/dialog"
import heartIcon from "@shared/img/heart_big.svg"
import { IMarkers } from "@shared/interface/IMarkers"
import { useGetMarkerQuery } from "../api/map-markers-api"
import { navFilters } from "@widgets/navbar/const"
import { SplideSlider } from "@shared/ui/SplideSlider"
import { Link } from "react-router-dom"

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

export const MarkerDescriptionFull: FC<Props> = ({ place }) => {
  const { data: onePlace } = useGetMarkerQuery({ placeId: place.id })
  const namedTags = place.tags.map((tag) =>
    navFilters.find((filter) => filter.tag === tag.name),
  )

  return (
    <div className="flex flex-col overflow-scroll scrollbar-hidden relative">
      <div className="flex justify-between pb-2 sticky z-40 top-0 bg-white">
        <Link to={`/place/${place.id}`}>
          <span className="text-[#0B5D1E]">Перейти на страницу места</span>
        </Link>
        <DialogClose>
          <img src={markerDescriptionIcons.closeButton} />
        </DialogClose>
      </div>
      <SplideSlider height="243px" images={place.images ?? []} />
      {/* <img
        className="h-[243px] w-[388px] object-cover object-center rounded-md bg-cover"
        src={randomPhotoFull}
      /> */}
      <div className="py-2">
        <div className="flex gap-2 flex-wrap">
          {namedTags.map((namedTag) => (
            <div key={namedTag?.tag} className="flex items-center">
              <img className="h-[16px] w-[16px] mr-1" src={namedTag?.icon} />
              <span className="text-[#617398] text-sm">{namedTag?.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-start flex-nowrap">
          <div className="mr-2">
            <span className="text-lg font-semibold">{place.name}</span>
          </div>
          <div className="flex justify-center items-center w-14">
            <img className="h-4 w-4 mr-1" src={markerDescriptionIcons.star} />
            <div className="text-sm text-[#617398]">{place.rating}</div>
          </div>
        </div>
        <div className="text-sm">
          <span className="text-[#019F3C]">Открыто</span>
          <span className="text-[#617398]"> • {place.work_time}</span>
        </div>
        <div className="text-sm text-[#0E1117] leading-4 py-1">
          {onePlace?.description}
        </div>
        <div className="flex justify-between items-center py-2 gap-1">
          <button className="flex basis-2/3 justify-center items-center bg-[#0B5D1E] text-center text-[white] h-[52px] rounded-xl">
            Построить маршрут
          </button>
          <button>
            <div className="bg-[#0B5D1E] h-[52px] w-[52px] bg-opacity-10 rounded-xl flex items-center justify-center">
              <img className=" h-[24px] w-[24px] opacity-100" src={heartIcon} />
            </div>
          </button>
          <button>
            <div className="bg-[#0B5D1E] h-[52px] w-[52px] bg-opacity-10 rounded-xl flex items-center justify-center">
              <img
                className="h-[24px] w-[24px]"
                src={markerDescriptionIcons.shareButton}
              />
            </div>
          </button>
        </div>
        <div className="py-3">
          <Separator />
        </div>
        <div className="pb-3">
          <span className="text-lg font-bold">Контакты</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-[20px] h-[20px] mr-2"
            src={markerDescriptionIcons.call}
          />
          <span className="text-[#0B5D1E]">+7 (999) 999-00-00</span>
        </div>
      </div>
    </div>
  )
}
