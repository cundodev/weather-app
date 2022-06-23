import { API_URL, FETCH_OPTIONS } from './settings'

export default async function getLocations ({ keyword }) {
  const query = keyword
  const response = await fetch(`${API_URL}search.json?q=${query}`, FETCH_OPTIONS)
  const data = await response.json()
  return { data }
};
