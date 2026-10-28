import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import './index.css'
import HomeTemplate from './components/HomeTemplate.jsx'
import AdminTemplate from './components/AdminTemplate.jsx'
import { BookingRoom, FilmForm, FilmManagement, HomePage, Login, MovieDetail, Profile, Register, ShowtimeForm, UserForm, UserManagement } from './pages/pages.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter><Routes><Route element={<HomeTemplate />}><Route index element={<HomePage />} /><Route path="home" element={<HomePage />} /><Route path="detail/:maPhim" element={<MovieDetail />} /><Route path="ticketroom/:maLichChieu" element={<BookingRoom />} /><Route path="login" element={<Login />} /><Route path="register" element={<Register />} /><Route path="profile" element={<Profile />} /></Route><Route path="admin" element={<AdminTemplate />}><Route path="films" element={<FilmManagement />} /><Route path="films/add" element={<FilmForm />} /><Route path="films/edit/:maPhim" element={<FilmForm />} /><Route path="films/showtime/:maPhim" element={<ShowtimeForm />} /><Route path="users" element={<UserManagement />} /><Route path="users/add" element={<UserForm />} /><Route path="users/edit/:taiKhoan" element={<UserForm />} /></Route><Route path="*" element={<Navigate to="/" replace />} /></Routes></BrowserRouter>
    </Provider>
  </StrictMode>,
)
