const initState = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: changeThemeCType): any => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme:action.theme}
        }
        default: return state;
    }
};

type changeThemeCType = {
    type:"CHANGE-THEME",
    theme:string
}

export const changeThemeC = (theme:string): changeThemeCType => {
    return {
        type:"CHANGE-THEME",
        theme
    } as const
}; // fix any