
               // 0   1    2   
let foodList = ['🍣', '🌭', '🍥'] 

/**
 * for
 * ưu điểm: code dễ đọc
 * nhược điểm: khai báo dài
 */
console.log("For");
for (let index = 0; index < foodList.length; index++) {
    //lấy giá trị dựa vào index(vị trí) phần tử của mảng
    console.log(foodList[index]) ;
}


/**
 * for in
 * ưu điểm: tự biết index bắt đầu từ 0, tự xác định điều kiện dừng (khi hết phần tử của mảng) => gọn code
 * giúp lấy giá trị các thuộc tính của obj
 * 
 * nhược điểm; khó hiểu code khi mới học
 */
console.log("For in");
for (let index in foodList) {
    //lấy giá trị dựa vào index(vị trí) phần tử của mảng
    console.log(foodList[index]);
}

let foodObjDemo = {
    //thuộc tính => tên thuộc tính : giá trị 
    // (key:value)
    id:"F001",
    name:"Hải sản",
    price:10000
}
console.log(foodObjDemo.id)
console.log(foodObjDemo.name)
console.log(foodObjDemo.price)
console.log(foodObjDemo['price'])
// duyệt đối tượng (lấy từng thuộc của đối tượng)

for (const key in foodObjDemo) {
    console.log(key)// 'id', 'name', 'price'
    console.log(foodObjDemo[key]);
}


/**
 * For of
 * ưu điểm: gọn code
 * 
 * nhược điểm: khó đọc hiểu
 */

for (const value of foodList) {
    //lấy trực tiếp giá trị của phần tử không cần dùng index
    console.log(value)
}

/**
 * map()
 * chỉ dùng được với Array
 */
// tham số: object, mảng, string ,number, function (có return)
// mảng.map(hàm ẩn danh)
// function (){} -> () => {  }
// (value,index) => {  }
// map(() => {}) -> callback function
foodList.map((value,index) => {
    //value: giá trị phần tử của mảng
    //index: vị trí
    console.log(value, index)

})
