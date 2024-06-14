import { useAppSelector } from "@app/store/hooks"
import { IMarkers } from "@shared/interface/IMarkers"
import { selectTags } from "@shared/redux"

export const useFilterPlaces = (places: IMarkers[]) => {
  const filters = useAppSelector(selectTags)

  return filters.length > 0
    ? places.filter((place) =>
        place.tags.some((tag) => filters.includes(tag.name)),
      )
    : places
}
