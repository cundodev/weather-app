import { API_URL, CORS_URL } from './settings'

export default async function getSingleLocation ({ id = 44418 }) {
  const response = await fetch(`${CORS_URL}${API_URL}${id}`)
  const apiResponse = await response.json()
  return apiResponse
};
