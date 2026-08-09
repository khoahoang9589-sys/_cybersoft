
/**
 * Lớp FoodService 
 * giúp lưu trữ và quản lý nhiều đối tượng food
 * 
 * CRUD
 * create, read, update, delete
 * 
 */

class FoodService {
    constructor() {
        this.arrFood = []; // mảng đối tượng món ăn
    }

    // phương thức
    //input: đối tượng món ăn
    //output: xuất hiện món mới ở trong mảng món ăn
    themMonAn(foodObj) {
        console.log(foodObj)
        //thêm phần tử mới vào mảng
        this.arrFood.push(foodObj)
    }
    /**
     * 
     * Xóa món ăn (xóa phần tử khỏi mảng)
     * B1: dựa vào mã món ăn để tìm vị trí phần tử trong mảng
     * B2: tìm được vị trí để xóa bằng hàm splice() 
     * 
     */
    timViTri(maMonTK){
        console.log("🚀 ~ :32 ~ FoodService ~ timViTri ~ maMon:", maMonTK)
        // findIndex() => kết quả index, find() => kết quả là object
        //anfn: (first) => { second }
        /**
         * findIndex: 
         * 1. duyệt mảng => lấy từng phần tử của mảng
         * 2. dựa vào điều kiện kiểm tra để tìm vị trí phần tử cần xóa khỏi  mảng
         * 3. return vị trí tìm thấy => nếu tìm thấy thì trả về vị trí tìm được, ngược lại trả về -1
         */
        let viTriTK = this.arrFood.findIndex((foodObj) => { 
            return foodObj.maMonAn == maMonTK
         })

        console.log(viTriTK)
        
        // let viTriTK= this.arrFood.findIndex(foodObj => foodObj.maMonAn == maMonTim )

        return viTriTK
    }
    xoaMonAn(maMonTK) {
        //tìm vị trí
        let viTriTK =  this.timViTri(maMonTK)
        if (viTriTK > -1){
            //xóa
            //splice(vị trí bắt đầu của phần tử cần xóa, số lượng phần tử cần xóa)
            this.arrFood.splice(viTriTK,1);
            
        }

    }



}