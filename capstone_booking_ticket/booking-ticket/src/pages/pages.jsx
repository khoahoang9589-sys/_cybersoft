import { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { movieApi } from '../api/movieApi.js'
import { clearSeats, toggleSeat } from '../store/bookingSlice.js'
import ApiState from '../components/ApiState.jsx'
import BannerCarousel from '../components/BannerCarousel.jsx'

const GROUP = 'GP01'
const message = (error) => error.response?.data?.content || error.message || 'Đã có lỗi xảy ra.'
const authSchema = Yup.object({ taiKhoan: Yup.string().required('Vui lòng nhập tài khoản'), matKhau: Yup.string().min(6, 'Tối thiểu 6 ký tự').required('Vui lòng nhập mật khẩu') })
const registerSchema = authSchema.shape({ email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'), soDt: Yup.string().required('Vui lòng nhập số điện thoại'), hoTen: Yup.string().required('Vui lòng nhập họ tên') })

function useRequest(request, deps = []) {
  const [state, setState] = useState({ loading: true, error: '', data: null })
  const load = async () => { setState({ loading: true, error: '', data: null }); try { const response = await request(); setState({ loading: false, error: '', data: response.data.content }) } catch (error) { setState({ loading: false, error: message(error), data: null }) } }
  // The caller supplies the request dependencies (for example, the route ID).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { const requestTimer = setTimeout(load, 0); return () => clearTimeout(requestTimer) }, deps)
  return { ...state, load }
}

export function HomePage() {
  const movies = useRequest(() => movieApi.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}`), [])
  const banners = useRequest(() => movieApi.get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner'), [])
  return <><section className="hero p-4 p-md-5 mb-4"><h1 className="display-6 fw-bold">Đặt vé xem phim thật đơn giản</h1><p className="mb-0">Chọn phim, chọn suất chiếu và giữ chỗ của bạn.</p></section><ApiState {...banners} empty={!banners.data?.length} />{banners.data?.length > 0 && <BannerCarousel banners={banners.data} />}<h2 className="mb-4">Phim đang chiếu</h2><ApiState {...movies} empty={!movies.data?.length} />{movies.data?.length > 0 && <section className="row g-4">{movies.data.map((movie) => <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={movie.maPhim}><article className="movie-card card h-100 border-0"><img className="card-img-top" src={movie.hinhAnh} alt={movie.tenPhim} /><div className="card-body d-flex flex-column"><h3 className="card-title h5">{movie.tenPhim}</h3><p className="card-text">{movie.moTa?.slice(0, 120) || 'Chưa có mô tả.'}...</p><NavLink className="btn btn-primary mt-auto" to={`/detail/${movie.maPhim}`}>Xem chi tiết</NavLink></div></article></div>)}</section>}</>
}

export function MovieDetail() {
  const { maPhim } = useParams()
  const { data: movie, ...state } = useRequest(() => movieApi.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`), [maPhim])
  return <><ApiState {...state} empty={!movie} />{movie && <article className="detail"><img src={movie.hinhAnh} alt={movie.tenPhim} /><div><h1>{movie.tenPhim}</h1><p>{movie.moTa}</p>{movie.trailer && <a href={movie.trailer} target="_blank" rel="noreferrer">Xem trailer</a>}</div><section className="showtimes"><h2>Lịch chiếu</h2>{movie.heThongRapChieu?.map((system) => <div key={system.maHeThongRap}><h3>{system.tenHeThongRap}</h3>{system.cumRapChieu.map((cinema) => <div className="cinema" key={cinema.maCumRap}><strong>{cinema.tenCumRap}</strong><div>{cinema.lichChieuPhim.map((showtime) => <NavLink className="showtime" key={showtime.maLichChieu} to={`/ticketroom/${showtime.maLichChieu}`}>{new Date(showtime.ngayChieuGioChieu).toLocaleString('vi-VN')}</NavLink>)}</div></div>)}</div>)}</section></article>}</>
}

function AuthForm({ register = false }) {
  const navigate = useNavigate(); const [error, setError] = useState('')
  const initialValues = register ? { taiKhoan: '', matKhau: '', email: '', soDt: '', hoTen: '' } : { taiKhoan: '', matKhau: '' }
  const submit = async (values, { setSubmitting }) => { setError(''); try { const endpoint = register ? '/QuanLyNguoiDung/DangKy' : '/QuanLyNguoiDung/DangNhap'; const payload = register ? { ...values, maNhom: GROUP } : values; const response = await movieApi.post(endpoint, payload); if (register) navigate('/login'); else { localStorage.setItem('user', JSON.stringify(response.data.content)); navigate('/profile') } } catch (err) { setError(message(err)) } finally { setSubmitting(false) } }
  return <section className="form-card card border-0"><div className="card-body p-4"><h1 className="h3 mb-4">{register ? 'Đăng ký' : 'Đăng nhập'}</h1><Formik initialValues={initialValues} validationSchema={register ? registerSchema : authSchema} onSubmit={submit}>{({ errors, touched, isSubmitting }) => <Form>{register && <FormField name="hoTen" label="Họ tên" errors={errors} touched={touched} />}<FormField name="taiKhoan" label="Tài khoản" errors={errors} touched={touched} />{register && <><FormField name="email" label="Email" type="email" errors={errors} touched={touched} /><FormField name="soDt" label="Số điện thoại" errors={errors} touched={touched} /></>}<FormField name="matKhau" label="Mật khẩu" type="password" errors={errors} touched={touched} />{error && <p className="error">{error}</p>}<button className="btn btn-primary" disabled={isSubmitting} type="submit">{isSubmitting ? 'Đang gửi...' : register ? 'Tạo tài khoản' : 'Đăng nhập'}</button></Form>}</Formik></div></section>
}
function FormField({ name, label, type = 'text', errors, touched }) { return <label className="form-label">{label}<Field className="form-control" name={name} type={type} />{touched[name] && errors[name] && <small className="error">{errors[name]}</small>}</label> }
export function Login() { return <AuthForm /> }
export function Register() { return <AuthForm register /> }

export function Profile() { const stored = localStorage.getItem('user'); const user = stored ? JSON.parse(stored) : null; return <section className="form-card"><h1>Thông tin tài khoản</h1>{user ? <><p><strong>Họ tên:</strong> {user.hoTen}</p><p><strong>Tài khoản:</strong> {user.taiKhoan}</p><p><strong>Email:</strong> {user.email}</p></> : <p>Bạn chưa đăng nhập. <NavLink to="/login">Đăng nhập ngay</NavLink></p>}</section> }

export function BookingRoom() {
  const { maLichChieu } = useParams(); const dispatch = useDispatch(); const selectedSeats = useSelector((state) => state.booking.selectedSeats); const room = useRequest(() => movieApi.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`), [maLichChieu]); const [notice, setNotice] = useState(''); const total = selectedSeats.reduce((sum, seat) => sum + seat.giaVe, 0)
  useEffect(() => () => dispatch(clearSeats()), [dispatch, maLichChieu])
  const book = async () => { const user = localStorage.getItem('user'); if (!user) { setNotice('Vui lòng đăng nhập trước khi đặt vé.'); return } try { await movieApi.post('/QuanLyDatVe/DatVe', { maLichChieu: Number(maLichChieu), danhSachVe: selectedSeats.map(({ maGhe, giaVe }) => ({ maGhe, giaVe })) }, { headers: { Authorization: `Bearer ${JSON.parse(user).accessToken}` } }); setNotice('Đặt vé thành công.'); dispatch(clearSeats()) } catch (error) { setNotice(message(error)) } }
  return <><ApiState {...room} empty={!room.data} />{room.data && <section className="booking"><div><h1>{room.data.thongTinPhim.tenPhim}</h1><p>{room.data.thongTinPhim.tenCumRap} — {room.data.thongTinPhim.gioChieu}</p><div className="screen">MÀN HÌNH</div><div className="seat-grid">{room.data.danhSachGhe.map((seat) => <button aria-label={`Ghế ${seat.tenGhe}`} className={`seat ${seat.daDat ? 'booked' : selectedSeats.some((item) => item.maGhe === seat.maGhe) ? 'chosen' : ''}`} disabled={seat.daDat} key={seat.maGhe} onClick={() => dispatch(toggleSeat(seat))}>{seat.tenGhe}</button>)}</div></div><aside className="booking-summary"><h2>Ghế đã chọn</h2><p>{selectedSeats.map((seat) => seat.tenGhe).join(', ') || 'Chưa chọn ghế'}</p><h3>{total.toLocaleString('vi-VN')} ₫</h3>{notice && <p className="error">{notice}</p>}<button className="button" disabled={!selectedSeats.length} onClick={book}>Đặt vé</button></aside></section>}</>
}

export function FilmManagement() {
  const films = useRequest(() => movieApi.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}`), []); const [notice, setNotice] = useState('')
  const remove = async (maPhim) => { if (!window.confirm('Bạn có chắc muốn xóa phim này?')) return; try { await movieApi.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`); films.load() } catch (error) { setNotice(message(error)) } }
  return <><div className="toolbar d-flex justify-content-between align-items-center mb-4"><h1 className="h2 mb-0">Quản lý phim</h1><NavLink className="btn btn-primary" to="/admin/films/add">Thêm phim</NavLink></div>{notice && <p className="alert alert-danger">{notice}</p>}<ApiState {...films} empty={!films.data?.length} />{films.data?.length > 0 && <div className="table-responsive bg-white rounded shadow-sm"><table className="table table-hover align-middle mb-0"><thead className="table-dark"><tr><th>Poster</th><th>Phim</th><th>Ngày khởi chiếu</th><th>Thao tác</th></tr></thead><tbody>{films.data.map((film) => <tr key={film.maPhim}><td><img className="film-poster" src={film.hinhAnh} alt={`Poster ${film.tenPhim}`} onError={(event) => { event.currentTarget.hidden = true }} /></td><td>{film.tenPhim}</td><td>{new Date(film.ngayKhoiChieu).toLocaleDateString('vi-VN')}</td><td><NavLink className="btn btn-sm btn-outline-primary me-1" to={`/admin/films/edit/${film.maPhim}`}>Sửa</NavLink><NavLink className="btn btn-sm btn-outline-secondary me-1" to={`/admin/films/showtime/${film.maPhim}`}>Tạo lịch</NavLink><button className="btn btn-sm btn-outline-danger" onClick={() => remove(film.maPhim)}>Xóa</button></td></tr>)}</tbody></table></div>}</>
}

export function FilmForm() {
  const { maPhim } = useParams(); const navigate = useNavigate(); const [error, setError] = useState(''); const [film, setFilm] = useState(null)
  useEffect(() => { if (maPhim) movieApi.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`).then((r) => setFilm(r.data.content)).catch((err) => setError(message(err))) }, [maPhim])
  const initial = film || { tenPhim: '', trailer: '', moTa: '', ngayKhoiChieu: '', sapChieu: false, dangChieu: true, hot: false, danhGia: 5 }
  const submit = async (values, { setSubmitting }) => { setError(''); try { const data = new FormData(); Object.entries({ ...values, maNhom: GROUP, maPhim: maPhim || undefined }).forEach(([key, value]) => { if (key !== 'hinhAnh' && value !== undefined) data.append(key, value) }); if (values.hinhAnh) data.append('hinhAnh', values.hinhAnh); await movieApi.post(maPhim ? '/QuanLyPhim/CapNhatPhimUpload' : '/QuanLyPhim/ThemPhimUploadHinh', data); navigate('/admin/films') } catch (err) { setError(message(err)) } finally { setSubmitting(false) } }
  if (maPhim && !film && !error) return <p>Đang tải...</p>
  return <section className="form-card"><h1>{maPhim ? 'Cập nhật phim' : 'Thêm phim'}</h1><Formik enableReinitialize initialValues={initial} onSubmit={submit}>{({ isSubmitting, setFieldValue }) => <Form><FormField name="tenPhim" label="Tên phim" errors={{}} touched={{}} /><FormField name="trailer" label="Trailer" errors={{}} touched={{}} /><label>Mô tả<Field as="textarea" name="moTa" /></label><FormField name="ngayKhoiChieu" label="Ngày khởi chiếu" type="date" errors={{}} touched={{}} /><FormField name="danhGia" label="Đánh giá" type="number" errors={{}} touched={{}} /><div className="checks"><label><Field type="checkbox" name="sapChieu" /> Sắp chiếu</label><label><Field type="checkbox" name="dangChieu" /> Đang chiếu</label><label><Field type="checkbox" name="hot" /> Hot</label></div><label>Hình ảnh<input type="file" accept="image/*" onChange={(event) => setFieldValue('hinhAnh', event.currentTarget.files[0])} /></label>{error && <p className="error">{error}</p>}<button className="button" disabled={isSubmitting} type="submit">Lưu phim</button></Form>}</Formik></section>
}

export function ShowtimeForm() {
  const { maPhim } = useParams(); const [systems, setSystems] = useState([]); const [cinemas, setCinemas] = useState([]); const [error, setError] = useState(''); const navigate = useNavigate()
  useEffect(() => { movieApi.get('/QuanLyRap/LayThongTinHeThongRap').then((r) => setSystems(r.data.content)).catch((err) => setError(message(err))) }, [])
  const loadCinemas = async (id) => { try { const r = await movieApi.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`); setCinemas(r.data.content) } catch (err) { setError(message(err)) } }
  return <section className="form-card"><h1>Tạo lịch chiếu</h1><Formik initialValues={{ maHeThongRap: '', maRap: '', ngayChieuGioChieu: '', giaVe: 75000 }} onSubmit={async (values, { setSubmitting }) => { try { await movieApi.post('/QuanLyDatVe/TaoLichChieu', { maPhim: Number(maPhim), maRap: Number(values.maRap), ngayChieuGioChieu: values.ngayChieuGioChieu, giaVe: Number(values.giaVe) }); navigate('/admin/films') } catch (err) { setError(message(err)) } finally { setSubmitting(false) } }}>{({ isSubmitting, setFieldValue }) => <Form><label>Hệ thống rạp<select onChange={(e) => { setFieldValue('maHeThongRap', e.target.value); setFieldValue('maRap', ''); loadCinemas(e.target.value) }}><option value="">Chọn hệ thống</option>{systems.map((item) => <option key={item.maHeThongRap} value={item.maHeThongRap}>{item.tenHeThongRap}</option>)}</select></label><label>Cụm rạp<Field as="select" name="maRap"><option value="">Chọn cụm rạp</option>{cinemas.map((item) => <option key={item.maCumRap} value={item.maRap}>{item.tenCumRap}</option>)}</Field></label><FormField name="ngayChieuGioChieu" label="Ngày giờ chiếu" type="datetime-local" errors={{}} touched={{}} /><FormField name="giaVe" label="Giá vé" type="number" errors={{}} touched={{}} />{error && <p className="error">{error}</p>}<button className="button" disabled={isSubmitting} type="submit">Tạo lịch chiếu</button></Form>}</Formik></section>
}

const userSchema = Yup.object({ taiKhoan: Yup.string().required('Vui lòng nhập tài khoản'), matKhau: Yup.string().min(6, 'Tối thiểu 6 ký tự').required('Vui lòng nhập mật khẩu'), hoTen: Yup.string().required('Vui lòng nhập họ tên'), email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'), soDt: Yup.string().required('Vui lòng nhập số điện thoại'), maLoaiNguoiDung: Yup.string().required('Vui lòng chọn loại người dùng') })

export function UserManagement() {
  const users = useRequest(() => movieApi.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP}`), []); const [query, setQuery] = useState(''); const [notice, setNotice] = useState('')
  const remove = async (taiKhoan) => { if (!window.confirm(`Bạn có chắc muốn xóa tài khoản ${taiKhoan}?`)) return; try { await movieApi.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${encodeURIComponent(taiKhoan)}`); users.load() } catch (error) { setNotice(message(error)) } }
  const visibleUsers = users.data?.filter((user) => [user.taiKhoan, user.hoTen, user.email].some((value) => value?.toLowerCase().includes(query.toLowerCase())))
  return <><div className="toolbar"><h1>Quản lý người dùng</h1><NavLink className="button" to="/admin/users/add">Thêm người dùng</NavLink></div><label className="search-field">Tìm kiếm người dùng<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tài khoản, họ tên hoặc email" /></label>{notice && <p className="error">{notice}</p>}<ApiState {...users} empty={!users.data?.length} />{visibleUsers?.length > 0 && <div className="table-wrap"><table><thead><tr><th>Tài khoản</th><th>Họ tên</th><th>Email</th><th>Loại</th><th>Thao tác</th></tr></thead><tbody>{visibleUsers.map((user) => <tr key={user.taiKhoan}><td>{user.taiKhoan}</td><td>{user.hoTen}</td><td>{user.email}</td><td>{user.maLoaiNguoiDung}</td><td><NavLink to={`/admin/users/edit/${encodeURIComponent(user.taiKhoan)}`}>Sửa</NavLink> <button className="text-button" onClick={() => remove(user.taiKhoan)}>Xóa</button></td></tr>)}</tbody></table></div>}{users.data?.length > 0 && !visibleUsers?.length && <p className="state-message">Không tìm thấy người dùng phù hợp.</p>}</>
}

export function UserForm() {
  const { taiKhoan } = useParams(); const navigate = useNavigate(); const [user, setUser] = useState(null); const [error, setError] = useState('')
  useEffect(() => { if (taiKhoan) movieApi.post('/QuanLyNguoiDung/LayThongTinNguoiDung', { taiKhoan: decodeURIComponent(taiKhoan) }).then((response) => setUser(response.data.content)).catch((err) => setError(message(err))) }, [taiKhoan])
  const initialValues = user || { taiKhoan: '', matKhau: '', hoTen: '', email: '', soDt: '', maLoaiNguoiDung: 'KhachHang' }
  const submit = async (values, { setSubmitting }) => { setError(''); try { const payload = { ...values, maNhom: GROUP }; if (taiKhoan) await movieApi.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', payload); else await movieApi.post('/QuanLyNguoiDung/ThemNguoiDung', payload); navigate('/admin/users') } catch (err) { setError(message(err)) } finally { setSubmitting(false) } }
  if (taiKhoan && !user && !error) return <p>Đang tải...</p>
  return <section className="form-card"><h1>{taiKhoan ? 'Cập nhật người dùng' : 'Thêm người dùng'}</h1><Formik enableReinitialize initialValues={initialValues} validationSchema={userSchema} onSubmit={submit}>{({ errors, touched, isSubmitting }) => <Form><FormField name="taiKhoan" label="Tài khoản" errors={errors} touched={touched} /><FormField name="matKhau" label="Mật khẩu" type="password" errors={errors} touched={touched} /><FormField name="hoTen" label="Họ tên" errors={errors} touched={touched} /><FormField name="email" label="Email" type="email" errors={errors} touched={touched} /><FormField name="soDt" label="Số điện thoại" errors={errors} touched={touched} /><label>Loại người dùng<Field as="select" name="maLoaiNguoiDung"><option value="KhachHang">Khách hàng</option><option value="QuanTri">Quản trị</option></Field></label>{error && <p className="error">{error}</p>}<button className="button" disabled={isSubmitting} type="submit">{isSubmitting ? 'Đang lưu...' : 'Lưu người dùng'}</button></Form>}</Formik></section>
}
