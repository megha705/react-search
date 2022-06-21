import { useEffect, useState } from 'react'
import Search from './components/Search'

function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <Search users={users} />
    </div>
  )
}

export default App
