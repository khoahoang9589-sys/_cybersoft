// bài 1
document.getElementById("btnResult").onclick = function () {
    let inputScore1 = Number(document.getElementById("inputScore1").value);
    let inputScore2 = Number(document.getElementById("inputScore2").value);
    let inputScore3 = Number(document.getElementById("inputScore3").value);
    let inputScore4 = Number(document.getElementById("inputScore4").value);
    let selLocation = Number(document.getElementById("selLocation").value);
    let selUser = Number(document.getElementById("selUser").value);

    let tongDiem = inputScore2 + inputScore3 + inputScore4 + selLocation + selUser;

    if (inputScore2 == 0 || inputScore3 == 0 || inputScore4 == 0) {
            document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
    else if (tongDiem < inputScore1) {
        document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Tổng điểm: " + tongDiem;
    } else {
        document.getElementById("txtResult").innerHTML = "Bạn đã đậu. Tổng điểm: " + tongDiem;
    }
    
}

// bài 2
let muc1 = 500;
let muc2 = 650;
let muc3 = 850;
let muc5 = 1100;
let muc6 = 1300;
document.getElementById("btnElecBill").onclick = function () {
    let inputName = document.getElementById("inputName").value;
    let inputKW = Number(document.getElementById("inputKW").value);
    
}
// bài 3

// bài 4

let nhaDan_phiXuLyHoaDon = 4.5;
let nhaDan_phiDichVuCoBan = 20.5;
let nhaDan_thueKenhCaoCap = 7.5;
let doanhNghiep_phiXuLyHoaDon = 15;
let doanhNghiep_phiDichVuCoBan = 75;
let doanhNghiep_thueKenhCaoCap = 50;
