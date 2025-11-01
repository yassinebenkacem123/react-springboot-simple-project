import React from 'react'

const SearchForm = () => {
  return (
    <div className='mb-4 w-[40%]'>
      <input
        type='text'
        placeholder='Search posts...'
        className='border border-gray-300 rounded-lg py-2 px-4 w-full'
      />
    </div>
  )
}

export default SearchForm