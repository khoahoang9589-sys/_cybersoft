

// Lấy giá trị từ form và tạo đối tượng food1
function themMonAn() {
    //lấy giá trị từ form
    let maMonAn = document.querySelector("#foodID").value;
    let tenMonAn = document.querySelector("#tenMon").value;
    let loaiMonAn = document.querySelector("#loai").value;
    let giaTien = document.querySelector("#giaMon").value;
    let khuyenMai = document.querySelector("#khuyenMai").value;
    let tinhTrang = document.querySelector("#tinhTrang").value;
    let hinhAnh = document.querySelector("#hinhMon").value;
    let moTa = document.querySelector("#moTa").value;

    console.log(maMonAn, tenMonAn, loaiMonAn, giaTien, khuyenMai, tinhTrang, hinhAnh, moTa);

    // tạo đối tượng food1
    let food1 = new Food1(maMonAn, tenMonAn, loaiMonAn, giaTien, khuyenMai, tinhTrang, hinhAnh, moTa)
    food1.tinhGiaSauKM();

    console.log(food1);
    console.table(food1);

    // hiển thị ra giao diện
    hienThiMonAn(food1);

}

document.querySelector("#btnThemMon").onclick = themMonAn;

// input: đối tượng món ăn mới

function hienThiMonAn(foodObject) {
    // imgMonAn, spMa, spTenMon, spLoaiMon, spGia, spKM, spGiaKM, spTT, pMoTa

    // document.querySelector("#imgMonAn").src = foodObject.hinhAnh;
    document.querySelector("#imgMonAn").src = `../../assets/img/${foodObject.hinhAnh}`;
    document.querySelector("#spMa").innerHTML = foodObject.maMonAn;
    document.querySelector("#spTenMon").innerHTML = foodObject.tenMonAn;
    //loai1: "Chay", loai2: "Mặn"
    // let loai = "";
    // if (foodObject.loaiMonAn == "loai1") {
    //     loai = "Chay";
    // }else{
    //     loai = "Mặn";
    // }
    //? toán tử 3 ngôi
//    foodObject.loaiMonAn == "loai1" ? loai = "Chay" : loai = "Mặn";

    document.querySelector("#spLoaiMon").innerHTML = `${foodObject.loaiMonAn == "loai1" ? "Chay" : "Mặn"}`;
    document.querySelector("#spGia").innerHTML = Number(foodObject.giaTien).toLocaleString();
    document.querySelector("#spKM").innerHTML = `${foodObject.khuyenMai}%`;
    document.querySelector("#spGiaKM").innerHTML = Number(foodObject.giaSauKM).toLocaleString();
    document.querySelector("#spTT").innerHTML = `${foodObject.tinhTrang == 1 ? "Còn" : "Hết"}`;
    document.querySelector("#pMoTa").innerHTML = foodObject.moTa;


// data & info
// data (dữ liệu): loai1, loai2, 0,1,true, false, F001
// info (thông tin ): chay, mặn, còn , hết

}