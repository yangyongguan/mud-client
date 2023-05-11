import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
import gameSlice from '@/store/gameSlice'
const index = configureStore({
    reducer: {
        game: gameSlice
    }
})
export default index
export type AppDispath = typeof index.dispatch
export type RootState = ReturnType<typeof index.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>


