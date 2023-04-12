import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FormContainer, Form } from "../../styles/Form"

export const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()



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
            onChange={() => setName(e.target.value)}
            placeholder='Enter your name'
          />
          <input
            type="text"
            value={email}
            onChange={() => setEmail(e.target.value)}
            placeholder='Enter your e-mail'
          />
          <input
            type="password"
            autoComplete='off'
            value={password}
            onChange={() => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
          <button>Sign up</button>
        </Form>

        <Link to='/'>Already have an account? <span> Sign in </span></Link>
      </div>
    </FormContainer>
  )
}