function cong(){
    let a = +document.getElementById('number_1').value;
    let b = +document.getElementById('number_2').value;
    let result = document.getElementById('result');
    result.innerHTML = `Result Division : ${a+b}`;
}
function tru(){
    let a = +document.getElementById('number_1').value;
    let b = +document.getElementById('number_2').value;
    let result = document.getElementById('result');
    result.innerHTML = `Result Division : ${a-b}`;
}
function nhan(){
    let a = +document.getElementById('number_1').value;
    let b = +document.getElementById('number_2').value;
    let result = document.getElementById('result');
    result.innerHTML = `Result Division : ${a*b}`;
}
function chia(){
    let a = +document.getElementById('number_1').value;
    let b = +document.getElementById('number_2').value;
    let result = document.getElementById('result');
    result.innerHTML = `Result Division : ${a/b}`;
}