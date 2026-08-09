class Food{
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
        this.giaSauKM = (100 - this.khuyenMai) * this.giaTien / 100;
    }
}