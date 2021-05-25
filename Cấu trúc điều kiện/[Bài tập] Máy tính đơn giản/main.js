get_new();
var output = '', oldput = '', kt = '';
var number = document.getElementsByClassName('con_so');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        kt = this.id
        get_new();
        hien_thi(output, oldput);
    })
}
var cong_cu = document.getElementsByClassName('he_thong');
for (i = 0; i < cong_cu.length; i++) {
    cong_cu[i].addEventListener('click', function () {
        kt = this.id;
        get_new();
        hien_thi(output, oldput);

    })
}
function hien_thi(newed, old) {
    document.getElementById('gia_tri_cu').innerText = '';
    document.getElementById('gia_tri_cu').innerText = `${old}`;
    document.getElementById('gia_tri_xuat').innerText = '';
    document.getElementById('gia_tri_xuat').innerText = `${newed}`;
}
function get_new() {
    if (parseInt(kt)) {
        output = kt;
        oldput += kt;
    } else {
        if (kt != '=') {
            if (kt == 'xoa_tat_ca') {
                output = '';
                oldput = '';
                ketqua = 0
            }
            else if (kt == 'xoa_tung_so') {
                oldput.splice(oldput.length - 1, 1);
            } else {
                oldput = oldput + kt;
                output = '';
            }
        }
        if (kt == '=') {
            get_output();
            oldput='';
            output='';
        }
    }
}

function get_output() {
    let i=0,j='',kq=0;let check;
    if (parseInt(oldput[0])){
        check ="+"
    }else { check=""}
    while (i<oldput.length){
        j='';
        while(parseInt(oldput[i])){
            j+=oldput[i];
            i++
        }
        if (check=='+'){kq+=parseInt(j);}
        else if (check=='-'){kq-=parseInt(j);}
        else if (check=='*'){kq*=parseInt(j);}
        else if (check=='/'){kq/=parseInt(j);}
        else if (check=='%'){kq%=parseInt(j);}
        check=oldput[i];
    }
    output=kq;
}