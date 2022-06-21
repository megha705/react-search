import { useState } from 'react'
import SearchList from './SearchList'

const Search = ({ users }) => {
  const [searchField, setSearchField] = useState('')

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(searchField.toLowerCase()) ||
      user.email.toLowerCase().includes(searchField.toLowerCase()) ||
      user.username.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const handleChange = e => {
    setSearchField(e.target.value)
  }

  function searchList() {
    return <SearchList filteredUsers={filteredUsers} />
  }

  return (
    <section className='p-3'>
      <div className='mb-5 text-center text-3xl'>
        <h2>
          <span className='text-blue-500'>JSON</span> PLACEHOLDER USERS
        </h2>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <input
          type='search'
          placeholder='Search an user...'
          onChange={handleChange}
          className='bg-gray-200 w-full md:w-2/6 mb-3 rounded-md text-gray-700 p-4 focus:outline-none border focus:bg-white'
        />
        {searchList()}
      </div>
    </section>
  )
}

export default Search
