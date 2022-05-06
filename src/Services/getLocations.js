import { API_URL, CORS_URL } from './settings'

export default async function getLocations ({ keyword }) {
  try {
    const response = await fetch(`${CORS_URL}${API_URL}search/?query=${keyword}`)
    if (response.ok) {
      const apiResponse = await response.json()
      if ((apiResponse.length > 0)) {
        return {
          success: true,
          data: apiResponse
        }
      } else {
        return {
          success: false,
          error: 'non-existing location'
        }
      }
    }
  } catch (error) {
    return {
      success: false,
      error: 500
    }
  }
};
