import ReactMapGl, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl"
import { useRef, useState } from "react"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
import {
  accessToken,
  mapStyleLight,
  style,
  useGetMarkersQuery,
} from "@entities/map"
import useSupercluster from "use-supercluster"
import "./map.scss"
import { TestForm } from "./testForm"
import { IMarkers } from "@shared/interface/IMarkers"

export const Map = () => {
  const { data: places } = useGetMarkersQuery()
  const [marker, setSelectedMarker] = useState<IMarkers | undefined>(undefined)
  const [newLngLat, setNewLngLat] = useState({ longitude: 0, latitude: 0 })

  const [viewport, setViewport] = useState({
    latitude: 43,
    longitude: 47.6,
    width: "100vw",
    height: "100vh",
    zoom: 9,
    transitionDuration: "auto",
  })
  const mapRef = useRef()

  const onViewportChange = (viewport) => {
    setViewport(viewport.viewState)
  }

  const points = (places ?? []).map((place) => ({
    type: "Feature",
    properties: { placeId: place.id, cluster: false },
    geometry: {
      type: "Point",
      coordinates: [place.longitude, place.latitude],
    },
  }))

  const bounds = mapRef.current
    ? // @ts-ignore
      mapRef.current.getMap().getBounds().toArray().flat()
    : null

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 12 },
  })

  return (
    <div className={"relative"}>
      <TestForm marker={marker} newLngLat={newLngLat} />
      <ReactMapGl
        {...viewport}
        maxZoom={20}
        style={style}
        mapboxAccessToken={accessToken}
        mapStyle={mapStyleLight}
        onClick={(event) =>
          setNewLngLat({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
          })
        }
        onMove={onViewportChange}
        // @ts-ignore
        ref={mapRef}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          showUserLocation={true}
          trackUserLocation={true}
        />
        <NavigationControl showCompass showZoom />
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties

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
            />
          )
        })}
        {/* <Markers /> */}
      </ReactMapGl>
    </div>
  )
}
