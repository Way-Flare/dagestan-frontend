import { useGetMarkersQuery } from "@entities/map/api"
import { PlaceCard } from "@entities/placeCard/ui/place-card"
import { Layout } from "@shared/ui/Layout"

export const Places = () => {
  const { data: places } = useGetMarkersQuery()

  return (
    <Layout>
      <div className="mx-auto p-4 py-12 flex flex-wrap gap-6">
        {places?.map((place) => {
          return <PlaceCard key={place.id} name={place.name} />
        })}
      </div>
    </Layout>
  )
}
