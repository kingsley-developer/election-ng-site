import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type user_Profile_Type = {
    profile_Pic: string,
    firstname: string,
    middlename: string,
    lastname: string,
    voter_NIN_Id: string,
    age: number,
    dateOfBirth: string,
    phoneNumber: number,
    address: string,
    email: string,
    stateOfOrigin: string,
    originLGA: string,
    currentState: string,
    currentLGA: string,
    accessToken: string,
    votingCount: number
}
type user_Profile = {
    newUser: user_Profile_Type
}
const user_data = {
    profile_Pic: "",
    firstname: "",
    middlename: "",
    lastname: "",
    voter_NIN_Id: "",
    age: 0,
    dateOfBirth: "",
    phoneNumber: 0,
    address: "",
    email: "",
    stateOfOrigin: "",
    originLGA: "",
    currentState: "",
    currentLGA: "",
    accessToken: "",
    votingCount: 0
}
const INITIAL_STATE: user_Profile = {
    newUser: user_data
}

const User_Profile = createSlice({
    name: 'User_Profile',
    initialState: INITIAL_STATE,
    reducers: {
        voting_increase: (state: user_Profile) => {
            if(state.newUser.votingCount > 0){
                state.newUser.votingCount = 1
                return
            }
            state.newUser.votingCount++
        },
        voting_decrease: (state: user_Profile) => {
            if(state.newUser.votingCount< 0){
                state.newUser.votingCount = 0
                return
            }
            state.newUser.votingCount--
        },
        signup_user: (state: user_Profile, actions: PayloadAction<user_Profile_Type>) => {
            state.newUser = actions.payload
        }
    },
});

export const {voting_increase,
    voting_decrease,
    signup_user
} = User_Profile.actions

export default User_Profile.reducer