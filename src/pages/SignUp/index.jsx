import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FormContainer, Form } from "../../styles/Form"

import { AuthContext } from '../../contexts/auth';

export const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp, loadingAuth } = useContext(AuthContext)

  async function handleSubmit(e) {
    e.preventDefault()

    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      await signUp(name, email, password)
    } else {
      alert('Preencha os campos')
    }


  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do sistema" />
        </div>

        <Form>
          <h1>Create Account</h1>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name'
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your e-mail'
          />
          <input
            type="password"
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
          <button>
            {loadingAuth ? 'Loading...' : 'Sign up'}
          </button>
        </Form>

        <Link to='/'>Already have an account? <span> Sign in </span></Link>
      </div>
    </FormContainer>
  )
}