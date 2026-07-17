// bài 1
function QlyTuyenSinh() {
    let inputScore1 = Number(document.getElementById("inputScore1").value);
    let inputScore2 = Number(document.getElementById("inputScore2").value);
    let inputScore3 = Number(document.getElementById("inputScore3").value);
    let inputScore4 = Number(document.getElementById("inputScore4").value);
    let selLocation = Number(document.getElementById("selLocation").value);
    let selUser = Number(document.getElementById("selUser").value);

    if (inputScore2 > 0 && inputScore3 > 0 && inputScore4 > 0) {
        let tongDiem = inputScore2 + inputScore3 + inputScore4 + selLocation + selUser;
        document.getElementById("txtResult").innerHTML = tongDiem < inputScore1 ? "Bạn đã rớt. Tổng điểm: " + tongDiem : "Bạn đã đậu. Tổng điểm: " + tongDiem;
    } else {
        document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
}
document.getElementById("btnResult").onclick = QlyTuyenSinh;

// bài 2
const kw1 = 500;
const kw2 = 650;
const kw3 = 850;
const kw5 = 1100;
const kw6 = 1300;
function TinhTienDien() {
    let n = document.getElementById("inputName").value;
    let k = Number(document.getElementById("inputKW").value);
    let t = 0;
    k > 0 && k <= 50 ? t = k * kw1 : k > 50 && k <= 100 ? t = 50 * kw1 + (k - 50) * kw2 : k > 100 && k <= 200 ? t = 50 * kw1 + 50 * kw2 + (k - 100) * kw3 : k > 200 && k <= 350 ? t = 50 * kw1 + 50 * kw2 + 100 * kw3 + (k - 200) * kw5 : k > 350 ? t = 50 * kw1 + 50 * kw2 + 100 * kw3 + 150 * kw5 + (k - 350) * kw6 : alert("Số KW không hợp lệ! Vui lòng nhập lại");
    t = new Intl.NumberFormat("vn-VN").format(t);
    document.getElementById("txtElecBill").innerHTML = "Họ tên: " + n + "; Tiền điện: " + t;
}
document.getElementById("btnElecBill").onclick = TinhTienDien;

// bài 3
function TinhThue() {
    let n = document.getElementById("inputName2").value;
    let k = Number(document.getElementById("inputSalary").value) - 4e6 - 16e5 * document.getElementById("inputUser").value;
    let tax = 0;
    k > 0 && k <= 6e7 ? tax = .05 * k : k > 6e7 && k <= 12e7 ? tax = .1 * k : k > 12e7 && k <= 21e7 ? tax = .15 * k : k > 21e7 && k <= 384e6 ? tax = .2 * k : k > 384e6 && k <= 624e6 ? tax = .25 * k : k > 624e6 && k <= 96e7 ? tax = .3 * k : k > 96e7 ? tax = .35 * k : alert("Số tiền thu nhập không hợp lệ");
    tax = new Intl.NumberFormat("vn-VN").format(tax);
    document.getElementById("txtTax").innerHTML = "Họ tên: " + n + "; Tiền thuế thu nhập cá nhân: " + tax + " VND";
}
document.getElementById("btnTax").onclick = TinhThue;

// bài 4
function disableInput() {
    var e = document.getElementById("selCustomer").value;
    document.getElementById("inputConnect").style.display = "company" == e ? "block" : "none"
}
function tinhTienCap() {
    let type = document.getElementById("selCustomer").value;
    let id = document.getElementById("inputID").value;
    let chanel = Number(document.getElementById("inputChanel").value);
    let connect = Number(document.getElementById("inputConnect").value);
    let total = 0;
    type == "company" ? total = tinhTong(15, 75, 50, chanel, connect, 5) : type == "user" ? total = tinhTong(4.5, 20.5, 7.5, chanel, 0, 0) : alert("Hãy chọn loại khách hàng");
    document.getElementById("txtNet").innerHTML = "Mã khách hàng: " + id + "; Tiền cáp: " + new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(total)

}
function tinhTong(hdon, cban, ccap, kenh, knoi, n) {
    // 1. Tính tổng cơ bản
    let m = hdon + cban + (ccap * kenh);
    // 2. Nếu knoi vượt mức 10, tính thêm phần phụ trội
    if (knoi> 10) {
        let phanVuotMuc = knoi - 10;
        m = m + (phanVuotMuc * n);
    }
    // 3. Trả về kết quả cuối cùng
    return m;
}
document.getElementById("btnNet").onclick = tinhTienCap;