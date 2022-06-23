import { API_URL, FETCH_OPTIONS } from './settings'

export default async function getForecast ({ location }) {
  const query = location || 'Rosario'
  const response = await fetch(`${API_URL}forecast.json?q=${query}&days=5`, FETCH_OPTIONS)
  const data = await response.json()
  return { data }
};
