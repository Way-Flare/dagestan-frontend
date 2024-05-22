export interface IMarkers {
  id?: number
  typeId: number
  name: string
  description: string
  latitude: number
  longitude: number
}

export interface ViewportType {
  bearing?: number
  pitch?: number
  latitude: number
  longitude: number
  width: string
  height: string
  zoom: number
  transitionDuration: string
}
