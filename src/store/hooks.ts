import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux'
import {RootState, AppDispath} from './index'

export const useAppDispatch = () => useDispatch<AppDispath>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
