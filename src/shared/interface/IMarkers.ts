export interface IMarkers {
  id?: number
  typeId: number
  title: string
  description: string
  latitude: number
  longitude: number
}

export interface ViewportType {
  latitude: number
  longitude: number
  width: string
  height: string
  zoom: number
  transitionDuration: string
}
