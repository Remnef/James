let ly;
let hoa;
let sinh;
let doC;
let r;
const pi=3.14;

ly = prompt('Nhập điểm Lý');
hoa = prompt('Nhập điểm Hóa');
sinh = prompt('Nhập điểm sinh');
ly = parseInt(ly);
hoa = parseInt(hoa);
sinh = parseInt(sinh);
let tbc = ((ly+hoa+sinh));
document.write('<br>Điểm trung bình là : '+tbc);
doC = prompt('Nhập nhiệt độ cần chuyển đổi :')
doC = parseInt(doC);
let doF = (doC*9/5+32);
document.write('<br>Nhiệt độ chuyển đổi : '+doF+' độ F');
r = prompt('Nhập bán kinh hình tròn :')
let bankinh = 2*pi*r;
let dientich = pi*r**2;
document.write('<br>Diện tích :'+dientich+'<br>Bán kính :'+bankinh);
