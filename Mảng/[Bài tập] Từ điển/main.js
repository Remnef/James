
function convert(){
    let A=['hello','hi','do','from','name'];
let V=['chao','xin chao','lam','den tu','ten'];
let kt = document.getElementById('tu_khoa').value;
let j;
for (let i=0;i<A.length;i++){
    if (A[i]==kt){j=i;
        break}
}
alert(V[j]);
}
