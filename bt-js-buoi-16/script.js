const numArray = []; floatArray = []

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
    let last = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            last = numArray[i]
        }
    }
    document.getElementById("txtSoChanCuoi").innerHTML = last;
}

function doiCho() {
    let p = document.getElementById("viTri1").value;
    let q = document.getElementById("viTri2").value;
    let r = numArray[p];
    numArray[p] = numArray[q];
    numArray[q] = r;
    document.getElementById("txtDoiCho").innerHTML = numArray
}

function tangDan() {
    for (let i = 0; i < numArray.length; i++) {
        for (let y = 0; y < numArray.length - 1; y++) {
            if (numArray[y] > numArray[y + 1]) {
                let t = numArray[y];
                numArray[y] = numArray[y + 1];
                numArray[y + 1] = t;
            }
        }
    }
    document.getElementById("txtTangDan").innerHTML = numArray
}

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    } return true;
}

function findPrime() {
    let n = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (isPrime(numArray[i])) {
            n = numArray[i]; break
        }
    }
    document.getElementById("txtsoNguyenTo").innerHTML = n == 0 ? "Không có số nguyên tố" : n
}

function addFloat() {
    let n = Number(document.getElementById("inputFloat").value);
    floatArray.push(n)
    document.getElementById("txtFloat").innerHTML = floatArray;

}

function countFloat() {
    let n = 0;
    for (let i = 0; i < floatArray.length; i++) {
        if (Number.isInteger(floatArray[i])) {
            n++
        }
    }
    document.getElementById("txtCountFloat").innerHTML = n;
}

function soSanhso() {
    let a = 0, b = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            a++
        } else if (numArray[i] < 0) {
            b++
        }
    }
    document.getElementById("txtSoSanh").innerHTML = a > b ? "Số dương > Số âm" : a < b ? "Số âm > Số dương" : "SỐ âm = Số dương";
}