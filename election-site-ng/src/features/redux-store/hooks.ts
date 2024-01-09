import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { rootState, rootDispatch } from "./store";

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector
export const useAppDispatch = () => useDispatch<rootDispatch>()