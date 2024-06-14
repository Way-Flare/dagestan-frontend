import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@app/store/store"

interface CounterState {
  showMap: boolean
  isDesktop: boolean
  tags: string[]
}

const initialState: CounterState = {
  showMap: true,
  isDesktop: true,
  tags: [],
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
    addTag(state, action: PayloadAction<string>) {
      state.tags.push(action.payload)
    },
    removeTag(state, action: PayloadAction<string>) {
      state.tags = state.tags.filter((tag) => tag !== action.payload)
    },
  },
})

export const { changeShowMap, setShowMap, setDesktop, addTag, removeTag } =
  settingsSlice.actions

export const selectShowMap = (state: RootState) => state.settings.showMap
export const selectTags = (state: RootState) => state.settings.tags

export default settingsSlice.reducer
