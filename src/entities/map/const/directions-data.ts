const geojson = (route) => {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [...route],
        },
      },
    ],
  }
}

const lineStyle = (routeGeojson) => {
  return {
    id: "roadLayer",
    type: "line",
    source: { type: "geojson", data: routeGeojson },
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#3887be",
      "line-width": 5,
      "line-opacity": 0.75,
    },
  }
}

export { geojson, lineStyle }
