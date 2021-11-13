import api from "../api/api";

// constantes
const dataInicial = {
  array:[]
}

const LOGIN_WITH_EMAIL_AND_PASSWORD_EXITO = 'LOGIN_WITH_EMAIL_AND_PASSWORD_EXITO'
const LOGIN_FAIL = 'LOGIN_FAIL'

//reducers
export default function authReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOGIN_FAIL:
      return 
      break;
  
    default:
      break;
  }
}

//actions
export const loginWithEmailAndPasswordAction = () => async (dispatch, getState) => {
  try {
    // realizar la accion
    const res = api.get('/authentication/signup')
    
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error
    })
    console.error(error)
  }
}