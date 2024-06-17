import { markerDescriptionIcons } from "@shared/icons/icons"
import { FC } from "react"
import likeIcon from "@shared/img/markerDescription/like_button.png"
import closeIcon from "@shared/img/markerDescription/close_button.png"
import { IMarkers } from "@shared/interface/IMarkers"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"

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

export const MarkerDescriptionShort: FC<Props> = ({
  setOpenedShortDescription,
  place,
}) => {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-end absolute gap-2 right-3 top-3">
        <img className="h-9 w-9" src={likeIcon} />
        <button onClick={() => setOpenedShortDescription(false)}>
          <img className="h-9 w-9" src={closeIcon} />
        </button>
      </div>
      <div style={{ position: "relative" }}>
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            cover: true,
            autoplay: true,

            pauseOnHover: false,
            resetProgress: false,
            height: "15rem",
          }}
          hasTrack={false}
        >
          <div>
            <SplideTrack>
              {(place?.images ?? []).map((image, index) => (
                <SplideSlide key={index} className="rounded-md">
                  <img
                    // className="h-[243px] w-[388px] object-cover object-center rounded-md bg-cover"
                    src={image.file}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__progress">
              <div className="splide__progress__bar" />
            </div>
            <div className="splide__arrows"></div>
          </div>
        </Splide>
      </div>
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
          <span className="text-[#617398]"> • {place.work_time}</span>
        </div>
        <div className="text-sm text-[#0E1117] leading-4 py-1">
          {place.short_description}
        </div>
      </div>
    </div>
  )
}
