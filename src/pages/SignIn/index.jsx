import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FormContainer, Form } from '../../styles/Form';

export const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <FormContainer>
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do sistema" />
        </div>

        <Form>
          <h1>Login Account</h1>
          <input
            type="text"
            value={email}
            onChange={() => setEmail(e.target.value)}
            placeholder='Enter your email'
          />
          <input
            type="password"
            autoComplete='off'
            value={password}
            onChange={() => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
          <button>Log in</button>
        </Form>

        <Link to='/register'>Create an account</Link>
      </div>
    </FormContainer>
  );
};