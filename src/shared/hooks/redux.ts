import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "src/app/store/store"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
