import {initialPeople, UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType> = initialPeople, action: actionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
           return  action.payload === 'up' ? [...state.sort((a,b) => a.name > b.name ? 1 : -1)]:
                [...state.sort((a,b) => a.name < b.name ? 1 : -1)]
        }
        case 'check': {
            return [...state.filter(m => m.age > action.payload)]
        }
        default: return state
    }
}

type actionType = sortUpType | sortDownType | checkType

export type sortUpType = {
    type:'sort',
    payload: 'up'
}
export type sortDownType = {
    type:'sort',
    payload: 'down'
}
export type checkType = {
    type:'check',
    payload: number
}

