import { createSlice } from "@reduxjs/toolkit";

// createSlice takes an object in which the name of slice and initial state must be define.
// We will have reducers to create different type reducer function to manage the slice.
// reducers is an object in which we generally create different reducer function to perform 
// the operation in the slice.
const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload
        },
        removeUser: (state, action) => {
            return null
        }
    }
})

// Export reducer from userSlice and reducer method from userSlice.actions.
export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer