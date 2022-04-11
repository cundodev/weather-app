import { API_URL } from './settings'

export default async function getLocations ({ keyword }) {
  const response = await fetch(`${API_URL}search/?query=${keyword}`)
  const apiResponse = response.json()
  return apiResponse
};
