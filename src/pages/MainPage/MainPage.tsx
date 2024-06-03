import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import { setShowMap, selectShowMap } from "@shared/redux"
import { Map } from "@widgets/map"
import { Places } from "@widgets/places"
import { useEffect } from "react"

export default function () {
  const showMap = useAppSelector(selectShowMap)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setShowMap())
  }, [dispatch])

  return (
    <>
      <Map />
      {!showMap ? <Places /> : null}
    </>
  )
}
