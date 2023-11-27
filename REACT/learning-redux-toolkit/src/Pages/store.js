import { configureStore, createSlice } from "@reduxjs/toolkit";


// Reducer takes in action, previous state of application
// Returns a new satte
// Function that describes how our states interact with each other.
// Reducer comes from a "slice"
/// Slices help automatically generate all of the parts of our producers.

const initialState = {value: {username: "man"}};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            // Setting new value of state to be whatever we pass into it
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialState.value;
        }
    },
});

// This is basically an object with both of the functions in it. 
export const { login, logout } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});