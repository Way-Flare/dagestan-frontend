const MapParams = {
  mapStyleLight: "mapbox://styles/txmi/clq18sjec007101pl9b088xo8",
  mapStyleDark: "mapbox://styles/txmi/cloq3983600le01prc0s9eojc",
  accessToken: import.meta.env.VITE_MAP_PUBLIC_TOKEN,
  style: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
}

export const { style, mapStyleLight, accessToken, mapStyleDark } = MapParams
