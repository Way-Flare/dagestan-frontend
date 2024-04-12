import React, { FC } from "react"
import { Marker } from "react-map-gl"
import useSupercluster from "use-supercluster"
import { IMarkers, ViewportType } from "@shared/interface/IMarkers"
import { useGetMarkersQuery } from ".."
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@shared/shadcn/components/ui/hover-card"
import MapMarkerSVG from "@shared/img/map-marker.svg"

type Props = {
  mapRef: React.MutableRefObject<undefined>
  viewport: ViewportType
  setViewport: React.Dispatch<React.SetStateAction<ViewportType>>
  setSelectedMarker: React.Dispatch<React.SetStateAction<IMarkers | undefined>>
}

export const ClusterMarker: FC<Props> = ({
  mapRef,
  viewport,
  setViewport,
  setSelectedMarker,
}) => {
  const { data: places } = useGetMarkersQuery()

  const points = (places ?? []).map((place) => ({
    type: "Feature",
    properties: { placeId: place.id, cluster: false },
    description: place.description,
    geometry: {
      type: "Point",
      coordinates: [place.longitude, place.latitude],
    },
  }))

  const bounds = mapRef?.current
    ? // @ts-ignore
      mapRef.current.getMap().getBounds().toArray().flat()
    : null

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 12 },
  })

  return clusters.map((cluster) => {
    const [longitude, latitude] = cluster.geometry.coordinates
    const { cluster: isCluster, point_count: pointCount } = cluster.properties

    if (isCluster) {
      return (
        <Marker
          key={`cluster-${cluster.id}`}
          latitude={latitude}
          longitude={longitude}
        >
          <div
            className="cluster-marker"
            style={{
              width: `${20 + (pointCount / points.length) * 20}px`,
              height: `${20 + (pointCount / points.length) * 20}px`,
            }}
            onClick={() => {
              const expansionZoom = Math.min(
                supercluster.getClusterExpansionZoom(cluster.id),
                20,
              )

              setViewport({
                ...viewport,
                latitude,
                longitude,
                zoom: expansionZoom,
              })
            }}
          >
            {pointCount}
          </div>
        </Marker>
      )
    }

    return (
      <HoverCard key={`place-${cluster.properties.placeId}`}>
        <Marker
          key={`place-${cluster.properties.placeId}`}
          latitude={latitude}
          longitude={longitude}
          onClick={() => {
            const foundMarker = places?.find(
              (place) => place.id === cluster.properties.placeId,
            )
            setSelectedMarker(foundMarker)
          }}
        >
          <HoverCardTrigger>
            <img src={MapMarkerSVG} width={34} height={34} />
          </HoverCardTrigger>
        </Marker>
        <HoverCardContent>{cluster?.description}</HoverCardContent>
      </HoverCard>
    )
  })
}
