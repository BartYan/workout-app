import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface workoutState {
  workout: any
}

// Define the initial state using that type
const initialState: workoutState = {
  workout: [],
}

export const workoutSlice = createSlice({
  name: 'workoutSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      // state.workout = [...state.workout, payload];
      state.workout = payload;
    },
  },
})

export const { save } = workoutSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWorkout = (state: RootState) => state.workout.workout

export default workoutSlice.reducer