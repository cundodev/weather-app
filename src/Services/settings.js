export const API_URL = 'https://weatherapi-com.p.rapidapi.com/'

export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': (import.meta.env.VITE_VERCEL_ENV === 'preview') ? import.meta.env.VERCEL_APP_API_KEY : import.meta.env.VITE_APP_API_KEY
  }
}
