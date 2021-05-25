function bai_1(){
let c=prompt('Input C = ?');
let f=c*9/5+32;
alert(`${f} do F`)
}
function bai_2(){
    let m=prompt('Input M = ?');
    let ft=m*3.2808;
    alert(`${ft} ft`)
}
function bai_3(){
    let a=prompt('Input a = ?');
    alert(`Dien tich : ${a*a}`)
}

function bai_4(){
    let a=prompt('Input a = ?');
    let b=prompt('Input b = ?');
    alert(`Dien tich : ${a*b}`)
}
function bai_5(){
    let a=prompt('Input a = ?');
    let b=prompt('Input b = ?');
    alert(`Dien tich : ${a*b/2}`)
}
function bai_6(){
    let a=prompt('Input a = ?');
    let b=prompt('Input b = ?');
    let x;
    if (isNaN(a) || isNaN(b)){
        alert("Hãy nhập vào số!")
    }
    else if (a == 0){
        alert("Phương trình vô nghiệm!")
    }
    else if (b == 0) {
        alert("Phương trình có vô số nghiệm!")
    }
    else{
        x = -b/a
        alert(`Kết quả x là: ${x}`)
    }
}
function bai_7(){
    let a=prompt('Input a = ?');
    let b=prompt('Input b = ?');
    let c=prompt('Input c = ?'); 
    if(a==0){
        x = -c/b;
        console.log('x =' + x);
    }
    else{
        if(a!=0){
            delta = b*b - 4*a*c;
            if(delta == 0){
                x = -b/(2*a);
                console.log('Phương trình có nghiệm kép là:');
                console.log('x = ' + x);
            }
            else
            {
                x1 =  (-b + Math.sqrt(delta))/(2*a);
                x2 =  (-b - Math.sqrt(delta))/(2*a);
                console.log('Phương trình có hai nghiệm phân biệt là:');
                console.log('x1 = ' + x1);
                console.log('x2 = ' + x2);
            }
        }
    }
}
function bai_8(){
    
}