import { markerIcons } from "@shared/icons"
import { FC } from "react"
import heartIcon from "../img/heart.png"
import { IMarkers } from "@shared/interface/IMarkers"

type Props = {
  place: IMarkers
}

export const MarkerUI: FC<Props> = ({ place }) => {
  return (
    <>
      {" "}
      <div className="marker1">
        <div className="bg-[#3C7D4B] h-[34px] w-[30px] rounded-lg mr-2 flex justify-center items-center">
          <img className="h-[16px] w-[16px]" src={markerIcons.courthouse} />
        </div>
        <div className="flex flex-col items-start gap-0">
          <div className="flex justify-between items-center h-[16px]">
            <div className="text-sm font-semibold ">{place.name}</div>
            <img className="h-[12px] w-[12px] ml-1" src={heartIcon} />
          </div>
          <div className="text-xs text-[#617398] font-normal">
            {place.work_time}
          </div>
        </div>
      </div>
      <div className="marker2"></div>
    </>
  )
}
