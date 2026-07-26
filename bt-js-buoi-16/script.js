var numArray = [];

function addNum() {
    let n = Number(document.getElementById("inputNum").value);
    numArray.push(n)
    document.getElementById("txtNum").innerHTML = numArray;

}

function sumDuong() {
    let v = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            v = v + numArray[i]
        };
    }
    document.getElementById("txtSumDuong").innerHTML = v;
}

function countDuong() {
    let v = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            v++
        };
    }
    document.getElementById("txtCountDuong").innerHTML = v;
}

function soNhoNhat() {
    let min = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i]
        }
    }
    document.getElementById("txtSoNhoNhat").innerHTML = min;
}

function soDuongNhoNhat() {
    let d = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            d.push(numArray[i])
        }
    }
    if (d.length > 0) {
        let min = d[0];
        for (let y = 0; y < d.length; y++) {
            if (d[y] < min) {
                min = d[y]
            }
        }
        document.getElementById("txtSoDuongNhoNhat").innerHTML = min;
    } else document.getElementById("txtSoDuongNhoNhat").innerHTML = "Không có số dương";

}

function soChanCuoi() {

}













// function findEven() {
//     for (var n = 0, r = 0; r < numArray.length; r++)
//         numArray[r] % 2 == 0 && (n = numArray[r]);
//     getEle("txtEven").innerHTML = "Số chẵn cuối cùng: " + n
// }

// function swap(n, r) {
//     var e = numArray[n];
//     numArray[n] = numArray[r],
//         numArray[r] = e
// }

// function changePosition() {
//     swap(getEle("inputIndex1").value,
//         getEle("inputIndex2").value),
//         getEle("txtChangePos").innerHTML = "Mảng sau khi đổi: " + numArray
// }

// function sortIncrease() {
//     for (var n = 0; n < numArray.length; n++)
//         for (var r = 0; r < numArray.length - 1; r++)
//             numArray[r] > numArray[r + 1] && swap(r, r + 1);
//     getEle("txtIncrease").innerHTML = "Mảng sau khi sắp xếp: " + numArray
// }

// function checkPrime(n) {
//     if (n < 2) return !1;
//     for (var r = 2; r <= Math.sqrt(n); r++)
//         if (n % r == 0) return !1;
//     return !0
// }

// function findPrime() {
//     for (var n = -1, r = 0; r < numArray.length; r++) {
//         if (checkPrime(numArray[r])) {
//             n = numArray[r]; break
//         }
//     }
//     getEle("txtPrime").innerHTML = -1 !== n ? n : "Không có số nguyên tố"
// }

// function getFloat() {
//     var n = Number(getEle("inputFloat").value);
//     arrayFloat.push(n),
//         getEle("txtArrayFloat").innerHTML = arrayFloat
// }

// function findInt() {
//     for (var n = 0, r = 0; r < arrayFloat.length; r++)
//         Number.isInteger(arrayFloat[r]) && n++;
//     getEle("txtInt").innerHTML = "Số nguyên: " + n
// }

// function compareNum() {
//     for (var n = 0, r = 0, e = 0; e < numArray.length; e++)
//         numArray[e] > 0 ? n++ : numArray[e] < 0 && r++;
//     getEle("txtCompare").innerHTML = n > r ? "Số dương > Số âm" : n < r ? "Số âm > Số dương" : "Số âm = Số dương"
// }

// document.addEventListener("contextmenu", function (n) { n.preventDefault() }, !1),
//     document.onkeydown = function (n) {
//         return 123 != (n = n || window.event).keyCode && (!n.ctrlKey || !n.shiftKey || 73 != n.keyCode) && void 0
//     };
// var numArray = [], arrayFloat = [];