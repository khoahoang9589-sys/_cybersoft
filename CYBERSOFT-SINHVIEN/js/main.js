
let mangDiem = []
function luuGiaTriDiem() {
    let eleTDScores = document.querySelectorAll("#tblBody .td-scores");
    for (let index = 0; index < eleTDScores.length; index++) {
        let scores = eleTDScores[index].innerHTML
        mangDiem.push(Number(scores))
    }
}

luuGiaTriDiem()
function kiemTraSVGioi(score) {
    //console.log("🚀 ~ :48 ~ kiemTraSVGioi ~ score:", score)
    if (9 <= score && score <= 10) {
        return true
    }
    return false
}

function demSVGioi() {
    let count = 0;
    //console.log(mangDiem)

    for (let index = 0; index < mangDiem.length; index++) {
        let score = mangDiem[index]
        let result = kiemTraSVGioi(score)
        if (result == true) {
            count++
        }
    }
    document.querySelector("#soSVGioi").innerHTML = count
}

document.querySelector("#btnSoSVGioi").onclick = demSVGioi;

function hienThiDSTren5() {
    //TODO B3: danh sách row dư liệu sinh viên của table
    let rowSV = document.querySelectorAll("#tblBody tr");
    console.log(rowSV)
    let chuoiTenSV = "";

    //? index: 0    1     2    3    4    5    6
    //? (7)  [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
    for (let index = 0; index < mangDiem.length; index++) {
        let score = mangDiem[index]
        console.log("🚀 ~ :113 ~ hienThiDSTren5 ~ score:", score)
        //TODO B2: Kiểm tra có phải diem > 5
        if (score > 5){
            //TODO B3: tìm được tên sinh viên đang có điểm > 5
            console.log("Điểm trên 5", index) 
            console.log(rowSV[index]) //check có đúng hàng sinh viên đang kiểm tra không
            console.log(rowSV[index].cells[2]) // lấy được thẻ td đang chứa tên sinh viên
            let tenSV = rowSV[index].cells[2].innerHTML; // lấy nội dung tên sv từ cột tên
            console.log("🚀 ~ :122 ~ hienThiDSTren5 ~ tenSV:", tenSV)
            //TODO B4: nối chuỗi danh sách tên sinh viên
            let chuoiTenMoi = tenSV + " - " + score + ", "
            console.log("🚀 ~ :129 ~ hienThiDSTren5 ~ chuoiTenMoi:", chuoiTenMoi)
            // chuỗi tên cũ + chuỗi tên mới => gán giá trị nối chuỗi vào biến tên chuoiTenSV
            // chuoiTenSV = chuoiTenSV + chuoiTenMoi 
            chuoiTenSV += chuoiTenMoi 
        }
        console.log("🚀 ~ :130 ~ hienThiDSTren5 ~ chuoiTenSV:", chuoiTenSV)
    }

    //TODO B5: Hiên thị danh sách lên UI
    document.querySelector("#dsDiemHon5").innerHTML = chuoiTenSV

} 

document.querySelector("#btnSVDiemHon5").onclick = hienThiDSTren5;