import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

// importando las acciones configuradas en el ducks correspondiente
import { loginWithEmailAndPasswordAction } from '../../redux/authDucks'

const Login = () => {
  // iniciando el dispatcher de las acciones
  const dispatch = useDispatch()

  // lista de redux a usar
  // const authentication = useSelector(store => store.authentication)

  return (
    <div>
      <button onClick={() => {dispatch(loginWithEmailAndPasswordAction() )}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nisi quasi fugiat voluptatum, maxime aut, esse ipsum, perferendis sed dolore sunt dolorum amet unde aliquid ab ad praesentium nulla nobis?
      </button>
    </div>
  )
}
export default Login
