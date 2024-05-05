//? Quy Đổi Tiền 

function usdToVnd(soTienUsa) {
    var tyGia = 23500;
    var soTienVnd = soTienUsa * tyGia;
    document.getElementById("ketQua").innerHTML = "Số tiền sau quy đổi là: " + soTienVnd + " VND";
}

function doiTien() {
    var usdInput = document.getElementById("usdInput").value;
    var soTienUsa = Number(usdInput);
    usdToVnd(soTienUsa);
}


//? Tính Diện tích & Chu vi Hình Chữ Nhật

function tinhToan() {
    var dai = Number(document.getElementById("chieuDaiInput").value);
    var rong = Number(document.getElementById("chieuRongInput").value);

    var dienTich = dai * rong;
    var chuVi = (dai + rong) * 2;

    var resultThongBao = "Diện tích của hình chữ nhật là: " + dienTich + "<br>";
    resultThongBao = resultThongBao + "Chu vi của hình chữ nhật là: " + chuVi;

    document.getElementById("result").innerHTML = resultThongBao;
}


//? Tính tổng 2 ký số

function calcSum() {
    var so = Number(document.getElementById("soCoHaiChuSo").value);

    var soHangDonVi = so % 10;
    var soHangChuc = Math.floor(so / 10);

    var tongNe = soHangDonVi + soHangChuc;

    var hienKetQua = "Tổng của hai ký số " + so + " là: " + tongNe;

    document.getElementById("dayRoi").innerHTML = hienKetQua;
}