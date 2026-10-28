import axios from 'axios'

export const movieApi = axios.create({
  baseURL: 'https://movienew.cybersoft.edu.vn/api',
  headers: import.meta.env.VITE_TOKEN_CYBERSOFT ? { TokenCybersoft: import.meta.env.VITE_TOKEN_CYBERSOFT } : {},
})
