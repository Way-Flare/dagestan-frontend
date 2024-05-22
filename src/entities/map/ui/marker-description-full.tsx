import { markerDescriptionIcons } from "@shared/icons/icons"
import { FC } from "react"
import randomPhotoFull from "@shared/img/markerDescription/random_photo_full.png"
import { Separator } from "@shared/shadcn/components/ui/separator"
import { PopoverClose } from "@shared/shadcn/components/ui/popover"

type Props = {
  name: string
}

export const MarkerDescriptionFull: FC<Props> = ({ name }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex justify-between pb-2">
        <a href="">
          <span className="text-[#0B5D1E]">Перейти на страницу места</span>
        </a>
        <PopoverClose>
          <img src={markerDescriptionIcons.closeButtonGreen} />
        </PopoverClose>
      </div>
      <img
        className="h-[243px] w-[388px] object-cover object-center rounded-md bg-cover"
        src={randomPhotoFull}
      />
      <div className="py-2">
        <div className="flex items-center">
          <img
            className="h-[16px] w-[16px] mr-1"
            src={markerDescriptionIcons.courthouseGrey}
          />
          <span className="text-[#617398] text-sm">Достопримечательности</span>
        </div>
        <div className="flex justify-between items-start flex-nowrap">
          <div className="mr-2">
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
          Смотровая площадка Тарки-тау расположена на высоких склонах горного
          массива, предлагая захватывающий вид на окружающие вершины и долины.
          Посетители могут насладиться величественной красотой природы,
          вдохновляющей покой и умиротворение. Идеальное место для фотографий и
          душевного отдыха в объятиях горных вершин.
        </div>
        <div className="flex justify-between items-center py-2 gap-2">
          <button className="flex basis-[86%] justify-center items-center bg-[#0B5D1E] text-center text-[white] h-[52px] rounded-xl">
            <img
              className="h-[24px] w-[24px] mr-2"
              src={markerDescriptionIcons.whiteHeart}
            />
            В избранное
          </button>
          <button>
            <img
              className="h-[52px] w-[52px]"
              src={markerDescriptionIcons.shareButton}
            />
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
