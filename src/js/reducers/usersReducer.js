import {ADD_USER, GET_USERS, REMOVE_USER, UPDATE_USER} from "../constants/action-types";

const initialState = {
    users: [
        {id: 'ascp12ur', email: 'richard_grac@hotmail.com', password: 'hello', userType: 'ADMIN',
            description: 'Hello Everyone!', receiveEmail: true, printUser: false},
        {id: 'asxs73an', email: 'john_smith@hotmail.com', password: 'hello', userType: 'USER',
            description: 'What\'s up!', receiveEmail: false, printUser: false}
    ]
}

const usersData = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state
            }

        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case REMOVE_USER:
            let usersModified = [...state.users]
            let index = usersModified.findIndex(user => user === action.payload)
            usersModified.splice(index, 1)

            return {
                ...state,
                users: usersModified
            }

        case UPDATE_USER:
            let usersCopy = [...state.users]
            let userIndex = usersCopy.findIndex(user => user.id === action.payload.id)
            usersCopy.splice(userIndex, 1, action.payload)

            return {
                ...state,
                users: usersCopy
            }

        default:
            return state
    }
}

export default usersData