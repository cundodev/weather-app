import { API_URL } from './settings'

export default async function getSingleLocation ({ id }) {
  const response = await fetch(`${API_URL}${id}`)
  const apiResponse = response.json()
  return apiResponse
};
