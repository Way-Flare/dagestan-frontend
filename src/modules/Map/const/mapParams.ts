const MapParams = {
  mapStyle: "mapbox://styles/mapbox/streets-v9",
  accessToken: import.meta.env.VITE_MAP_PUBLIC_TOKEN,
  style: { width: "100vw", height: "100vh", overflow: "hidden" },
}

export const { style, mapStyle, accessToken } = MapParams
