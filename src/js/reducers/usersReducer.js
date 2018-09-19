import {ADD_USER, GET_USERS} from "../constants/action-types";

const initialState = {
    // ... more properties
    users: [
        {email: 'richard_grac@hotmail.com', userType: 'ADMIN', description: 'Hello Everyone!'},
        {email: 'john_smith@hotmail.com', userType: 'USER', description: 'What\'s up!'}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            // state.articles.push(action.payload) // breaks the main Redux principle: immutability
            // break
            return {...state, users: [...state.users, action.payload]}
        case GET_USERS:
            return {users: [...state.users]}
        default:
            return state
    }
}

export default usersReducer