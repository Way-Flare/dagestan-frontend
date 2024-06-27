import { RouteCard } from "@entities/routeCard/ui/route-card"
import { Layout } from "@shared/ui/Layout"
import "./routes.scss"
import { useGetRoutesQuery } from "@entities/map/api/map-routes-api"

export const Routes = () => {
  const { data: routes } = useGetRoutesQuery()

  return (
    <Layout>
      <div className="p-4 py-12 flex flex-wrap gap-5 overflow-block scrollbar-hidden">
        {routes?.map((route) => {
          return <RouteCard key={route.id} route={route} />
        })}
      </div>
    </Layout>
  )
}
