import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { SignInContainer } from './styles';

export const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SignInContainer>
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do sistema" />
        </div>

        <form>
          <h1>Log in</h1>
          <input
            type="text"
            value={email}
            onChange={() => setEmail(e.target.value)}
            placeholder='Enter yout email'
          />
          <input
            type="password"
            autoComplete='off'
            value={password}
            onChange={() => setPassword(e.target.value)}
            placeholder='Enter yout password'
          />
          <button>Log in</button>
        </form>

        <Link to='/register'>Create an account</Link>
      </div>
    </SignInContainer>
  );
};