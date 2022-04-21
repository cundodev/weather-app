import React, { useState } from 'react'
import { Imput, FormSearch } from './style'

export default function SearchForm ({ setKeyword }) {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(search)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <FormSearch>
      <form onSubmit={handleSubmit}>
        <Imput
          type='text'
          className='Search'
          onChange={handleChange}
          value={search}
          placeholder='Search location'
        />
      </form>
    </FormSearch>
  )
};
