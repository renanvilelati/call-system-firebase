import { Sidebar } from '../../components/Sidebar'
import { Title } from '../../components/Title'

import { FiSettings } from 'react-icons/fi'

import { ProfileContainer } from './style'

export const Profile = () => {
  return (
    <ProfileContainer>
      <Sidebar />

      <div className='content'>
        <Title name='Meu perfil'>
          <FiSettings size={24} />
        </Title>
      </div>
    </ProfileContainer>
  )
}