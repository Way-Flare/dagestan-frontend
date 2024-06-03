import { useGetMarkersQuery } from "@entities/map/api"
import { RouteCard } from "@entities/routeCard/ui/route-card"
import { Layout } from "@shared/ui/Layout"

export const Routes = () => {
  const { data: routes } = useGetMarkersQuery()

  return (
    <Layout>
      <div className="mx-auto p-4 py-12 flex flex-wrap gap-6">
        {routes?.map((route) => {
          return <RouteCard key={route.id} name={route.name} />
        })}
      </div>
    </Layout>
  )
}
