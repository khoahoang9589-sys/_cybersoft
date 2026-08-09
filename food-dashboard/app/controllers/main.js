
//Global variable
let foodSer = new FoodService();

/**
 * localstorage
 * 
 * TODO lưu mảng food vào localstorage
 * 
 *? localStorage: đối tượng có sẵn của js
 *? setItem(): lưu dữ liệu xuống localStorage
 *? => setItem(key, value): key(tên localStorage mà dev muốn lưu), value: dữ liệu muốn lưu
 *? value: chỉ lưu dạng JSON hoặc string => mảng food (Array Food) chuyển sang dạng JSON
 *? JSON: đối tượng có sẵn của js, chuỗi JSON chỉ lưu thuộc tính không lưu phương thức
 *? JSON.stringify(): giúp chuyển sang dạng JSON
 * 
 * 
 * lấy dữ liệu từ localstorage
 */


// khi có sự thay đổi của mảng food thì phải gọi lại hàm luuLocalStorage
// setLocalStorage
function luuLocalStorage() {
    // mảng => JSON
    let jsonFood = JSON.stringify(foodSer.arrFood)
    localStorage.setItem("FOODLIST", jsonFood)

}

//getLocalStorage
function layDataLocalStorage() {

    // JSON => mảng
    if (localStorage.getItem("FOODLIST") != null) {
        foodSer.arrFood = JSON.parse(localStorage.getItem("FOODLIST"))
        console.log(foodSer.arrFood)
        hienThiFoodList(foodSer.arrFood)
    }

}

//gọi khi load web => lấy sẵn dữ liệu khi vừa trang web
layDataLocalStorage()

/**
 * input: mảng món ăn
 *  <tr> <td>F001</td> <td>Món hải sản</td> </tr> 
 * <tr></tr> <tr></tr>
 * 
 * output: các hàng (tr) của table , mỗi hàng là 1 món ăn
 */
function hienThiFoodList(arrFood) {

    let listTR = ""
    //For, for in, for of
    for (let foodObj of arrFood) {
        console.log(foodObj)
        // tạo từng dòng tr 
        // mỗi td chứa 1 gia tri thuộc tính của obj
        let trELE = `
        <tr>
            <td>${foodObj.maMonAn}</td>
            <td>${foodObj.tenMonAn}</td>
             <td>${foodObj.loaiMonAn == "loai1" ? "Chay" : "Mặn"}</td>
             <td>${Number(foodObj.giaTien).toLocaleString()}</td>
             <td>${foodObj.khuyenMai}%</td>
             <td>${foodObj.giaSauKM.toLocaleString()}</td>
             <td>${foodObj.tinhTrang == 1 ? "Còn" : "Hết"}</td>
             <td>
               <button type="button" class="btn btn-info">Xem</button>
                <button onclick="xoaMon('${foodObj.maMonAn}')" type="button" class="btn btn-danger">Xóa</button>
             </td>
        </tr>
        `
        //chuỗi các tr
        listTR += trELE
    }

    console.log(listTR)
    document.querySelector("#tbodyFood").innerHTML = listTR


    //// Hàm giúp duyệt mảng: map()
    // let listTRMap = ""
    // arrFood.map((foodObj, index) => {
    //     let trELE = `
    //     <tr>
    //         <td>${foodObj.maMonAn}</td>
    //         <td>${foodObj.tenMonAn}</td>
    //          <td>${foodObj.loaiMonAn == "loai1" ? "Chay" : "Mặn"}</td>
    //          <td>${Number(foodObj.giaTien).toLocaleString()}</td>
    //          <td>${foodObj.khuyenMai}%</td>
    //          <td>${foodObj.giaSauKM.toLocaleString()}</td>
    //          <td>${foodObj.tinhTrang == 1 ? "Còn" : "Hết"}</td>
    //          <td>
    //            <button type="button" class="btn btn-info">Xem</button>
    //             <button type="button" class="btn btn-danger">Xóa</button>
    //          </td>
    //     </tr>
    //     `
    //     //chuỗi các tr
    //     listTRMap += trELE
    // })

    // document.querySelector("#tbodyFood").innerHTML = listTRMap

    

}



/**
 * hàm thêm món ăn mới
 *     + lấy giá trị từ form
 *     + tạo đối tượng món ăn mới
 *     + thêm đối tượng mới vào mảng đối tượng
 * 
 */

function themMonAnMoi() {
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

    //tạo đối tượng món ăn mới
    let foodObj = new Food(maMonAn, tenMonAn, loaiMonAn, giaTien, khuyenMai, tinhTrang, hinhAnh, moTa)
    foodObj.tinhGiaSauKM()

    console.log(foodObj)
    // thêm đối tượng mới vào mảng đối tượng
    foodSer.themMonAn(foodObj)
    console.log(foodSer.arrFood)

    //Lưu localstorage
    luuLocalStorage()


}

document.querySelector("#btnThemMon").onclick = themMonAnMoi;


function xoaMon(maMonTK){
    console.log(maMonTK)
    foodSer.xoaMonAn(maMonTK)
    luuLocalStorage()
    hienThiFoodList(foodSer.arrFood)
}

