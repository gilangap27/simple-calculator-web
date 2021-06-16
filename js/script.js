//Membuat DOM Selector untuk Element HTML
const input = document.querySelector('.input');
const output = document.querySelector('.output');

//Variable
let out = '';
let cekMin = true;
let cekOperator;
let hasilHitung = null;

//Memberi Event
input.addEventListener('click', function(e) {

    if (e.target.className == 'angka') {
        out += e.target.textContent;
        cekMin = false;

    } else if (e.target.className == 'operator') {
        const cek = /\d/;

        if(out.length > 1){
            cekOperator = out.substr(out.length - 1);
        }

        if (e.target.textContent == 'C') {
            out = '';

        } else if (e.target.textContent == 'DEL' && hasilHitung == null) {
            out = out.slice(0, -1);

        } else if (e.target.textContent == 'DEL' && hasilHitung != null) {
            out = '';
            hasilHitung = null;

        } else {
            if(e.target.textContent != '-' && cekMin == true){
                out = '';

            } else {

                if (cek.test(cekOperator)) {
                    out += e.target.textContent;

                } else {
                    let temp = out.split('');
                    temp.pop();
                    temp.push(e.target.textContent);
                    let hasil = temp.join('');
                    out = hasil;

                }

            }
        }


    } else if (e.target.className == 'hasil') {
        hasilHitung = eval(out);
        out = hasilHitung;
    }

    output.textContent = out;
})