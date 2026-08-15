class NhanVien {
    constructor(tk, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam) {
        this.tk = tk
        this.hoTen = hoTen
        this.email = email
        this.matKhau = matKhau
        this.ngayLam = ngayLam
        this.luongCB = parseFloat(luongCB)
        this.chucVu = chucVu
        this.gioLam = parseFloat(gioLam)
        this.tongLuong = this.tinhTongLuong()
        this.loaiNV = this.xepLoai()
    }

    tinhTongLuong() {
        if (this.chucVu === 'Giám đốc') {
            return this.luongCB * 3
        } else if (this.chucVu === 'Trưởng Phòng') {
            return this.luongCB * 2
        }
        return this.luongCB
    }

    xepLoai() {
        if (this.gioLam >= 192) {
            return 'Xuất sắc'
        } else if (this.gioLam >= 176) {
            return 'Giỏi'
        } else if (this.gioLam >= 160) {
            return 'Khá'
        }
        return 'Trung bình'
    }
}

class NhanVienService {
    constructor() {
        this.arrNhanVien = []
    }

    themNhanVien(nvObj) {
        this.arrNhanVien.push(nvObj)
    }

    xoaNhanVien(tk) {
        let viTri = this.timViTri(tk)
        if (viTri > -1) {
            this.arrNhanVien.splice(viTri, 1)
        }
    }

    timViTri(tk) {
        return this.arrNhanVien.findIndex((nv) => nv.tk === tk)
    }
}

let nvSer = new NhanVienService()

function luuLocalStorage() {
    let jsonNV = JSON.stringify(nvSer.arrNhanVien)
    localStorage.setItem("DANHSACHNV", jsonNV)
}

function layDataLocalStorage() {
    if (localStorage.getItem("DANHSACHNV") != null) {
        nvSer.arrNhanVien = JSON.parse(localStorage.getItem("DANHSACHNV"))
        hienThiDanhSach(nvSer.arrNhanVien)
    }
}

layDataLocalStorage()

function layDuLieuTuForm() {
    console.log("layDuLieuTuForm called")
    let tk = document.querySelector("#tknv").value.trim()
    let hoTen = document.querySelector("#name").value.trim()
    let email = document.querySelector("#email").value.trim()
    let matKhau = document.querySelector("#password").value.trim()
    let ngayLam = document.querySelector("#datepicker").value.trim()
    let luongCB = document.querySelector("#luongCB").value.trim()
    let chucVu = document.querySelector("#chucvu").value
    let gioLam = document.querySelector("#gioLam").value.trim()

    return { tk, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam }
}

function xoaThongBao() {
    let tbElements = document.querySelectorAll(".sp-thongbao")
    for (let tb of tbElements) {
        tb.innerHTML = ''
    }
}

function hienThiLoi(id, message) {
    document.querySelector(id).innerHTML = message
}

function kiemTraHopLe(data) {
    console.log("kiemTraHopLe called with:", data)
    let isValid = true

    if (data.tk === '') {
        hienThiLoi('#tbTKNV', 'Tài khoản không được để trống')
        console.log("FAIL: tk rỗng")
        isValid = false
    } else if (!/^\d{4,6}$/.test(data.tk)) {
        hienThiLoi('#tbTKNV', 'Tài khoản phải từ 4 đến 6 ký số')
        console.log("FAIL: tk không hợp lệ")
        isValid = false
    }

    if (data.hoTen === '') {
        hienThiLoi('#tbTen', 'Họ tên không được để trống')
        console.log("FAIL: hoTen rỗng")
        isValid = false
    } else if (!/^[A-Za-zÀ-ỹ\s]+$/.test(data.hoTen)) {
        hienThiLoi('#tbTen', 'Họ tên phải là chữ')
        console.log("FAIL: hoTen không phải chữ")
        isValid = false
    }

    if (data.email === '') {
        hienThiLoi('#tbEmail', 'Email không được để trống')
        console.log("FAIL: email rỗng")
        isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        hienThiLoi('#tbEmail', 'Email không đúng định dạng')
        console.log("FAIL: email không hợp lệ")
        isValid = false
    }

    if (data.matKhau === '') {
        hienThiLoi('#tbMatKhau', 'Mật khẩu không được để trống')
        console.log("FAIL: matKhau rỗng")
        isValid = false
    } else if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,10}$/.test(data.matKhau)) {
        hienThiLoi('#tbMatKhau', 'Mật khẩu từ 6-10 ký tự, có ít nhất 1 số, 1 chữ hoa, 1 ký tự đặc biệt')
        console.log("FAIL: matKhau không hợp lệ")
        isValid = false
    }

    if (data.ngayLam === '') {
        hienThiLoi('#tbNgay', 'Ngày làm không được để trống')
        console.log("FAIL: ngayLam rỗng")
        isValid = false
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(data.ngayLam)) {
        hienThiLoi('#tbNgay', 'Ngày làm không đúng định dạng mm/dd/yyyy')
        console.log("FAIL: ngayLam không hợp lệ")
        isValid = false
    }

    if (data.luongCB === '') {
        hienThiLoi('#tbLuongCB', 'Lương cơ bản không được để trống')
        console.log("FAIL: luongCB rỗng")
        isValid = false
    } else {
        let luong = parseFloat(data.luongCB)
        if (isNaN(luong) || luong < 1000000 || luong > 20000000) {
            hienThiLoi('#tbLuongCB', 'Lương cơ bản từ 1.000.000 đến 20.000.000')
            console.log("FAIL: luongCB không hợp lệ")
            isValid = false
        }
    }

    if (data.chucVu === '' || data.chucVu === 'Chọn chức vụ') {
        hienThiLoi('#tbChucVu', 'Chức vụ không được để trống')
        console.log("FAIL: chucVu rỗng")
        isValid = false
    }

    if (data.gioLam === '') {
        hienThiLoi('#tbGiolam', 'Số giờ làm không được để trống')
        console.log("FAIL: gioLam rỗng")
        isValid = false
    } else {
        let gio = parseFloat(data.gioLam)
        if (isNaN(gio) || gio < 80 || gio > 200) {
            hienThiLoi('#tbGiolam', 'Số giờ làm từ 80 đến 200')
            console.log("FAIL: gioLam không hợp lệ")
            isValid = false
        }
    }

    console.log("kiemTraHopLe result:", isValid)
    return isValid
}

function hienThiDanhSach(arrNhanVien) {
    let listTR = ""
    for (let nv of arrNhanVien) {
        let trELE = `
        <tr>
            <td>${nv.tk}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong.toLocaleString('vi-VN')} VNĐ</td>
            <td>${nv.loaiNV}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="suaNhanVien('${nv.tk}')">
                    <i class="fa fa-pencil"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="xoaNhanVien('${nv.tk}')">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>
        `
        listTR += trELE
    }
    document.querySelector("#tableDanhSach").innerHTML = listTR
}

function themNhanVien() {
    console.log("themNhanVien called")
    xoaThongBao()

    let data = layDuLieuTuForm()
    console.log("Form data:", data)

    if (!kiemTraHopLe(data)) {
        console.log("Validation failed")
        return
    }
    console.log("Validation passed")

    let nv = new NhanVien(
        data.tk,
        data.hoTen,
        data.email,
        data.matKhau,
        data.ngayLam,
        data.luongCB,
        data.chucVu,
        data.gioLam
    )
    console.log("Created NV:", nv)

    nvSer.themNhanVien(nv)
    console.log("Array after add:", nvSer.arrNhanVien.length)
    hienThiDanhSach(nvSer.arrNhanVien)

    luuLocalStorage()

    $('#myModal').modal('hide')
    xoaForm()
    console.log("themNhanVien done")
}

function xoaNhanVien(tk) {
    console.log("xoaNhanVien called, tk:", tk)
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
        nvSer.xoaNhanVien(tk)
        console.log("Array after delete:", nvSer.arrNhanVien.length)
        hienThiDanhSach(nvSer.arrNhanVien)

        luuLocalStorage()
    }
}

function suaNhanVien(tk) {
    console.log("suaNhanVien called, tk:", tk)
    let nv = nvSer.arrNhanVien.find(nv => nv.tk === tk)
    console.log("Found NV:", nv)

    document.querySelector("#tknv").value = nv.tk
    document.querySelector("#name").value = nv.hoTen
    document.querySelector("#email").value = nv.email
    document.querySelector("#password").value = nv.matKhau
    document.querySelector("#datepicker").value = nv.ngayLam
    document.querySelector("#luongCB").value = nv.luongCB
    document.querySelector("#chucvu").value = nv.chucVu
    document.querySelector("#gioLam").value = nv.gioLam

    nvSer.xoaNhanVien(tk)
    console.log("Removed old NV, array length:", nvSer.arrNhanVien.length)

    $('#myModal').modal('show')
}

function xoaForm() {
    console.log("xoaForm called")
    document.querySelector("#tknv").value = ''
    document.querySelector("#name").value = ''
    document.querySelector("#email").value = ''
    document.querySelector("#password").value = ''
    document.querySelector("#datepicker").value = ''
    document.querySelector("#luongCB").value = ''
    document.querySelector("#chucvu").value = ''
    document.querySelector("#gioLam").value = ''
    console.log("xoaForm done")
}

function hienThiDanhSach(arrNhanVien) {
    console.log("hienThiDanhSach called, count:", arrNhanVien.length)
    let listTR = ""
    for (let nv of arrNhanVien) {
        let trELE = `
        <tr>
            <td>${nv.tk}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong.toLocaleString('vi-VN')} VNĐ</td>
            <td>${nv.loaiNV}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="suaNhanVien('${nv.tk}')">
                    <i class="fa fa-pencil"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="xoaNhanVien('${nv.tk}')">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>
        `
        listTR += trELE
    }
    document.querySelector("#tableDanhSach").innerHTML = listTR
    console.log("hienThiDanhSach rendered")
}

function timKiem() {
    console.log("timKiem called")
    let loaiTim = document.querySelector("#searchName").value.trim().toLowerCase()
    console.log("Search keyword:", loaiTim)

    if (loaiTim === '') {
        hienThiDanhSach(nvSer.arrNhanVien)
        return
    }

    let ketQua = nvSer.arrNhanVien.filter((nv) => {
        return nv.loaiNV.toLowerCase().includes(loaiTim)
    })
    console.log("Search result count:", ketQua.length)

    hienThiDanhSach(ketQua)
}

function sapXepTang() {
    console.log("sapXepTang called")
    nvSer.arrNhanVien.sort((a, b) => a.tk.localeCompare(b.tk))
    hienThiDanhSach(nvSer.arrNhanVien)
}

function sapXepGiam() {
    console.log("sapXepGiam called")
    nvSer.arrNhanVien.sort((a, b) => b.tk.localeCompare(a.tk))
    hienThiDanhSach(nvSer.arrNhanVien)
}

document.querySelector("#btnThemNV").onclick = function() {
    // console.log("btnThemNV clicked")
    themNhanVien()
}
document.querySelector("#btnCapNhat").onclick = function() {
    // console.log("btnCapNhat clicked")
    themNhanVien()
}
document.querySelector("#btnTimNV").onclick = function() {
    // console.log("btnTimNV clicked")
    timKiem()
}
document.querySelector("#SapXepTang").onclick = function() {
    // console.log("SapXepTang clicked")
    sapXepTang()
}
document.querySelector("#SapXepGiam").onclick = function() {
    // console.log("SapXepGiam clicked")
    sapXepGiam()
}


//Hoang Anh Khoa