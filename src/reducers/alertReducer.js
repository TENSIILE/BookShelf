import { HIDE_ALERT, SHOW_ALERT } from '../types/alert.types'

export const AlertReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, ...action.payload, turnOn: true}
        case HIDE_ALERT:
            return {...state, turnOn: false}
        default:
            return state
    }
}