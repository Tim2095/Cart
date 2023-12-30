import { AppDispatch, RootState } from './store';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";


type DispatchFunction = () => AppDispatch

export const useCartDispatch: DispatchFunction = useDispatch
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector 