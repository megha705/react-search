import Card from './Card'

const SearchList = ({ filteredUsers }) => {
  const filtered = filteredUsers.map(user => <Card key={user.id} user={user} />)

  return (
    <>
      {filtered.length ? (
        <div className='grid grid-cols-3 gap-3'>{filtered}</div>
      ) : (
        <div className='text-center border shadow-md p-5 text-xl rounded-md font-semibold text-red-400'>
          Not Results
        </div>
      )}
    </>
  )
}

export default SearchList
