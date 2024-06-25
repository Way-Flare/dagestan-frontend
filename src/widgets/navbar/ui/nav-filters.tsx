import { Button } from "@shared/ui"
import { navFilters } from "../const"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import { addTag, removeTag, selectTags } from "@shared/redux"
import cancelButton from "@shared/img/cancel.svg"

export const NavFilters = () => {
  const dispath = useAppDispatch()
  const filters = useAppSelector(selectTags)

  const handleAddClick = (tag: string) => {
    dispath(addTag(tag))
  }

  const handleRemoveClick = (tag: string) => {
    dispath(removeTag(tag))
  }

  return (
    <div className="flex h-[32px] items-center justify-center gap-2 flex-2 overflow-x-auto scrollbar-hidden ml-2">
      {navFilters.map((item, index) => {
        const isActive = filters.includes(item.tag)
        return (
          <a key={index} href={item.href}>
            <Button
              className={`${isActive ? "bg-[#084115]" : "bg-white"} h-[30px] w-auto rounded-md shadow-[0_1px_2px_0_#00103D14] flex justify-center items-center"`}
              onClick={() => {
                isActive
                  ? handleRemoveClick(item.tag)
                  : handleAddClick(item.tag)
              }}
              variant="ghost"
              size="sm"
            >
              <img
                className="h-[16px] w-[16px]"
                src={isActive ? item.iconActive : item.icon}
              />
              <div className={`text-base px-1 ${isActive ? "text-white" : ""}`}>
                {item.label}
              </div>
              {isActive ? <img src={cancelButton} /> : null}
            </Button>
          </a>
        )
      })}{" "}
    </div>
  )
}
