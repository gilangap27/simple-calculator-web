

const input = document.querySelector('.input');
const output = document.querySelector('.output');

let out = '';
let cekAngka = true, cekOperator = false;

input.addEventListener('click', function(e){
	if(e.target.className == 'angka'){
		out += e.target.textContent;
		cekOperator = true;
	} else if(e.target.textContent == 'C'){
		out = '';
	} else if(e.target.className == 'operator' && cekOperator == true){
		out += e.target.textContent;
	} else if(e.target.className == 'hasil'){
		let hasil = eval(out);
		out = hasil;
	}
	
	output.textContent = out;
})