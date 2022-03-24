const initState = {
loading: false
}

export const loadingReducer = (state = initState, action: loadingACType): any => { // fix any
    switch (action.type) {
        case 'set-loading': {

            return {...state, loading: action.loading}
        }
        default: return state
    }
}

export type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (loading:boolean) => {
    return {
        type: 'set-loading',
    loading
    }
} // fix any