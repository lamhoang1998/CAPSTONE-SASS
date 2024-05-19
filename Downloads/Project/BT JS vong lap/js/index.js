

//1. Tim so nguyen duong nho nhat sao cho 1+2+3+...+ n > 10000
//CACH 1
function timSoNguyenNhoNhat_For(soN) {

    var tong = 0;
    for (var count = 1; count + tong <= soN; count++) {
        tong = count + tong
    }
    console.log("Cach 1---For----So nguyen duong nho nhat sao cho 1+2+3+...+ n > 10000 la:", count)

}
timSoNguyenNhoNhat_For(10_000);
//Cach 2
function timSoNguyenNhoNhat_While(soN) {
    var tong = 0;
    var count = 1;
    while (count + tong < soN) {
        tong = count + tong;
        count += 1;
    }
    console.log("Cach 2---While----So nguyen duong nho nhat sao cho 1+2+3+...+ n > 10000 la:", count)
}
timSoNguyenNhoNhat_While(10_000);
//Cach 3
function timSoNguyenNhoNhat_DoWhile(soN) {
    var tong = 0;
    var count = 1;
    do {
        tong = count + tong;
        count += 1;
    } while (count + tong < soN)
    console.log("Cach 3---Do_While----So nguyen duong nho nhat sao cho 1+2+3+...+ n > 10000 la:", count)
}
timSoNguyenNhoNhat_DoWhile(10_000);

//2. Tinh tong S(n) khi nhap vao 2 so: x, n
//Cach 1: For
document.getElementById("log-1").onclick = function () {
    var x = Number(document.getElementById("x-1").value)
    var n = Number(document.getElementById("n-1").value)
    var outPut = "-FOR----Tong Sn la: " + (bai2TongSn_Do_While(x, n));

    document.getElementById('Sn').innerHTML = outPut

}
//Cach 1: For
function bai2TongSn_For(x, n) {
    var tong = 0;
    for (var count = 1; count <= n; count++) {
        tong = tong + Math.pow(x, count);
    }
    console.log("---For---tongSn la:", tong);
    return tong;
}
//Cach 2: While
function bai2TongSn_While(x, n) {
    var tong = 0;
    var count = 1;
    while (count <= n) {
        tong = tong + Math.pow(x, count);
        count++;
    }
    console.log("---While---tongSn la:", tong);
    return tong;
}
//Cach 3:Do- While
function bai2TongSn_Do_While(x, n) {
    var tong = 0;
    var count = 1;
    do {
        tong = tong + Math.pow(x, count);
        count++;
    }
    while (count <= n) {
    }
    console.log("---Do_While-tongSn  la:", tong);
    return tong;
}
//Bai 3, tinh giai thua
document.getElementById('log-2').onclick = function(){
    var n2 = Number(document.getElementById('n-2').value);
    var outPut2 = tinhGiaiThua_Do_While(n2);
    document.getElementById('Gt').innerHTML = "Giai thua cua so n la:" + outPut2;
}
//Cach 1--For
function tinhGiaiThua_For(n2){
    var giaiThua = 1;
    for(var count =1;count<=n2; count++){
        giaiThua = giaiThua*count;
    }
    console.log(giaiThua);
    return giaiThua;
}
//Cach 2--While
function tinhGiaiThua_While(n2){
    var giaiThua = 1;
    var count =1;
    while(count<=n2){
        giaiThua = giaiThua*count;
        count++;
    }
    console.log(giaiThua);
    return giaiThua;
}
//Cach 3--Do_While
function tinhGiaiThua_Do_While(n2){
    var giaiThua = 1;
    var count =1;
    do{
        giaiThua = giaiThua*count;
        count++;
    }
    while(count<=n2){
       
    }
    console.log(giaiThua);
    return giaiThua;
}
//Bai 4--In the Div
document.getElementById('log-3').onclick = function(){
    for(var count =1; count<=10; count++){
        document.getElementById('Bg1').style.backgroundColor = red;
    }

    
}

   



