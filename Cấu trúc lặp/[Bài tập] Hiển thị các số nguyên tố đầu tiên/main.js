function get(number){
    let check=true;
    for (let i=2;i<=Math.sqrt(number);i++){
        if (number%i==0){check=false}
    }
    return check;
}
let n=prompt('Input N = ?');
let count=0,i=1;
while (count<n){
    i++;
    if (get(i)){
        document.write(`${i} `)
        count++
    }
}

