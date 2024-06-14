import { Button } from "@shared/ui"
import { navFilters } from "../const"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import { addTag, removeTag, selectTags } from "@shared/redux"

export const NavFilters = () => {
  const dispath = useAppDispatch()
  const filters = useAppSelector(selectTags)

  const handleAddClick = (tag: string) => {
    dispath(addTag(tag))
  }

  const handleRemoveClick = (tag: string) => {
    dispath(removeTag(tag))
  }

  return navFilters.map((item, index) => {
    const isActive = filters.includes(item.tag)
    return (
      <a key={index} href={item.href}>
        <Button
          className={`${isActive ? "bg-[#cae4ff]" : "bg-white"} h-[30px] w-auto rounded-md shadow-[0_1px_2px_0_#00103D14] flex justify-center items-center"`}
          onClick={() => {
            isActive ? handleRemoveClick(item.tag) : handleAddClick(item.tag)
          }}
          variant="ghost"
          size="sm"
        >
          <img className="h-[16px] w-[16px]" src={item.icon} />
          <div className="text-base px-1">{item.label}</div>
        </Button>
      </a>
    )
  })
}
