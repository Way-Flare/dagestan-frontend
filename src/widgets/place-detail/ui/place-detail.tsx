import { Layout } from "@shared/ui/Layout"
import { useGetMarkerQuery } from "@entities/map/api/map-markers-api"
import { useParams } from "react-router-dom"
import { PlaceHeader } from "@entities/placeItems"
import { PlaceDescription } from "@entities/placeItems/ui/place-description"
import { PlaceContacts } from "@entities/placeItems/ui/place-contacts"
import { PlaceAddress } from "@entities/placeItems/ui/place-address"

export const PlaceDetail = () => {
  const { placeId } = useParams()
  const { data: place } = useGetMarkerQuery({ placeId: Number(placeId) })

  return (
    <Layout px="32" flex={true}>
      {place && (
        <div className="pt-12 flex flex-col overflow-block scrollbar-hidden w-[1156px]">
          <PlaceHeader place={place} />
          <PlaceDescription place={place} />
          <PlaceContacts place={place} />
          <PlaceAddress place={place} />
        </div>
      )}
    </Layout>
  )
}
