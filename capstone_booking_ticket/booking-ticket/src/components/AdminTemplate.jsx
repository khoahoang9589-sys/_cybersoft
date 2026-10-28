import { NavLink, Outlet } from 'react-router-dom'
export default function AdminTemplate() {
  return <div className="container-fluid"><div className="row min-vh-100"><aside className="col-12 col-md-3 col-lg-2 bg-dark p-3"><NavLink className="d-block mb-4 fs-5 fw-bold text-white text-decoration-none" to="/admin/films">MovieTime Admin</NavLink><nav className="nav flex-column gap-1" aria-label="Quản trị"><NavLink className="nav-link text-white" to="/admin/films">Quản lý phim</NavLink><NavLink className="nav-link text-white" to="/admin/users">Quản lý người dùng</NavLink><NavLink className="nav-link text-white" to="/home">Về trang chủ</NavLink></nav></aside><main className="col-12 col-md-9 col-lg-10 bg-light p-4"><Outlet /></main></div></div>
}
