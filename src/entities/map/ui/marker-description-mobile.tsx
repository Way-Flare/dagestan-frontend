import { markerDescriptionIcons } from "@shared/icons/icons"
import { FC } from "react"
import randomPhoto from "@shared/img/markerDescription/random_photo.png"
import likeIcon from "@shared/img/markerDescription/like_button.png"
import closeIcon from "@shared/img/markerDescription/close_button.png"

type Props = {
  name: string
  setOpenedDescription: React.Dispatch<React.SetStateAction<boolean>>
}

export const MarkerDescriptionMobile: FC<Props> = ({
  setOpenedDescription,
  name,
}) => {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-end absolute gap-2 right-8 top-6">
        <img className="h-9 w-9" src={likeIcon} />
        <button onClick={() => setOpenedDescription(false)}>
          <img className="h-9 w-9" src={closeIcon} />
        </button>
      </div>
      <img
        className="h-[174px] w-full object-cover object-center rounded-xl bg-cover"
        src={randomPhoto}
      />
      <div className="py-2 px-3">
        <div className="flex justify-between items-center flex-nowrap">
          <div>
            <span className="text-lg font-semibold">{name}</span>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-4 w-4 mr-1" src={markerDescriptionIcons.star} />
            <div className="text-sm text-[#617398]">4.3</div>
          </div>
        </div>
        <div className="text-sm">
          <span className="text-[#019F3C]">Открыто</span>
          <span className="text-[#617398]"> • до 21:00</span>
        </div>
        <div className="text-sm text-[#0E1117] leading-4 py-1">
          Маршрут &quot;Дагестанский квест&quot;: Погрузитесь в магию Дагестана,
          начав магию Дагестана, начав магию Дагестана, начав магию
        </div>
      </div>
    </div>
  )
}
