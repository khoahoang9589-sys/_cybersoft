/**
 * Class Food1
 */

class Food1 {
    constructor(maMonAn, tenMonAn, loaiMonAn, giaTien, khuyenMai, tinhTrang, hinhAnh, moTa) {
        this.maMonAn = maMonAn;
        this.tenMonAn = tenMonAn;
        this.loaiMonAn = loaiMonAn; //loai1: "Chay", loai2: "Mặn"
        this.giaTien = giaTien;
        this.khuyenMai = khuyenMai;
        this.tinhTrang = tinhTrang; //0: "Hết", 1: "Còn"
        this.hinhAnh = hinhAnh;
        this.moTa = moTa;
        this.giaSauKM = 0; // giá trị tính toán từ giá tiền và khuyến mãi
    }

    // phương thức
    tinhGiaSauKM() {
        // tính giá sau khuyến mãi
        // CT1: giá sauKM = 10.000  - (10.000 * 20 /100 ) => 8.000 (giá sau KM)
        // giá gốc 10.000 , giảm 20% => chỉ cần đưa 80% tiền
        // CT2:  100% -20% = 80% => giá sau KM = 10.000 * 80 /100 => 8.000
        this.giaSauKM = (100 - this.khuyenMai)* this.giaTien / 100;
    }

}