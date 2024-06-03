import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "@app/store/store"

interface CounterState {
  showMap: boolean
}

const initialState: CounterState = {
  showMap: true,
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeShowMap: (state) => {
      state.showMap = !state.showMap
    },
    setShowMap(state) {
      state.showMap = true
    },
  },
})

export const { changeShowMap, setShowMap } = settingsSlice.actions

export const selectShowMap = (state: RootState) => state.settings.showMap

export default settingsSlice.reducer
