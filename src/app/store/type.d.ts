import { store } from "src/app/store/store"

export type RootState = ReturnType<typeof store.getState>
