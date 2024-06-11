import React, { FC } from "react"
import { Marker } from "react-map-gl"
import useSupercluster from "use-supercluster"
import { IMarkers, ViewportType } from "@shared/interface/IMarkers"
import { useGetMarkersQuery } from ".."

import "./cluster-marker.scss"
import { OneMarker } from "./one-marker"
import { OneMarkerMobile } from "./one-marker-mobile"
import { useAppSelector } from "@app/store/hooks"

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
  const isDesktop = useAppSelector((state) => state.settings.isDesktop)

  const points = (places ?? []).map((place) => ({
    type: "Feature",
    properties: { placeId: place.id, cluster: false },
    description: place.description,
    name: place.name,
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
          anchor="bottom"
          latitude={latitude}
          longitude={longitude}
        >
          <div
            className="marker1 flex justify-center items-center font-semibold text-base h-[60px]"
            style={{
              width: `${25 + (pointCount / points.length) * 20}px`,
              height: `${25 + (pointCount / points.length) * 20}px`,
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
          <div className="marker2"></div>
        </Marker>
      )
    }

    return isDesktop ? (
      <OneMarker
        key={`place-${cluster.properties.placeId}`}
        cluster={cluster}
        latitude={latitude}
        longitude={longitude}
        setSelectedMarker={setSelectedMarker}
        places={places}
      />
    ) : (
      <OneMarkerMobile
        key={`place-${cluster.properties.placeId}`}
        cluster={cluster}
        latitude={latitude}
        longitude={longitude}
        setSelectedMarker={setSelectedMarker}
        places={places}
      />
    )
  })
}
