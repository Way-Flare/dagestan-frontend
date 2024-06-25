import { placeItemsIcons } from "@shared/icons/icons"
import { IMarkers } from "@shared/interface/IMarkers"
import { FC } from "react"

type Props = {
  place: IMarkers | undefined
}

export const PlaceContacts: FC<Props> = () => {
  return (
    <div className="w-full px-6 py-7 mt-6 flex flex-col gap-2 bg-white rounded-xl">
      <div className="text-lg font-semibold">Контакты</div>
      <div className="flex gap-3 text-[#617398]">
        <img src={placeItemsIcons.call} />
        <div>Нет информации</div>
      </div>
      <div className="flex gap-3 text-[#617398]">
        <img src={placeItemsIcons.sms} />
        <div>Нет информации</div>
      </div>
      <div className="flex gap-3 text-[#617398]">
        <img src={placeItemsIcons.global} />
        <div>Нет информации</div>
      </div>
    </div>
  )
}
