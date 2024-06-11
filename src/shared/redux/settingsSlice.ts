import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@app/store/store"

interface CounterState {
  showMap: boolean
  isDesktop: boolean
}

const initialState: CounterState = {
  showMap: true,
  isDesktop: true,
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
    setDesktop(state, action: PayloadAction<boolean>) {
      state.isDesktop = action.payload
    },
  },
})

export const { changeShowMap, setShowMap, setDesktop } = settingsSlice.actions

export const selectShowMap = (state: RootState) => state.settings.showMap

export default settingsSlice.reducer
