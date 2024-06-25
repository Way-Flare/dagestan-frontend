import { markerDescriptionIcons } from "@shared/icons/icons"
import { FC, useEffect, useRef, useState } from "react"
import heartIcon from "@shared/img/heart_big.svg"
import { IMarkers } from "@shared/interface/IMarkers"
import { navFilters } from "@widgets/navbar/const"
import { SplideSlider } from "@shared/ui/SplideSlider"
import randomImage from "@shared/img/random_photo_card.png"

type Props = {
  place: IMarkers | undefined
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

export const PlaceHeader: FC<Props> = ({ place }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [sliderHeight, setSliderHeight] = useState(0)
  const namedTags = place?.tags.map((tag) =>
    navFilters.find((filter) => filter.tag === tag.name),
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSliderHeight(ref.current?.offsetHeight ?? 0)
  })

  return (
    <div className="flex justify-center gap-6">
      <div className="w-[448px] bg-white rounded-2xl" ref={ref}>
        <div className="flex flex-col">
          <img className="h-[238px] rounded-t-lg mb-3" src={randomImage} />
          <div className="px-6">
            <div className="flex justify-between items-center flex-nowrap">
              <div className="mr-2">
                <span className="text-lg font-semibold">{place?.name}</span>
              </div>
              <div className="flex justify-center items-center w-14">
                <img
                  className="h-4 w-4 mr-1"
                  src={markerDescriptionIcons.star}
                />
                <div className="text-sm text-[#617398]">{place?.rating}</div>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {(namedTags ?? []).map((namedTag) => (
                <div key={namedTag?.tag} className="flex items-center">
                  <img
                    className="h-[16px] w-[16px] mr-1"
                    src={namedTag?.icon}
                  />
                  <span className="text-[#617398] text-sm">
                    {namedTag?.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="text-[#019F3C]">Открыто</span>
              <span className="text-[#617398]"> • {place?.work_time}</span>
            </div>
          </div>
          <div className="px-6">
            <div className="flex justify-between items-center py-4 gap-1">
              <button className="flex basis-2/3 justify-center items-center bg-[#0B5D1E] text-center text-[white] h-[52px] rounded-xl">
                Построить маршрут
              </button>
              <button>
                <div className="bg-[#0B5D1E] h-[52px] w-[52px] bg-opacity-10 rounded-xl flex items-center justify-center">
                  <img
                    className=" h-[24px] w-[24px] opacity-100"
                    src={heartIcon}
                  />
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
          </div>
        </div>
      </div>
      {ref?.current && (
        <div className="relative w-[684px] rounded-2xl">
          <SplideSlider
            height={`${sliderHeight}px`}
            images={place?.images ?? []}
          >
            <button className="absolute bg-white right-[16px] top-[16px] h-[36px] w-[164px] rounded-xl z-10 text-sm">
              Смотреть все фото
            </button>
          </SplideSlider>
        </div>
      )}
    </div>
  )
}
