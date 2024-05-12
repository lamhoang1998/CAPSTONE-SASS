

document.getElementById("btn").onclick = function () {
    var soNguoi = Number(document.getElementById("so_Nguoi").value);
    var tiLe = Number(document.getElementById("select").value);
    var tongTien = Number(document.getElementById("sotien").value);
    document.getElementById("output").innerHTML = tongTienTip(tiLe, soNguoi, tongTien) + "$"
    
}





tongTienTip = function (tiLe, soNguoi, tongTien) {
    var tienTip = (tongTien * (tiLe/100))/soNguoi;
    return tienTip;

}