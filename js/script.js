//Membuat DOM Selector untuk Element HTML
const input = document.querySelector('.input');
const output = document.querySelector('.output');

//Variable
let out = '';

//Memberi Event
input.addEventListener('click', function(e) {

    if (e.target.className == 'angka') {
        out += e.target.textContent;

    } else if (e.target.textContent == 'C') {
        out = '';

    } else if (e.target.textContent == 'DEL') {
        out = out.slice(0, -1);

    } else if (e.target.className == 'operator') {
        const cek = /\d/;
        let pot = out.substr(out.length - 1);

        if (cek.test(pot)) {
            out += e.target.textContent;

        } else {
            let temp = out.split('');
            temp.pop();
            temp.push(e.target.textContent);
            let hasil = temp.join('');
            out = hasil;

        }

    } else if (e.target.className == 'hasil') {
        let hasil = eval(out);
        out = hasil;

    }

    output.textContent = out;
})