import {use, useState} from 'react'
import './signin.css'
import logo from '../../assets/logo.png'

import {Link} from 'react-router-dom'

export default function Signin() {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt='logo do sistemas'/>
        </div>

        <form>
          <h1>Entrar</h1>
          <input type ='text' placeholder='Digite seu email...' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type ='password' placeholder='Digite sua senha...' value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button type='submit'>Acessar</button>
        </form>
        <Link to="/register">Não possui uma conta? Cadastre-se</Link>

      </div>
    </div>
  )
}
