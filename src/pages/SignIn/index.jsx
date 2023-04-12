import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FormContainer, Form } from '../../styles/Form';

import { AuthContext } from '../../contexts/auth'

export const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  function handleSignIn(e) {
    e.preventDefault()

    if (email.trim() !== '' && password.trim() !== '') {
      signIn(email, password)
    } else {
      alert('Erro ao tentar logar')
    }

  }

  return (
    <FormContainer>
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do sistema" />
        </div>

        <Form onSubmit={handleSignIn}>
          <h1>Login Account</h1>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
          />
          <input
            type="password"
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
          <button>Log in</button>
        </Form>

        <Link to='/register'>Create an account</Link>
      </div>
    </FormContainer>
  );
};