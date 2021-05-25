function tinh_ngay(){
    let thang = +document.getElementById('thang').value;
    switch(thang){
        case 1: case 3: case 5: case 7: 
        case 8: case 10: case 12:
        alert(`Thang ${thang} co 31 ngay`);
        break;
        case 2:
            alert(`Thang ${thang} co 31 ngay`);
        break;
        case 4: case 6: case 9: case 11: 
        alert(`Thang ${thang} co 30 ngay`);
        break;
    }
}