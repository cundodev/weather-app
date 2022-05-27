import { API_URL, FETCH_OPTIONS } from './settings'

export default async function getForecast ({ keyword }) {
  const query = keyword || 'Rosario'
  const response = await fetch(`${API_URL}?q=${query}&days=5&lang=es`, FETCH_OPTIONS)
  const data = await response.json()
  return { data }
};
