import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    userRole: '',
    token: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserDetails: (state, actions) => {
            const { name, userRole, email, token } = actions.payload;
            state.name = name;
            state.email = email;
            state.userRole = userRole;
            state.token = token;
        },
        resetUserDetails: (state, actions) => {
            state.name = "";
            state.userRole = "";
            state.email = "";
            state.token = "";
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUserDetails } = UserSlice.actions

export default UserSlice.reducer