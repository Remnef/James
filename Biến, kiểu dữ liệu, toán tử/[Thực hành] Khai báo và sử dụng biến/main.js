let i = 10
let f = 20.5
let c = true
let s = 'Hà Nội'

document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + c)
document.write('<br/>')
document.write('s = ' + s + '<br>')
let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area +'<br>')
var a;
var b;
a = prompt("Nhập a =");
b = prompt("Nhập b =");
if (a % b == 0){
    document.write(+ a +' chia hết cho '+ b );
}
else {
    document.write(+ a +' không chia hết cho '+ b );
}