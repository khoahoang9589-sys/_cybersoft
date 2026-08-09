/**
 * Class (lớp đối tượng): là khuôn mẫu để tạo ra các đối tượng (object)
 * Object (đối tượng): là một thể hiện của lớp đối tượng
 * 
 * Ví dụ: Class : khuôn bánh trung thu, Object: từng loại bánh trung thu
 * 
 * 1. Khai báo class
 * 2. Tạo đối tượng từ class
 * 3. Sử dụng đối tượng
 */

//? khai báo class
// class <tên lớp> {
//    thuộc tính (property): đặc điểm của đối tượng là các thông tin của đối tượng cần lưu, được khai báo dưới dạng key: value
//    phương thức (method): các hành động của đối tượng (các tính năng liên quan đến thông tin của đối tượng), được khai báo dưới dạng key: function() {}
//}

//Đặt tên: viết in hoa chữ cái đầu tiên của từng từ (PascalCase)
class SinhVien {
    //constructor là phương thức đặc biệt, được gọi khi tạo đối tượng từ class
    constructor(maSV, hoTen, tuoi, diemList) {
        // thuộc tính (thông tin của đối tượng sv) 
        this.maSV = maSV
        this.hoTen = hoTen
        this.tuoi = tuoi
        this.diemList = diemList
    }

    // phương thức
    // tính năng chung
    hienThiThongTin() {
        console.log(`Mã SV: ${this.maSV} , Họ tên: ${this.hoTen}, Tuổi: ${this.tuoi}`);
    }

}

//tạo đối tượng từ class
// new <tên lớp>(<tham số truyền vào constructor>)
// new : tạo thể hiện (instance) của lớp đối tượng
let sv3 = new SinhVien("SV76478", "Nguyễn Văn C", 20, [9, 8, 7, 6]);
console.log(sv3);
sv3.hienThiThongTin();

let sv4 = new SinhVien("SV76653", "Nguyễn Văn D", 20, [9, 8, 7, 6]);
console.log(sv4);
sv4.hienThiThongTin();