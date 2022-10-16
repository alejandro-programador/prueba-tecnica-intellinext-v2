// constantes
const dataInicial = {
    lng: 'es'
}

// types
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

// reducer
export default function languageReducer(state = dataInicial, action){
    switch(action.type){
        case CHANGE_LANGUAGE:
            return {...state, lng: action.payload}
        default:
            return state
    }
}

// actions
export const changeLanguageAction = () => async (dispatch, getState) => {
    let languageType = (getState().LanguageReducer.lng === 'es') ? 'en' : 'es' ;
    
    dispatch({
        type: CHANGE_LANGUAGE,
        payload: languageType
    })
    
    localStorage.setItem('lng', languageType);
}