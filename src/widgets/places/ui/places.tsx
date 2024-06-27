import { useGetMarkersQuery } from "@entities/map/api"
import { PlaceCard } from "@entities/placeCard/ui/place-card"
import { Layout } from "@shared/ui/Layout"
import "./places.scss"
import { useFilterPlaces } from "@shared/hooks/use-filter-tags"

export const Places = () => {
  const { data: places } = useGetMarkersQuery()
  const filteredPlaces = useFilterPlaces(places ?? [])

  return (
    <Layout>
      <div className="p-4 py-12 flex flex-wrap gap-5 overflow-block scrollbar-hidden ">
        {filteredPlaces?.map((place) => {
          return <PlaceCard key={place.id} place={place} />
        })}
      </div>
    </Layout>
  )
}
