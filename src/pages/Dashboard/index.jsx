import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import { Sidebar } from "../../components/Sidebar"

export const Dashboard = () => {

  const { logout } = useContext(AuthContext)

  async function handleLogout() {
    await logout()
  }

  return (
    <>
      <Sidebar />
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Sair</button>
    </>
  )
}