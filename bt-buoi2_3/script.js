// BÀI 1 
document.getElementById("btn-bt1").addEventListener("click", function () {
    event.preventDefault();
    let tienLuong = document.getElementById("inputLuong").value
    let ngayCong = document.getElementById("inputNgaycong").value
    let result = tienLuong * ngayCong
    document.getElementById("kq-bt1").innerHTML = new Intl.NumberFormat('vn-VN').format(result);
})

// BÀI 2
document.getElementById('btn-bt2').addEventListener("click", function () {
    event.preventDefault();
    let num1 = Number(document.getElementById("inputN1").value)
    let num2 = Number(document.getElementById("inputN2").value)
    let num3 = Number(document.getElementById("inputN3").value)
    let num4 = Number(document.getElementById("inputN4").value)
    let num5 = Number(document.getElementById("inputN5").value)
    let result = (num1 + num2 + num3 + num4 + num5) / 5
    document.getElementById("kq-bt2").innerHTML = result
})

// BÀI 3
document.getElementById("btn-bt3").addEventListener("click", function () {
    event.preventDefault();
    let soTien = document.getElementById("inputPrice").value
    let tyGia = 23500
    let result = soTien * tyGia
    document.getElementById("kq-bt3").innerHTML = new Intl.NumberFormat('vn-VN').format(result);
})

// BÀI 4 
document.getElementById("btn-bt4").addEventListener("click", function () {
    event.preventDefault();
    let chieuDai = Number(document.getElementById("inputDai").value)
    let chieuRong = Number(document.getElementById("inputRong").value)
    let chuVi = (chieuDai + chieuRong) * 2
    let dienTich = chieuDai * chieuRong
    document.getElementById("kq-bt4").innerHTML = "Diện tích: " + dienTich + "; Chu vi: " + chuVi
})
// BÀI 5 
document.getElementById("btn-bt5").addEventListener("click", function () {
    event.preventDefault();
    let so2Chuso = document.getElementById("inputTong2").value
    let hangChuc = so2Chuso % 10
    let hangDonvi = Math.floor(so2Chuso / 10)
    let tong2so = hangChuc + hangDonvi
    document.getElementById("kq-bt5").innerHTML = tong2so
})