import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { FiHome, FiUser, FiSettings } from 'react-icons/fi'
import { SidebarContainer } from './styles'

import { AuthContext } from '../../contexts/auth'

import avatarImg from '../../assets/avatar.png'


export const Sidebar = () => {

  const { user } = useContext(AuthContext)

  return (
    <SidebarContainer>
      <div>
        <img src={user.avatarUrl === null ? avatarImg : user.avatarUrl} alt="User avatar" />
      </div>

      <Link to='/dashboard'>
        <FiHome color='#fff' size={24} />
        Chamados
      </Link>

      <Link to='/customers'>
        <FiUser color='#fff' size={24} />
        Clientes
      </Link>

      <Link to='/profile'>
        <FiSettings color='#fff' size={24} />
        Perfil
      </Link>
    </SidebarContainer>
  )
}