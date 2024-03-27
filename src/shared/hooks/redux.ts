import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "@app/store/type"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
