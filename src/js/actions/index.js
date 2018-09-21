import * as actionTypes from "../constants/action-types";

export const addUser = user => dispatch => {
    dispatch({
        type: actionTypes.ADD_USER,
        payload: user
     })
}

export const getUsers = () => dispatch => {
    dispatch({
        type: actionTypes.GET_USERS,
        payload: 'Give me all users'
    })
}

export const removeUser = user => dispatch => {
    dispatch({
        type: actionTypes.REMOVE_USER,
        payload: user
    })
}

export const updateUser = user => dispatch => {
    dispatch({
        type: actionTypes.UPDATE_USER,
        payload: user
    })
}
