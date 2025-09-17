import { useState } from 'react'
import useHomeHook from './home.hook'
import HomeLayout from './home.layout'

export default function HomeScreen() {
  const [query, setQuery] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const controller = useHomeHook(searchTerm)

  const handleSubmit = () => {
    setSearchTerm(query.trim())
  }

  return (
    <HomeLayout
      {...controller}
      query={query}
      setQuery={setQuery}
      onSubmit={handleSubmit}
    />
  )
}
