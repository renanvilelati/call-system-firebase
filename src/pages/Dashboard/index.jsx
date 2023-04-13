import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"


export const Dashboard = () => {

  const { logout } = useContext(AuthContext)

  async function handleLogout() {
    await logout()
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Sair</button>
    </>
  )
}