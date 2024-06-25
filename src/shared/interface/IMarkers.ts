export interface IMarkers {
  id: number
  contacts: [
    {
      id: number
      phone_number: string
      email: string
    },
  ]
  name: string
  short_description: string
  description: string
  latitude: number
  longitude: number
  images: [
    {
      id: number
      name: string
      file: string
    },
  ]
  rating: number
  work_time: string
  feedback_count: number
  tags: [
    {
      id: number
      name: string
    },
  ]
}

export interface IRoutes {
  id: number
  title: string
  images: [
    {
      id: number
      name: string
      file: string
    },
  ]
  short_description: string
  distance: number
  travel_time: string
  feedback_count: number
  rating: number
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
