import {createSlice} from '@reduxjs/toolkit'
export interface GameState {
    account: string
}
const initialState:GameState = {
    account: ''
}
export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        storeAccount: (state, action) => {
            state.account = action.payload
        },
        clearGame: (state) => {
            state.account = ''
        }
    }
})

export const {
    storeAccount,
    clearGame
} = gameSlice.actions

export default gameSlice.reducer
