// constantes
const dataInicial = {
    theme: 'light'
}

// types
const CHANGE_THEME_PROPERTIES = 'CHANGE_THEME_PROPERTIES'

// reducer
export default function themeReducer(state = dataInicial, action){
    switch(action.type){
        case CHANGE_THEME_PROPERTIES:
            return {...state, theme: action.payload}
        default:
            return state
    }
}

// actions
export const changeThemeAction = () => async (dispatch, getState) => {
    let themeType = (getState().ThemeReducer.theme === 'light') ? 'dark' : 'light' ;
    
    dispatch({
        type: CHANGE_THEME_PROPERTIES,
        payload: themeType
    })
    
    localStorage.setItem('theme', themeType);
}