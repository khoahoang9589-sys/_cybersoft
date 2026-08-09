/**
 * Object
 * + Thuộc tính (property): đặc điểm của đối tượng là các thông tin của đối tượng cần lưu, được khai báo dưới dạng key: value
 * + Phương thức (method): các hành động của đối tượng (các tính năng liên quan đến thông tin của đối tượng), được khai báo dưới dạng key: function() {}
 */

//khai hàm cơ bản
// function hienThiThongTinSV() {}
// let hienThiThongTinSV = function () {}
// let hienThiThongTinSV  = () => {  }

//? Khai báo
// từkhóa tênbiến = {
//?    tên thuộc tính: giá trị,
//?    tên phương thức: function() {}
// }

let sv1 = {
    // thuộc tính (thông tin của đối tượng sv)
    maSV: "SV12345",
    hoTen: "Nguyễn Văn A",
    tuoi: 20,
    diemList: [9, 8, 7, 6],
    // phương thức
    hienThiThongTin: function () {
        // console.log("phương thức hienThiThongTin");
        //? truy xuất thuộc tính trong đối tương
        //? this : đại dien cho đối tượng hiện tại (sv1)
        console.log("Mã SV: " + this.maSV + 
            ", Họ tên: " + this.hoTen + ", Tuổi: " + this.tuoi);
        //? template string (chuỗi mẫu) : `${<biểu thức>}`
        console.log(`Mã SV: ${this.maSV} , Họ tên: ${this.hoTen}, Tuổi: ${this.tuoi}`);
       
    }
    
}

//? sử dụng object
console.log(sv1);
// truy xuất thuộc tính (xem giá trị thông tin sv) bên ngoài đối tượng
//? <ten dối tượng>.<tên thuộc tính>
console.log(sv1.maSV);
console.log(sv1.hoTen);

//gọi phương thức
//?<ten dối tượng>.<tên phương thức>()
sv1.hienThiThongTin();


let sv2 = {
    // thuộc tính (thông tin của đối tượng sv)
    maSV: "SV5435",
    hoTen: "Nguyễn Văn B",
    tuoi: 20,
    diemList: [6, 9, 0, 1],
    // phương thức
    hienThiThongTin: function () {
        // console.log("phương thức hienThiThongTin");
        //? truy xuất thuộc tính trong đối tương
        //? this : đại dien cho đối tượng hiện tại (sv1)
        console.log("Mã SV: " + this.maSV +
            ", Họ tên: " + this.hoTen + ", Tuổi: " + this.tuoi);
        //? template string (chuỗi mẫu) : `${<biểu thức>}`
        console.log(`Mã SV: ${this.maSV} , Họ tên: ${this.hoTen}, Tuổi: ${this.tuoi}`);

    }
}

//? sử dụng object
console.log(sv2);
