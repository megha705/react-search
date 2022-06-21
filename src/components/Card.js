const Card = ({ user }) => {
  return (
    <div className='p-3 shadow-md rounded-md border overflow-hidden'>
      <h2 className='text-lg font-semibold truncate'>{user.name}</h2>
      <p className='text-gray-500 font-semibold truncate'>{user.email}</p>
    </div>
  )
}

export default Card
