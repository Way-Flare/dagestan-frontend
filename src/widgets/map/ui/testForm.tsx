import {
  useCreateMarkerMutation,
  useDeleteMarkerMutation,
  useUpdateMarkerMutation,
} from "@entities/map/api/map-markers-api"
import { IMarkers } from "@shared/interface/IMarkers"
import { FC, FormEventHandler, useState } from "react"
import "./map.scss"

type Props = {
  marker: IMarkers | undefined
  newLngLat: { longitude: number; latitude: number }
}

export const TestForm: FC<Props> = ({ marker, newLngLat }) => {
  const [createMarker] = useCreateMarkerMutation()
  const [updateMarker] = useUpdateMarkerMutation()
  const [deleteMarker] = useDeleteMarkerMutation()
  const [createMode, setCreateMode] = useState(false)

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const id = Number(formData.get("id"))
    const name = String(formData.get("name"))
    const description = String(formData.get("description"))
    const latitude = Number(formData.get("latitude"))
    const longitude = Number(formData.get("longitude"))

    if (createMode) {
      const newMarker: IMarkers = {
        id,
        typeId: id,
        name,
        description,
        latitude: newLngLat?.latitude,
        longitude: newLngLat.longitude,
      }
      await createMarker({ marker: newMarker })
    } else {
      const newMarker: IMarkers = {
        id,
        typeId: id,
        name,
        description,
        latitude,
        longitude,
      }

      await updateMarker({ marker: newMarker })
    }
  }

  const handleDelete = () => {
    deleteMarker({ markerId: marker?.id ?? 0 })
  }
  //   if (!marker) return null

  return (
    <>
      <input
        type="checkbox"
        checked={createMode}
        onChange={() => setCreateMode((s) => !s)}
      />{" "}
      Create Mode
      <form onSubmit={onSubmit}>
        <label>id</label>
        <input key={`${marker?.id}0`} name="id" defaultValue={marker?.id} />
        <label>name</label>
        <input
          key={`${marker?.id}${marker?.name}1`}
          name="name"
          defaultValue={marker?.name}
        />
        <label>description</label>
        <input
          key={`${marker?.id}${marker?.description}2`}
          name="description"
          defaultValue={marker?.description}
        />
        <label>latitude</label>
        <input
          key={`${marker?.id}${marker?.latitude}3`}
          name="latitude"
          defaultValue={createMode ? newLngLat?.latitude : marker?.latitude}
        />
        <label>longitude</label>
        <input
          key={`${marker?.id}${marker?.longitude}4`}
          name="longitude"
          defaultValue={createMode ? newLngLat?.longitude : marker?.longitude}
        />

        <button type="submit">Изменить</button>
        <button type="reset" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </>
  )
}
