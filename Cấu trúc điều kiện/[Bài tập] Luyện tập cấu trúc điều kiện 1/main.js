function bai_1(){
    let a=+prompt('Input a=?');
    let b=+prompt('Input b=?');
    (a%b==0)?alert(`${a} chia het cho ${b}`):alert(`${a} khong chia het cho ${b}`);
}
function bai_2(){
    let a=+prompt('Nhap tuoi :');
    alert(`${(a>=15)?'':'khong'} du tuoi`)
}
function bai_3(){
    let a=+prompt('Input :?');
    alert(`${(a>=0)?'lon':'be'} hon 0`)
}
function bai_4(){
    let a=+prompt('Input a=?');
    let b=+prompt('Input b=?');
    let c=+prompt('Input c=?');
    let max=a;
    if (max<b) {max=b};
    if (max<c) {max=c};
    alert(`${max} lon nhat`);

}
function bai_5(){
    let a=+prompt('Diem kiem tra?');
    let b=+prompt('Diem giua ky');
    let c=+prompt('Diem cuoi ky');
    let dtb=(a+b+c)/3;
    alert(`${(dtb>8)?'Gioi':(dtb>6.5)?'Kha':(dtb>5)?'Trung binh':'Yeu'}`)
}
function bai_6(){
    let a=+prompt('Doanh so?');
    let i=a*20/100;
    alert(`Hoa hong : ${i}`);
}
function bai_7(){
    let a=+prompt('Thoi gian goi : ?');
    let kq=60;
    kq+=a*150;
    alert(`cuoc : ${kq} VND`)
}