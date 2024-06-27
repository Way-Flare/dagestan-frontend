import { markerIcons } from "@shared/icons"
import { FC, useMemo } from "react"
import heartIcon from "../img/heart.svg"
import { IMarkers } from "@shared/interface/IMarkers"

type Props = {
  place: IMarkers
}

export const MarkerUI: FC<Props> = ({ place }) => {
  const markerIcon = useMemo(() => {
    return place.tags[0]?.name in markerIcons
      ? markerIcons[`${place.tags[0]?.name}`]
      : markerIcons.landmark
  }, [place.tags])
  return (
    <>
      {" "}
      <div className="marker1">
        <div className="bg-[#3C7D4B] h-[34px] w-[30px] rounded-lg mr-2 flex justify-center items-center">
          <img className="h-[16px] w-[16px]" src={markerIcon} />
        </div>
        <div className="flex flex-col items-start gap-0">
          <div className="flex justify-between items-center h-[16px]">
            <div className="text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-[190px]">
              {place.name}
            </div>
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
