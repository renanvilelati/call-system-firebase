import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import { Header } from "../../components/Header"

export const Dashboard = () => {

  const { logout } = useContext(AuthContext)

  async function handleLogout() {
    await logout()
  }

  return (
    <>
      <Header />
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Sair</button>
    </>
  )
}