let num = prompt("Enter a number: ");
let total=0;
while( num != -1 ) {
    num = +prompt("Enter a number: ");
    total += num;
 } 
alert(`Tong : ${total}`);
let i = 1;

while (i < 100) {
    //phân thân vòng lặp
    document.write("<hr width = " + i + "%>");
    i++;
}
