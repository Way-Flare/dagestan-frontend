import { useGetMarkersQuery } from "@entities/map/api"
import { RouteCard } from "@entities/routeCard/ui/route-card"
import { Layout } from "@shared/ui/Layout"
import "./routes.scss"

export const Routes = () => {
  const { data: routes } = useGetMarkersQuery()

  return (
    <Layout>
      <div className="mx-auto p-4 py-12 flex flex-wrap gap-6 overflow-block scrollbar-hidden">
        {routes?.map((route) => {
          return <RouteCard key={route.id} name={route.name} />
        })}
      </div>
    </Layout>
  )
}
